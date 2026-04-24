const insightService = require('../services/insightService');

exports.getRecommendation = async (req, res, next) => {
  try {
    const insightData = await insightService.getInsightData();
    res.status(200).json(insightData);
  } catch (error) {
    next(error);
  }
};
