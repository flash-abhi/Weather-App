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
