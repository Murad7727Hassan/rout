const server  = require("http");
const urlmodels = require("url");
const fs = require("fs");
const app =server.createServer((req,res)=>{
    res.setHeader('Content-Type', 'text/html');
    console.log("start server")
 
    const urlparts =urlmodels.parse(req.url,true)
    
    switch(urlparts.pathname)
    {
        case "/home":
            {
               var readFiles= fs.createReadStream(__dirname+"/home.html","utf-8")
               readFiles.pipe(res)
               break;
            }
      
        case "/blog":
        {
           
            var readFiles= fs.createReadStream(__dirname+"/blog.html","utf-8")
            readFiles.pipe(res)
            break;
        }
        case "/login":
            {
                if(urlparts.query.type ==="adimn" || urlparts.query.type=== "user")
                { 
                    var readFiles= fs.createReadStream(__dirname+"/login.html","utf-8")
                    readFiles.pipe(res)
                }
                else
                {
                    res.statusCode=404;
                    var readFiles= fs.createReadStream(__dirname+"/notfount.html","utf-8")
                    readFiles.pipe(res)
                }
            }
        default:
            {
                res.statusCode=404;
                res.write("not found")
                break;
            }
            
    }
 })
app.listen('300');