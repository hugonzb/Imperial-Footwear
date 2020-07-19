import express from 'express'
import Shoe from '../models/shoeModel';
import { isAuth } from '../util';

const router = express.Router();

router.get('/', async (req, res) =>{
  const brand = req.query.brand ? { brand: req.query.brand } : {};
  const favorites = req.query.favorites ? { favorites: req.query.favorites } : {};
  const searchWord = req.query.searchWord ? { 
    name: {
      $regex: req.query.searchWord,
      $options: 'i',
    },
  } : {};
  const sortOrder = req.query.sortOrder ? { 
    type: {
      $regex: req.query.sortOrder,
      $options: 'i',
    },
  } : {};
  const shoes = await Shoe.find({...brand, ...favorites, ...searchWord, ...sortOrder});
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
      style: req.body.style,
      favorites: req.body.favorites,
    });
    const newShoe = await shoe.save();
    if(newShoe){
        return res.status(201).send({message: 'New shoe created', data: newShoe}); 
    }
    return res.status(500).send({message: 'Error in creating shoe'});
});

router.get('/:id', async (req, res) => {
    const shoe = await Shoe.findOne({ _id: req.params.id });
    if (shoe) {
      res.send(shoe);
    } else {
      res.status(404).send({ message: 'Shoe Not Found.' });
    }
});

router.post("/:id/reviews", isAuth, async (req, res) => {
  const shoe = await Shoe.findById(req.params.id);
  if(shoe){
    const review = {
      name: req.body.name,
      rating: Number(req.body.rating),
      comment: req.body.comment,
    };
    shoe.reviews.push(review);
    shoe.numRatings = shoe.reviews.length;
    shoe.rating = shoe.reviews.reduce((a, c) => c.rating + a, 0)/shoe.reviews.length;
    const updatedShoe = await shoe.save();
    res.status(201).send ({
      data: updatedShoe.reviews[updatedShoe.reviews.length-1],
      message: "Review Saved Successfully.",
    });
  }else{
    res.status(404).send({message: 'Shoe Not Found'});
  }
});
export default router;