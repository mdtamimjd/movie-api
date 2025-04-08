import { movieModel } from "../models/movie.js";

// create movie
export async function addMovie(req,res) {
    const {name,year,production,director,category,rating} = req.body;
    if(!name || !year){
        return res.send({success:false,message:"Name,Year is required!"})
    }
    const create = await movieModel.create({
        name,
        year,
        production,
        director,
        category,
        rating
    })
    res.send({success:true,movie:create})
}

// get movies 
export async function getMovies(req,res) {
    const movies = await movieModel.find()
    res.send({success:true,movie:movies})
}

// get movie by id
export async function getMovieById(req,res) {
    const movieId = req.params.id;
    const movie = await movieModel.findOne({_id:movieId})
    if(!movie){
        return res.send({success:false,message:`Not found movie by id ${movie}`})
    }
    res.send({success:true,movie})
}

// update movie by id
export async function movieUpdateById(req,res) {
    const movieId = req.params.id;
    const updateData = req.body;
    const updateMovie = await movieModel.findOneAndUpdate({_id:movieId},updateData)
    if(!updateMovie){
        return res.send({success:false,message:`Update not success`})
    }
    res.send({success:true,updateMovie})
}

// delete movie by id
export async function movieDeleteById(req,res) {
    const movieId = req.params.id;
    const deleteMovie = await movieModel.findOneAndDelete({_id:movieId})
    if(!deleteMovie){
        return res.send({success:false,message:`Update not success`})
    }
    res.send({success:true,deleteMovie})
}