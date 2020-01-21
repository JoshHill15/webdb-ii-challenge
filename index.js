const express = require("express")
const server = express()
server.use(express.json())
const db = require("./dbConfig")


server.get("/", (req,res) => {
    res.status(200).json({hello: "world"})
})

server.get("/api/cars", (req,res) => {
    db("cars")
        .then(car => res.status(200).json(car))
        .catch(err => {
            console.log(err)
            res.status(500).json({error: "can't connect to cars"})
        })
})

server.post("/api/cars", (req,res) => {
    const { body } = req
    console.log("post request")
    db("cars").insert(body)
        .then(car => {
            res.status(200).json(car)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({error: "can't add to cars"})
        })
})

server.listen(3000, () => console.log("running on 3000"))