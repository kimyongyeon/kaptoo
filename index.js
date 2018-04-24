let express = require("express")
let app = express()

let PORT = 3000

app.get("/", (req, res) => {
    res.send("hello kaptoo")
})

app.listen(PORT, () => {
    console.log("server start")
})

var cb0 = (req, res, next) => {
    console.log("cb0")
    next()
}
var cb1 = (req, res, next) => {
    console.log("cb1")
    next()
}
var cb2 = (req, res, next) => {
    console.log("cb2")
    res.send("cb2")
    next()
}

app.get("/cb", [cb0, cb1, cb2])