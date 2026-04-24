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
  origin: 'http://localhost:5173',
  credentials: true
}));

app.use('/food', foodRoutes);
app.use('/recommendation', recommendationRoutes);

app.use(errorHandler);

// Only connect to database if not in test environment
if (process.env.NODE_ENV !== 'test') {
  mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/smart-food-app')
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;
