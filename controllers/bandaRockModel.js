import mongoose from "mongoose";

const bandaRockSchema = new mongoose.Schema({
    "id": { type: String, required: true },
    "name": String,
    "country": String,
    "style": String 
})

const BandaRock = mongoose.model('BandaRock',bandaRockSchema)

export default BandaRock