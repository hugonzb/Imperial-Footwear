import mongoose from 'mongoose';

const shoeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    year: { type: String, required: true },
    price: { type: Number, default: 0, required: true },
    colorway: { type: String, required: true },
    rating: { type: Number, default: 0, required: true },
    stock: { type: Number, default: 0, required: true },
    style: { type: String, required: true },
})

const shoeModel = mongoose.model("Shoe", shoeSchema);

export default shoeModel;