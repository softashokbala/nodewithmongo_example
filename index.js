console.log("hello");
// Using Node.js `require()`
const mongoose = require('mongoose');
const express = require('express')
const Product = require('./models/product.model.js');
const productRoute = require('./routes/product.route.js');
const app = express();


//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/products", productRoute);


app.get('/', (req, res) => {
    res.send('Hello Super form Node API')
});


mongoose.connect('mongodb://localhost:27017/ashokdb')
    .then(() => {
        console.log('Connected to DB!');
        app.listen(3000, () => {
            console.log("Server is running on part port 3000");
        });
    })
    .catch(() => {
        console.log('Connected Failed');
    });


