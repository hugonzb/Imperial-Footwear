import express from 'express';
import data from './data';

const app = express();

app.get("/api/shoes", (req, res) => {
    res.send(data.shoes);
});

app.listen(5000, () => (console.log("Server successfully started")));