const express = require('express');
const mongoose = require('mongoose');
require('./models/User');
const authRoutes = require('./routes/authRouts');
const bodyParser = require('body-parser');


const app = express();
app.use(bodyParser.json());
app.use(authRoutes);
const mongoUri =
  'mongodb+srv://admin:passwordpassword@cluster0.knrnv.mongodb.net/track?retryWrites=true&w=majority';
mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useCreateIndex: true,
});

mongoose.connection.on('connected', () => {
  console.log('connected to mongo instance');
});

mongoose.connection.on('error', (err) => {
  console.error('error ', err);
});
app.get('/', (req, res) => {
  res.send('hi there!');
});

app.listen(3000, () => {
  console.log('listening to 3000');
});
