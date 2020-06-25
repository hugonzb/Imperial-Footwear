import express from 'express'
import Shoe from '../models/shoeModel';

const router = express.Router();

router.get('/', async (req, res) =>{
  const category = req.query.category ? { category: req.query.category } : {};
  const searchWord = req.query.searchWord ? { 
    name: {
      $regex: req.query.searchWord,
      $options: 'i',
    },
  } : {};
  const sortOrder = req.query.sortOrder ? { 
    name: {
      $regex: req.query.sortOrder,
      $options: 'i',
    },
  } : {};
  const shoes = await Shoe.find({...category, ...searchWord, ...sortOrder});
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
});

router.get('/:id', async (req, res) => {
    const shoe = await Shoe.findOne({ _id: req.params.id });
    if (shoe) {
      res.send(shoe);
    } else {
      res.status(404).send({ message: 'Shoe Not Found.' });
    }
  });

export default router;