import express from 'express';
import data from './data';
import config from './config';
import path from 'path';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import userRoutes from './routes/userRoutes';
import shoeRoutes from './routes/shoeRoutes';

const mongodbUrl = config.MONGODB_URL;
mongoose.connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).catch(error => console.log(error.reason));

const app = express();
app.use(bodyParser.json());
app.use("/api/users", userRoutes);
app.use("/api/shoes", shoeRoutes);

/*app.get("/api/shoes/:id", (req, res) => {
    const shoeId = req.params._id;
    const shoe = data.shoes.find(x=>x._id === shoeId);
    if(shoe)
        res.send(shoe);
    else
        res.status(404).send({msg: "Shoe not found. Please contact Hugo to let him know"})
});
app.get("/api/shoes", (req, res) => {
    res.send(data.shoes);
});

*/

app.use(express.static(path.join(__dirname, '/../front-end-display/build')));
app.get('*', (req, res) => { 
    res.sendFile(path.join('${__dirname}/../front-end-display/build/index.html'));
}); 

app.listen(config.PORT, () => { console.log("Server successfully started"); });