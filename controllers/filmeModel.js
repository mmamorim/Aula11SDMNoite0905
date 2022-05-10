import mongoose from "mongoose";

const filmeSchema = new mongoose.Schema({
    "id": { type: String, required: true },
    "name": String 
})

const Filme = mongoose.model('Filme',filmeSchema)

export default Filme