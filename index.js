const server  = require("http");
const urlmodels = require("url");
const app =server.createServer((req,res)=>{
    res.setHeader('Content-Type', 'text/html');
    // res.setHeader('Content-Type', 'application/json');
    console.log("start server")
    res.statusCode=404;
    res.write(req.url)
    res.write(req.method)
    res.write("welcome to my app")

    const urlparts =urlmodels.parse("http://localhost:300/login/user?id=45&type=adimn",true)
    console.log(urlparts.hostname)
    console.log(urlparts.host)
    console.log(urlparts.host)
    console.log(urlparts.query)//?
    console.log(urlparts.search)//?
    //using search for query from database if id = 33 display data
    console.log(urlparts.query.id)//?
    console.log(urlparts.query.type)//?
        // console.log(urlparts.hostname)
    // console.log(urlparts.host)
    // console.log(urlparts.host)
    // console.log(urlparts.query)//?
    // console.log(urlparts.search)//?
    // console.log(urlparts.path)//?
    // console.log(urlparts.pathname)//?
    // console.log(urlparts)//?
    //using search for query from database if id = 33 display data
    // console.log(urlparts.query.id)//?
    // console.log(urlparts.query.type)//?
        // res.statusCode=404;
    // res.write(req.url)
    // res.write(req.method)
    // res.write("welcome to my app")


    switch(urlparts.hostname)
    {
        case "/home":
            {
                res.write("home")
                break;
            }
            case "/about":
                {
                    res.write("about")
                    break;
                }
                case "/login":
            {
                if(req.method == "post")
                {
                    if(urlparts.query.type == 'adimn')
                    {
                        res.write("open login")
                    }
                    else
                    {
                        res.write("redirct page other")
                    }
                }
                else
                {
                    res.write("not found")
                }
                break;
            }
            case "/blog":
            {
                res.write("blog")
                break;
            }
            default:
                {
                    res.statusCode=404;
                    res.write("not found")
                    break;
                }
            
    }
    res.end();
})
app.listen('300');