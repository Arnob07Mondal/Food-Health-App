<div align="center">

# 🥗 Smart Food & Health App

### AI-Powered Daily Health Insights, Mood Tracking & Gamification

[![Live Demo](https://img.shields.io/badge/🚀%20Live%20Demo-Click%20Here-6366f1?style=for-the-badge)](https://food-health-app-eta.vercel.app/)
[![Backend](https://img.shields.io/badge/Backend-Railway-0B0D0E?style=for-the-badge&logo=railway)](https://railway.app)
[![Frontend](https://img.shields.io/badge/Frontend-Vercel-000000?style=for-the-badge&logo=vercel)](https://vercel.com)
[![MongoDB](https://img.shields.io/badge/Database-MongoDB%20Atlas-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://mongodb.com)
[![Gemini](https://img.shields.io/badge/AI-Google%20Gemini-4285F4?style=for-the-badge&logo=google&logoColor=white)](https://aistudio.google.com)
[![React](https://img.shields.io/badge/Frontend-React%2019-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![Node.js](https://img.shields.io/badge/Backend-Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org)

<br/>

> **A production-quality health app that logs your meals, tracks your mood, calculates your health score, and generates AI-powered insights using Google Gemini — all with a stunning iOS glassmorphism UI.**

<br/>

### 🌐 [https://food-health-app-eta.vercel.app/](https://food-health-app-eta.vercel.app/)

</div>

---

## ✨ Features at a Glance

| | Feature | Description |
|---|---|---|
| 🧠 | **AI Daily Insights** | Google Gemini generates personalized health suggestions from your food data |
| 🔄 | **Smart Fallback** | Rule-based engine kicks in instantly if AI is unavailable |
| 😊 | **Mood Tracker** | Tag meals with your mood — get contextual food suggestions |
| 🔥 | **Day Streak** | Gamified consecutive-day tracking to build healthy habits |
| ⚡ | **Quick Add** | Time-aware food pills for one-tap logging (Morning / Afternoon / Evening) |
| 💯 | **Health Score** | Daily 0–100 score based on calorie goals and meal consistency |
| ⏰ | **Time Nudges** | Smart reminders tailored to your current time of day |
| 🎨 | **Glass UI** | iOS-style frosted glass design with vibrant abstract gradient background |

---

## 🛠️ Tech Stack

```
Frontend    →   React 19  +  Vite  +  Tailwind CSS
Backend     →   Node.js   +  Express.js
Database    →   MongoDB Atlas (Cloud)
AI Engine   →   Google Gemini API
Deployed    →   Vercel (Frontend)  +  Railway (Backend)
Tests       →   Jest + Supertest
Container   →   Docker (Dockerfile included)
```

---

## 🤖 AI Architecture

```
  User loads Dashboard
          │
          ▼
  geminiService.js sends prompt
          │
   ┌──────┴──────┐
   │             │
  ✅ AI Works   ❌ AI Fails
   │             │
   ▼             ▼
Gemini text    Rule-based
 insight       fallback
```

The app **never breaks** — if Gemini fails, the fallback logic serves an instant rule-based insight.

---

## 🗂️ Project Structure

```
Food-Health-App/
└── smart-food-app/
    ├── 📁 client/               # React + Vite Frontend
    │   ├── src/
    │   │   ├── components/      # GlassCard, Input, Button
    │   │   ├── pages/           # DashboardPage
    │   │   └── services/        # Axios API instance
    │   └── public/              # bg-image.png (blurred food art)
    │
    └── 📁 server/               # Node.js + Express Backend
        ├── controllers/         # foodController, recommendationController
        ├── middlewares/         # errorHandler
        ├── models/              # FoodEntry (Mongoose)
        ├── routes/              # /food, /recommendation
        ├── services/            # insightService, geminiService
        └── tests/               # Jest + Supertest
```

---

## 🚀 Run Locally in 5 Minutes

```bash
# 1. Clone
git clone https://github.com/Arnob07Mondal/Food-Health-App.git
cd Food-Health-App/smart-food-app

# 2. Start Backend
cd server
cp .env.example .env        # Fill in your MONGODB_URI + GEMINI_API_KEY
npm install && npm start    # → http://localhost:8080

# 3. Start Frontend (new terminal)
cd ../client
cp .env.example .env        # Set VITE_API_URL=http://localhost:8080
npm install && npm run dev  # → http://localhost:5173
```

---

## 🔑 Environment Variables

**`server/.env`**
```env
MONGODB_URI=mongodb+srv://...
GEMINI_API_KEY=your_key_here
CLIENT_URL=http://localhost:5173
PORT=8080
```

**`client/.env`**
```env
VITE_API_URL=http://localhost:8080
```

---

## 🧪 Tests

```bash
cd smart-food-app/server
npx jest
```

**Covers:**
- ✅ Food entry creation with mood field
- ✅ Gemini AI fallback to rule-based logic
- ✅ All insight fields returned by `/recommendation`

---

## ☁️ Deploy Your Own Copy

| Part | Platform | Root Directory |
|---|---|---|
| **Backend** | [Railway](https://railway.app) | `smart-food-app/server` |
| **Frontend** | [Vercel](https://vercel.com) | `smart-food-app/client` |

---

<div align="center">

Built with ❤️ for the **AMD Promptathon**

[![Live Demo](https://img.shields.io/badge/🚀%20Try%20the%20Live%20App-food--health--app--eta.vercel.app-6366f1?style=for-the-badge)](https://food-health-app-eta.vercel.app/)

</div>
