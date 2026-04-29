<div align="center">

# 🥗 Smart Food & Health App

### AI-Powered Daily Health Insights, Mood Tracking & Gamification

[![Live Demo](https://img.shields.io/badge/🚀%20Live%20Demo-food--health--app--eta.vercel.app-6366f1?style=for-the-badge)](https://food-health-app-eta.vercel.app/)
[![Backend](https://img.shields.io/badge/Backend-Railway-0B0D0E?style=for-the-badge&logo=railway)](https://railway.app)
[![Frontend](https://img.shields.io/badge/Frontend-Vercel-000000?style=for-the-badge&logo=vercel)](https://vercel.com)
[![MongoDB](https://img.shields.io/badge/Database-MongoDB%20Atlas-47A248?style=for-the-badge&logo=mongodb)](https://mongodb.com)

</div>

---

## 🌐 Live App

> **[https://food-health-app-eta.vercel.app/](https://food-health-app-eta.vercel.app/)**

Open in any browser — no login required. Start logging your meals and get AI-powered health insights instantly!

---

## ✨ Features

| Feature | Description |
|---|---|
| 🧠 **AI Daily Insights** | Google Gemini API generates personalized 1-2 line health suggestions based on your food data |
| 🔄 **Smart Fallback** | If AI fails, a robust rule-based engine takes over instantly |
| 😊 **Mood Tracker** | Log meals with mood tags — Happy, Stressed, Tired, Neutral — get mood-based suggestions |
| 🔥 **Streak System** | Gamified day streak tracking to encourage consistent healthy habits |
| ⚡ **Quick Add** | Time-aware food pills (Morning/Afternoon/Evening) for one-tap meal logging |
| 💯 **Health Score** | Daily 0-100 score based on calorie goals and meal consistency |
| ⏰ **Time Nudges** | Contextual reminders tailored to your time of day |
| 🎨 **Glassmorphism UI** | Stunning iOS-style frosted glass design with an abstract blurred food background |

---

## 🛠️ Tech Stack

```
Frontend          →   React 19 + Vite + Tailwind CSS
Backend           →   Node.js + Express.js
Database          →   MongoDB Atlas (Cloud)
AI Engine         →   Google Gemini API (@google/generative-ai)
Deployment        →   Vercel (Frontend) + Railway (Backend)
Testing           →   Jest + Supertest
Containerization  →   Docker (Dockerfile included)
```

---

## 🗂️ Project Structure

```
smart-food-app/
├── 📁 client/                  # React + Vite Frontend
│   ├── src/
│   │   ├── components/         # GlassCard, Input, Button
│   │   ├── pages/              # DashboardPage
│   │   └── services/           # Axios API instance
│   └── public/                 # Static assets
│
└── 📁 server/                  # Node.js + Express Backend
    ├── controllers/            # foodController, recommendationController
    ├── middlewares/            # errorHandler
    ├── models/                 # FoodEntry (Mongoose Schema)
    ├── routes/                 # foodRoutes, recommendationRoutes
    ├── services/               # insightService, geminiService
    └── tests/                  # Jest + Supertest tests
```

---

## 🚀 Run Locally

### Prerequisites
- Node.js 18+
- MongoDB Atlas account (free tier)
- Google Gemini API key ([Get one free](https://aistudio.google.com/app/apikey))

### 1. Clone the repo
```bash
git clone https://github.com/Arnob07Mondal/Food-Health-App.git
cd Food-Health-App/smart-food-app
```

### 2. Setup Backend
```bash
cd server
cp .env.example .env
# Edit .env — add your MONGODB_URI and GEMINI_API_KEY
npm install
npm start
# ✅ Server running on http://localhost:8080
```

### 3. Setup Frontend
```bash
cd ../client
cp .env.example .env
# Edit .env — set VITE_API_URL=http://localhost:8080
npm install
npm run dev
# ✅ App running on http://localhost:5173
```

---

## 🔑 Environment Variables

### `server/.env`
```env
MONGODB_URI=your_mongodb_atlas_connection_string
GEMINI_API_KEY=your_google_gemini_api_key
CLIENT_URL=http://localhost:5173
PORT=8080
```

### `client/.env`
```env
VITE_API_URL=http://localhost:8080
```

---

## 🧪 Running Tests

```bash
cd server
npx jest
```

Tests verify:
- ✅ Food entry creation with mood
- ✅ Gemini AI fallback to rule-based insights
- ✅ Recommendation endpoint returns all insight fields

---

## ☁️ Deploy Your Own

| Platform | Part | Steps |
|---|---|---|
| **Railway** | Backend | Connect GitHub → Root: `smart-food-app/server` → Add env vars |
| **Vercel** | Frontend | Connect GitHub → Root: `smart-food-app/client` → Add `VITE_API_URL` |

---

## 🤖 AI Integration Architecture

```
User loads Dashboard
        ↓
Backend calls geminiService.js
        ↓
   Gemini API responds?
      ✅ YES              ❌ NO (error/timeout)
        ↓                        ↓
 AI Insight shown          Rule-based Insight
 (dynamic text)            (instant fallback)
```

---

<div align="center">

Built with ❤️ for the AMD Promptathon

[![Live Demo](https://img.shields.io/badge/Try%20it%20now-food--health--app--eta.vercel.app-6366f1?style=for-the-badge)](https://food-health-app-eta.vercel.app/)

</div>
