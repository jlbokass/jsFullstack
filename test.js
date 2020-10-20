let http = require("http")

let ourApp = http.createServer(function (req, res){
    if (req.url == "/") {
        res.end("Hello and welcome to our site")
    }
    if (req.url == "/about") {
        res.end("Thank you for the interest in our campany")
    }
    if (req.url != "/" && req.url != "/about") {
        res.end("Whoops, we cannot find that page.")
    }
})

ourApp.listen(3000)