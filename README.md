# Weather AI 🌤️

## Assignment given by Trao.ai

### Assignment Status : Completed 🎊

## Tech Stack Used:
Frontend:
- React.js (Since, SSR benefits of Next.js would not significantly impact this use case. So I have used the React.js for easyness and I am better comfortable with React.js next.js is yet to explore from my end.)
- TailwindCSS
  
Backend:
- Node.js
- Express.js
- Mongodb (Mongoose)

API Integration:
- LangChain
- OpenAI Api

Weather Api:
- OpenWeather map Api

# Design of the Weather AI

```
                                            ┌────────────────────────────────────────────────────────────────────────────┐
                                            │                                USER                                        │
                                            │  • Register / Login                                                        │
                                            │  • Add / Remove Cities                                                     │
                                            │  • Mark Favorites                                                          │
                                            │  • View Weather Data                                                       │
                                            │  • Request AI Insights                                                     │
                                            └────────────────────────────────────────────────────────────────────────────┘
                                                                                  │
                                                                                  ▼
                                            ┌────────────────────────────────────────────────────────────────────────────┐
                                            │                                FRONTEND                                    │
                                            │                     React.js + Tailwind CSS (SPA)                          │
                                            │                                                                            │
                                            │  • React Router (Protected Routes)                                         │
                                            │  • Auth Context (Global User State)                                        │
                                            │  • Reusable Components (Navbar, CityCard, AiCard)                          │
                                            │  • Favorites Filter Logic                                                  │
                                            │  • Axios API Service Layer                                                 │
                                            │  • Loading / Error / Empty State Handling                                  │
                                            └────────────────────────────────────────────────────────────────────────────┘
                                                                                  │
                                                                                  │  HTTP Requests (JWT Attached)
                                                                                  ▼
                                            ┌────────────────────────────────────────────────────────────────────────────┐
                                            │                              BACKEND LAYER                                 │
                                            │                        Node.js + Express REST API                          │
                                            │                                                                            │
                                            │  ROUTES                                                                    │
                                            │  • /api/auth (Register / Login / logout)                                   │
                                            │  • /api/cities (CRUD Operations)                                           │
                                            │  • /api/ai (AI Weather Analysis)                                           │
                                            │                                                                            │
                                            │  MIDDLEWARE                                                                │
                                            │  • JWT Authentication                                                      │
                                            │                                                                            │
                                            │  BUSINESS LOGIC                                                            │
                                            │  • Validate Input                                                          │
                                            │  • Associate Cities with userId                                            │
                                            │  • Fetch Weather Data                                                      │
                                            │  • Trigger AI Insight Generation                                           │
                                            └────────────────────────────────────────────────────────────────────────────┘
                                                               │                              │
                                                               │                              │
                                                               ▼                              ▼
                                            ┌──────────────────────────────┐      ┌──────────────────────────────────────┐
                                            │         DATABASE             │      │          EXTERNAL SERVICES           │
                                            │         Model                │      │                                      │
                                            │                              │      │   Weather API (OpenWeatherMap)       │
                                            │  • Users model               │      │  - Real-time weather data            │
                                            │  • Cities model              │      │  - Temperature, humidity             │
                                            │                              │      │                                      │
                                            │                              │      │   OpenAI API                         │
                                            │                              │      │  - Used via LangChain Agent          │
                                            └──────────────────────────────┘      └──────────────────────────────────────┘
                                                                                              │
                                                                                              ▼
                                                                               ┌─────────────────────────────┐
                                                                               │         AI LAYER            │
                                                                               │      LangChain Agent        │
                                                                               │                             |
                                                                               │  • Receives weather data    │
                                                                               │  • Structured prompting     │
                                                                               │  • Generates insights       │
                                                                               │  • Returns recommendations  │
                                                                               └─────────────────────────────┘
```


## Authentication and Authorization

Authentication

- JWT-based authentication
- Password hashing using bcrypt
- Secure token storage
- Login persistence via cookies

Authorization
- Middleware validates JWT
- Every city query is filtered by userId
- Strict user data isolation
- Users cannot access or modify other users' data

## 🌆 Multi-City Dashboard
Features:
- Add multiple cities
- Fetch real-time weather data dynamically
- Loading, error, and empty states handled

Weather data is fetched from:
- OpenWeatherMap API

Each city is:
- Stored in MongoDB
- Associated with a specific user

## ⭐ Favorites Functionality

- Users can mark/unmark cities as favorite
- Favorite status persists in MongoDB
- Favorites are user-specific
- Special UI indicator for favorite cities
- Favorites filter option available

## Approach Followed in building 
- Backend (Project files and folder setup)
- Backend ( connected the mongodb atlas and create the route for the user , cities and ai )
- Backend Api Testing using Postman 
- Frontend (login and Register First)
- Implemented the CORS for Connecting the backend with Frontend
- Frontend (Dashboard adding cities, adding to favourite, removing the cities)

## Purpose of AI in my Project - 
- Ai is alerting the User to not go ouside or use Umbrella if weather is rainy.
- Also Ai is giving suggestion Enjoy if weather is amazing.

## limitation of my project - 
- Since we are adding the City so the data of the city can be stale after one day.
- but adding the city again will resolve this problem.
- Ui can be more impressive but the Time boundaries for submitting the assignment are less i cannot give much time in designing the UI so I have kept the UI Simple and Clean for completing it on time.

## 🚀 Deployment
Platform Used:
- Render (web services for backend || static sites for frontend )

Deployment Strategy:
- Frontend and backend deployed separately
- Environment variables configured securely
- CORS configured for cross-origin requests
- MongoDB Atlas used for production database

## Project Setup Guide - 

1 : clone Repository
```
git clone <my-repo-url>
cd Weather-App
```
2 : Backend Setup
```
cd backend
npm install
```
3 : Create .env file and create and set this keys
```
PORT=****
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret
OPENWEATHER_API_KEY=your_key
OPENAI_API_KEY=your_key
```
4 : Run
```
npm run start
```
5: Frontend setup
```
cd frontend
npm install
npm run dev
```

# Made by Abhishek Chauhan 2026
