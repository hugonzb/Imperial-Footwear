import express from 'express';
import data from './data';
import config from './config';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import userRoutes from './routes/userRoutes';

dotenv.config();

const mongodbUrl = config.MONGODB_URL;
mongoose.connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).catch(error => console.log(error.reason));

const app = express();
app.use(bodyParser.json());
app.use("/api/users", userRoutes);
app.get("/api/shoes/:id", (req, res) => {
    const shoeId = req.params.id;
    const shoe = data.shoes.find(x=>x.id === shoeId);
    if(shoe)
        res.send(shoe);
    else
        res.status(404).send({msg: "Shoe not found. Please contact Hugo to let him know"})
});
app.get("/api/shoes", (req, res) => {
    res.send(data.shoes);
});

app.use(express.static(path.join(__dirname, '/../front-end-display/build')));
app.get('*', (req, res) => { 
    res.sendFile(path.join('${__dirname}/../front-end-display/build/index.html'));
});
app.listen(config.PORT, () => { console.log("Server successfully started"); });