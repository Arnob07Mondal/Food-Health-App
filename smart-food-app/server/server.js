const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const foodRoutes = require('./routes/foodRoutes');
const recommendationRoutes = require('./routes/recommendationRoutes');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

app.use(express.json());
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:5173',
  credentials: true
}));

app.use('/food', foodRoutes);
app.use('/recommendation', recommendationRoutes);

app.use(errorHandler);

// Only connect to database if not in test environment
if (process.env.NODE_ENV !== 'test') {
  mongoose.connect(process.env.MONGODB_URI || process.env.MONGO_URI || 'mongodb://localhost:27017/smart-food-app')
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

  const PORT = process.env.PORT || 8080;
  app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
  });
}

module.exports = app;
