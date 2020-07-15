const express = require('express');
const mongoose = require('mongoose');
require('./models/User');
require('./models/Track');
const authRoutes = require('./routes/authRouts');
const trackRouts = require('./routes/trackRouts');

const bodyParser = require('body-parser');

const requireAuth = require('./middlewares/requireAuth');

const app = express();
app.use(bodyParser.json());
app.use(authRoutes);
app.use(trackRouts);

const mongoUri =
  'mongodb://admin:passwordpassword@cluster0-shard-00-00.knrnv.mongodb.net:27017,cluster0-shard-00-01.knrnv.mongodb.net:27017,cluster0-shard-00-02.knrnv.mongodb.net:27017/track?ssl=true&replicaSet=atlas-bzuf72-shard-0&authSource=admin&retryWrites=true&w=majority';
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
app.get('/', requireAuth, (req, res) => {
  res.send(`Your email: ${req.user.email} `);
});

app.listen(3000, () => {
  console.log('listening to 3000');
});
