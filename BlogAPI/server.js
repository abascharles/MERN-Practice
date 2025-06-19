const express = require('express');
const mongoose = require('mongoose');
const postRoutes = require('./routes/routes');

//Create express server and middleware
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const mongoUri = 'mongodb://localhost:27017/postsdb';
const port = 3000;

//MongoDb connection
mongoose
  .connect(mongoUri)
  .then(() => console.log('Connected to mongoDB'))
  .catch(err => console.error('Could not connect to mongoDB', err));

app.use('/api/posts', postRoutes);

//Fire up the server
app.listen(port, () => {
  console.log(`Server is running at local host http://localhost${port}`);
});
