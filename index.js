
const express = require("express")
const app = express()
const path = require("path")
app.use(express.static('public'))
app.listen(3000,() => {
    console.log("listening on 3000")
})

app.get("/about", (request, response)=> {
    response.sendFile(path.resolve(__dirname,"WebPages/about.html"))
})

app.get("/", (request, response)=> {
    response.sendFile(path.resolve(__dirname,"WebPages/index.html"))
})

app.get("/contact", (request, response)=> {
    response.sendFile(path.resolve(__dirname,"WebPages/contact.html"))
})
