const FoodEntry = require('../models/FoodEntry');

const getInsightData = async () => {
  const now = new Date();
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const foodsToday = await FoodEntry.find({
    createdAt: { $gte: today }
  });

  const totalCaloriesToday = foodsToday.reduce((acc, food) => acc + food.calories, 0);

  // 1. Time-Based Nudge
  const currentHour = now.getHours();
  let timeBasedNudge = '';
  if (currentHour >= 5 && currentHour < 12) {
    timeBasedNudge = 'Start your day with a healthy breakfast';
  } else if (currentHour >= 12 && currentHour < 18) {
    timeBasedNudge = 'Stay hydrated and eat balanced meals';
  } else {
    timeBasedNudge = 'Keep dinner light for better sleep';
  }

  // 2. Smart Insight
  let smartInsight = '';
  const breakfastEntries = foodsToday.filter(f => {
    const h = new Date(f.createdAt).getHours();
    return h >= 5 && h < 11;
  });

  const generateRuleBasedInsight = () => {
    if (totalCaloriesToday > 2500) {
      return 'You consumed high calories today, consider a lighter dinner';
    } else if (breakfastEntries.length === 0 && currentHour >= 11) {
      return 'You skipped breakfast, which may affect energy levels';
    } else if (totalCaloriesToday >= 1500 && totalCaloriesToday <= 2500) {
      return 'Great job maintaining balanced meals today';
    } else {
      return 'Keep tracking your meals to get smart insights';
    }
  };

  try {
    const geminiService = require('./geminiService');
    const meals = foodsToday.map(f => f.name);
    smartInsight = await geminiService.generateInsight({ totalCaloriesToday, meals });
  } catch (error) {
    console.log('Falling back to rule-based insight:', error.message);
    smartInsight = generateRuleBasedInsight();
  }

  // 3. Mini Health Score (0-100)
  let healthScore = 50;
  if (totalCaloriesToday > 0) {
    const calDiff = Math.abs(2000 - totalCaloriesToday);
    if (calDiff <= 500) healthScore += 30;
    else if (calDiff <= 1000) healthScore += 15;
    
    if (foodsToday.length >= 3) healthScore += 20;
    else if (foodsToday.length === 2) healthScore += 10;
  } else {
    healthScore = 0;
  }

  // 4. Streak System
  const allEntries = await FoodEntry.find().sort({ createdAt: -1 });
  let streak = 0;
  if (allEntries.length > 0) {
    let lastDate = new Date();
    lastDate.setHours(0, 0, 0, 0);
    
    const uniqueDates = [...new Set(allEntries.map(e => {
      const d = new Date(e.createdAt);
      d.setHours(0, 0, 0, 0);
      return d.getTime();
    }))].sort((a, b) => b - a);

    let expectedDate = lastDate.getTime();

    if (uniqueDates[0] === expectedDate || uniqueDates[0] === expectedDate - 86400000) {
      if (uniqueDates[0] === expectedDate - 86400000) {
        expectedDate -= 86400000;
      }
      for (let time of uniqueDates) {
        if (time === expectedDate) {
          streak++;
          expectedDate -= 86400000;
        } else {
          break;
        }
      }
    }
  }

  return {
    totalCaloriesToday,
    timeBasedNudge,
    smartInsight,
    healthScore,
    streak
  };
};

module.exports = { getInsightData };
