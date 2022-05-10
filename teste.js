
import mongoose from "mongoose";

let db = mongoose.connect("mongodb://localhost/teste01").then(() => {
    console.log("conexão ok");
})

let bandaRockSchema = new mongoose.Schema({
    "id": { type: String, required: true },
    "name": String,
    "country": String,
    "style": String 
})

let modelBandaRock = mongoose.model('BandaRock',bandaRockSchema)

let banda = new modelBandaRock({
    id: "banda03",
    name: "AC/DC",
    country: "Australia",
    style: "Rock"
})
//banda.save()
//console.log(banda);

modelBandaRock.find({}).then((data) => {
    console.log(data);
}) 