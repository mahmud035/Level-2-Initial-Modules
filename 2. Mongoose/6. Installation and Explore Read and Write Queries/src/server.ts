const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 5000;
const colors = require('colors');
const cors = require('cors');

//* Middleware
app.use(cors());

//* Database Connection
const dbConnect = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/practice-mongoose');
    console.log(`Database Connected`.yellow.italic);
  } catch (error) {
    console.log(error.name.bgRed, error.message.bold, error.stack);
  }
};
dbConnect();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server Up and Running`.cyan.bold);
});
