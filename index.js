const express = require('express')
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const productRoute = require('./routes/product.route.js')
const app = express()

// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false })) //this is for form url encoded format added products posting

// routes
app.use('/api/products', productRoute)

app.get('/', (req, res) => {
  res.send("Hello from Node API Server Updated")
});

mongoose.connect("mongodb+srv://njbt_db_user:4ESAxr8Y2C6yzbQ9@backenddb.v4ksq9u.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB")
  .then(() => {
    console.log("Connected to database!");
    app.listen(3000, () => {
      console.log('Server is running on port 3000')
    })
  })
  .catch(() => {
    console.log("Connection failed")
  })