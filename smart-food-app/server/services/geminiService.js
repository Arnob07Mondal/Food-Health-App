const { GoogleGenerativeAI } = require('@google/generative-ai');

exports.generateInsight = async (foodData) => {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error('No Gemini API key provided');
  }

  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });

  const prompt = `User food data:
- Total calories today: ${foodData.totalCaloriesToday}
- Meals logged today: ${foodData.meals.join(', ') || 'None'}
- Goal: Maintain healthy balance

Generate a short, friendly health suggestion based on this data (1-2 sentences maximum). Do not use markdown, formatting, or bullet points. Just plain text.`;

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    let text = response.text();
    text = text.replace(/[*_~`#]/g, '').trim(); // Strip any accidental markdown
    return text;
  } catch (error) {
    console.error('Gemini API Error:', error.message);
    throw new Error('Failed to generate insight via Gemini');
  }
};
