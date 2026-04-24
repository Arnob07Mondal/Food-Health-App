const mongoose = require('mongoose');

const foodEntrySchema = new mongoose.Schema({
  name: { type: String, required: true },
  calories: { type: Number, required: true },
  mood: { type: String, enum: ['Happy', 'Stressed', 'Tired', 'Neutral'], default: 'Neutral' },
  createdAt: { type: Date, default: Date.now }
});

foodEntrySchema.index({ createdAt: -1 });

module.exports = mongoose.model('FoodEntry', foodEntrySchema);
