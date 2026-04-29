# Smart Food & Health App 🥗

A production-quality Smart Food & Health App with AI-powered insights, mood-based tracking, gamification, and a stunning glassmorphism UI.

## ✨ Features

- 🧠 **AI-Powered Daily Insights** — Google Gemini API generates personalized health suggestions
- 💊 **Smart Rule-Based Fallback** — Works even without the AI key
- 😊 **Mood-Based Eating Tracker** — Log meals with mood tags (Happy, Stressed, Tired, Neutral)
- 🔥 **Day Streak Gamification** — Track consecutive days of food logging
- ⚡ **Quick Add Suggestions** — Time-aware food pills for fast logging
- 💯 **Health Score** — Daily score (0–100) based on calories and consistency
- ⏰ **Time-Based Nudges** — Contextual reminders based on time of day

## 🛠️ Tech Stack

| Layer | Tech |
|---|---|
| Frontend | React 19, Vite, Tailwind CSS |
| Backend | Node.js, Express |
| Database | MongoDB Atlas |
| AI | Google Gemini API |
| Auth | None (focus on core features) |

## 🚀 Quick Start (Local)

### Prerequisites
- Node.js 18+
- MongoDB Atlas account (free tier works)
- Google Gemini API key

### 1. Clone the repo
```bash
git clone https://github.com/Arnob07Mondal/Food-Health-App.git
cd Food-Health-App/smart-food-app
```

### 2. Setup Backend
```bash
cd server
cp .env.example .env
# Fill in your MONGODB_URI and GEMINI_API_KEY in .env
npm install
npm start
```

### 3. Setup Frontend
```bash
cd client
cp .env.example .env
# Set VITE_API_URL=http://localhost:8080
npm install
npm run dev
```

Open **http://localhost:5173** in your browser.

## ☁️ Deployment (Recommended)

### Backend → Railway
1. Go to [railway.app](https://railway.app) and sign in with GitHub
2. Click **New Project → Deploy from GitHub Repo**
3. Select `Food-Health-App`, set root directory to `smart-food-app/server`
4. Add environment variables:
   - `MONGODB_URI` = your Atlas connection string
   - `GEMINI_API_KEY` = your Gemini key
   - `CLIENT_URL` = your Vercel frontend URL
5. Railway auto-detects Node.js and deploys!

### Frontend → Vercel
1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click **Add New → Project → Import** your GitHub repo
3. Set root directory to `smart-food-app/client`
4. Add environment variable:
   - `VITE_API_URL` = your Railway backend URL
5. Click Deploy!

## 🧪 Running Tests

```bash
cd server
npx jest
```

## 📁 Project Structure

```
smart-food-app/
├── client/                  # React + Vite frontend
│   ├── src/
│   │   ├── components/      # GlassCard, Input, Button
│   │   ├── pages/           # DashboardPage
│   │   └── services/        # Axios API instance
│   └── public/              # Static assets (bg-image.png)
└── server/                  # Node.js + Express backend
    ├── controllers/         # foodController, recommendationController
    ├── middlewares/         # errorHandler
    ├── models/              # FoodEntry (Mongoose)
    ├── routes/              # foodRoutes, recommendationRoutes
    ├── services/            # insightService, geminiService
    └── tests/               # Jest + Supertest tests
```

## 🔑 Environment Variables

### Server (`server/.env`)
| Variable | Description |
|---|---|
| `MONGODB_URI` | MongoDB Atlas connection string |
| `GEMINI_API_KEY` | Google Gemini API key |
| `CLIENT_URL` | Frontend URL for CORS (e.g., https://your-app.vercel.app) |
| `PORT` | Server port (default: 8080) |

### Client (`client/.env`)
| Variable | Description |
|---|---|
| `VITE_API_URL` | Backend URL (e.g., https://your-backend.railway.app) |
