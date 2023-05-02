const express = require("express")
const cors = require("cors")

const app = express()

app.use(express.json())
app.use(cors())

//the destructure is the require do not have to require the entire controller file up top
const {getMovies, addMovie, updateMovie, deleteMovie} = require("./controller")

app.get("/api/movies", getMovies)

app.post("/api/movies", addMovie)

app.put("/api/movies/:id", updateMovie)

app.delete("/api/movies/:id", deleteMovie)






app.listen(4004, () => {
    console.log("Listening on port 4004")
})