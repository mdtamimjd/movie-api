import {Schema,model} from "mongoose";

const movieSchema = new Schema({
    name: { type: String, required: true },
    year: { type: Number, required: true },
    production: { type: String },
    director: { type: String },
    category: { type: String },
    rating: { type: Number, min: 0, max: 10 },
    createTime: { type: Date, default: Date.now }
})

export const movieModel = model("movie",movieSchema)