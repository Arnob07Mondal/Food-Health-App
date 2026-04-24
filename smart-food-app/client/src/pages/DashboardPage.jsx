import { useState, useEffect } from 'react';
import GlassCard from '../components/GlassCard';
import Input from '../components/Input';
import Button from '../components/Button';
import api from '../services/api';

const MOODS = ['Neutral', 'Happy', 'Stressed', 'Tired'];

const QUICK_SUGGESTIONS = {
  morning: [{ name: 'Oats', cal: 150 }, { name: 'Eggs', cal: 140 }, { name: 'Fruit', cal: 80 }],
  afternoon: [{ name: 'Rice + Veg', cal: 350 }, { name: 'Salad', cal: 200 }, { name: 'Chicken', cal: 300 }],
  evening: [{ name: 'Soup', cal: 120 }, { name: 'Light Meal', cal: 250 }, { name: 'Veggies', cal: 100 }]
};

const DashboardPage = () => {
  const [foods, setFoods] = useState([]);
  const [insight, setInsight] = useState(null);
  const [name, setName] = useState('');
  const [calories, setCalories] = useState('');
  const [mood, setMood] = useState('Neutral');
  
  const currentHour = new Date().getHours();
  const timeOfDay = currentHour < 12 ? 'morning' : currentHour < 17 ? 'afternoon' : 'evening';
  const quickAdds = QUICK_SUGGESTIONS[timeOfDay];

  const fetchData = async () => {
    try {
      const [foodsRes, recRes] = await Promise.all([
        api.get('/food/all'),
        api.get('/recommendation')
      ]);
      setFoods(foodsRes.data);
      setInsight(recRes.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchData();
  }, []);

  const handleAddFood = async (e) => {
    e.preventDefault();
    try {
      await api.post('/food/add', { name, calories, mood });
      setName('');
      setCalories('');
      setMood('Neutral');
      fetchData();
    } catch (err) {
      console.error(err);
    }
  };

  const getMoodSuggestion = () => {
    switch(mood) {
      case 'Stressed': return "Consider healthy comfort foods like dark chocolate or oatmeal.";
      case 'Tired': return "Energy-boosting meals like nuts, bananas, or a light salad are great!";
      case 'Happy': return "Great mood! Keep it going with a balanced meal.";
      default: return "";
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-4 py-8 min-h-screen flex flex-col gap-6">
      <div className="flex justify-between items-center mb-2">
        <h1 className="text-3xl font-bold">Health Dashboard</h1>
        {insight && (
          <div className="bg-orange-500/80 text-white px-4 py-2 rounded-full font-bold shadow-lg flex items-center gap-2">
            🔥 {insight.streak} Day Streak
          </div>
        )}
      </div>

      {insight && (
        <div className="grid md:grid-cols-3 gap-6">
          <GlassCard className="md:col-span-2 bg-gradient-to-r from-white/20 to-white/5 border-white/40">
            <h2 className="text-xl font-semibold mb-3">Daily Insight</h2>
            <div className="flex flex-col gap-3">
              <div className="bg-white/10 p-3 rounded-lg text-sm border border-white/10">
                ✨ <strong>AI Insight:</strong> {insight.smartInsight}
              </div>
              <div className="bg-white/10 p-3 rounded-lg text-sm border border-white/10">
                ⏰ <strong>Reminder:</strong> {insight.timeBasedNudge}
              </div>
              <div className="text-2xl font-bold mt-2">
                {insight.totalCaloriesToday} <span className="text-sm font-normal text-white/80">kcal consumed today</span>
              </div>
            </div>
          </GlassCard>

          <GlassCard className="flex flex-col items-center justify-center text-center">
            <h2 className="text-lg font-semibold mb-2">Health Score</h2>
            <div className="relative w-32 h-32 flex items-center justify-center rounded-full border-4 border-white/30">
              <span className="text-4xl font-bold">{insight.healthScore}</span>
            </div>
            <p className="text-xs text-white/70 mt-3">Target: 2000 kcal & consistent meals</p>
          </GlassCard>
        </div>
      )}

      <div className="grid md:grid-cols-3 gap-6">
        <GlassCard className="md:col-span-1 h-fit">
          <h2 className="text-xl font-semibold mb-4">Log Meal</h2>
          
          <div className="mb-4">
            <p className="text-xs text-white/80 mb-2">Quick Add Suggestions:</p>
            <div className="flex flex-wrap gap-2">
              {quickAdds.map(q => (
                <button 
                  key={q.name}
                  type="button"
                  onClick={() => { setName(q.name); setCalories(q.cal); }}
                  className="bg-white/20 hover:bg-white/30 px-3 py-1 rounded-full text-xs transition-colors"
                >
                  {q.name} ({q.cal})
                </button>
              ))}
            </div>
          </div>

          <form onSubmit={handleAddFood}>
            <Input 
              label="Food Name" 
              id="name" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="e.g. Apple"
            />
            <Input 
              label="Calories" 
              id="calories" 
              type="number"
              value={calories}
              onChange={(e) => setCalories(e.target.value)}
              required
              placeholder="e.g. 95"
            />
            
            <div className="mb-5">
              <label className="block text-white mb-2 text-sm font-medium">How are you feeling?</label>
              <div className="flex gap-2">
                {MOODS.map(m => (
                  <button
                    key={m}
                    type="button"
                    onClick={() => setMood(m)}
                    className={`flex-1 py-1 px-1 rounded-lg text-xs font-medium border transition-all ${mood === m ? 'bg-white text-blue-600 border-white' : 'bg-transparent border-white/30 text-white hover:bg-white/10'}`}
                  >
                    {m}
                  </button>
                ))}
              </div>
              {mood !== 'Neutral' && (
                <p className="text-xs mt-2 text-blue-200 bg-blue-900/40 p-2 rounded">{getMoodSuggestion()}</p>
              )}
            </div>

            <Button type="submit">Log Food</Button>
          </form>
        </GlassCard>

        <GlassCard className="md:col-span-2">
          <h2 className="text-xl font-semibold mb-4">Food History</h2>
          {foods.length === 0 ? (
            <p className="text-white/70">No foods logged yet. Start adding some!</p>
          ) : (
            <div className="space-y-3 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
              {foods.map(food => (
                <div key={food._id} className="flex justify-between items-center bg-white/5 p-3 rounded-xl border border-white/10">
                  <div>
                    <div className="font-semibold flex items-center gap-2">
                      {food.name} 
                      {food.mood !== 'Neutral' && <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded-full">{food.mood}</span>}
                    </div>
                    <div className="text-xs text-white/60">{new Date(food.createdAt).toLocaleString()}</div>
                  </div>
                  <div className="font-bold">{food.calories} kcal</div>
                </div>
              ))}
            </div>
          )}
        </GlassCard>
      </div>
    </div>
  );
};

export default DashboardPage;
