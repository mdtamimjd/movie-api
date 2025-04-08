import express from 'express'
import dotenv from 'dotenv'
import connectDB from './lib/db.js';
import { addMovie, getMovieById, getMovies, movieDeleteById, movieUpdateById } from './controllers/movie.js';
dotenv.config()

const app = express()
app.use(express.json())
const PORT = process.env.PORT || 5000;

app.get("/",(req,res)=>{
    res.send("Hello")
})

// route

// add movie
app.post("/movie",addMovie)

// get movies
app.get("/movie",getMovies)

// get movie by id
app.get("/movie/:id",getMovieById)

// update movie by id
app.put("/movie/:id",movieUpdateById)

// delete movie by id
app.delete("/movie/:id",movieDeleteById)

app.listen(PORT,()=>{
    connectDB()
    console.log(`server is running on the port: ${PORT}`)
})