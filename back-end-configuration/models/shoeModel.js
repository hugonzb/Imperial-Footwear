import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
    name:{type: String, required: true},
    rating: {type:Number, default:0},
    comment: {type: String, required: true},
    
});

const shoeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    year: { type: String, required: true },
    price: { type: Number, default: 0, required: true },
    colorway: { type: String, required: true },
    rating: { type: Number, default: 0, required: true },
    numRatings: { type: Number, default: 0, required: true },
    stock: { type: Number, default: 0, required: true },
    reviews: { reviewSchema }, 
    style: { type: String, required: true },
    favorites: { type: String, required: true },
});

const shoeModel = mongoose.model("Shoe", shoeSchema);

export default shoeModel;