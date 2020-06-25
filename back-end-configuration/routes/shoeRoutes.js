import express from 'express'
import Shoe from '../models/shoeModel';

const router = express.Router();

router.get('/', async (req, res) =>{
    const shoes = await Shoe.find({});
    res.send(shoes);
}); 

router.post("/", async(req, res) => {
    const shoe = new Shoe({
      name: req.body.name,
      image: req.body.image,  
      price: req.body.price,
      year: req.body.year,
      colorway: req.body.colorway,
      rating: req.body.rating,
      stock: req.body.stock,
      style :req.body.style,
    });
    const newShoe = await shoe.save();
    if(newShoe){
        return res.status(201).send({message: 'New shoe created', data: newShoe}); 
    }
    return res.status(500).send({message: 'Error in creating shoe'});
})

export default router;