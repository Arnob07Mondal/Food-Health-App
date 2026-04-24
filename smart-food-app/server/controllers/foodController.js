const FoodEntry = require('../models/FoodEntry');

exports.addFood = async (req, res, next) => {
  try {
    const { name, calories, time, mood } = req.body;
    if (!name || !calories) {
      res.status(400);
      throw new Error('Please add name and calories');
    }
    const food = await FoodEntry.create({
      name,
      calories: Number(calories),
      mood: mood || 'Neutral',
      createdAt: time ? new Date(time) : new Date()
    });
    res.status(201).json(food);
  } catch (error) {
    next(error);
  }
};

exports.getFoods = async (req, res, next) => {
  try {
    const foods = await FoodEntry.find().sort({ createdAt: -1 });
    res.status(200).json(foods);
  } catch (error) {
    next(error);
  }
};
