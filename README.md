# ShareHope - Full-Stack MERN Food Donation Platform

ShareHope connects restaurants with NGOs so restaurants can post surplus food donations, NGOs can claim available listings, and restaurants can mark pickups as collected.

```txt
available -> claimed -> collected
```

## Project Structure

```txt
ShareHope/
|-- index.js
|-- package.json
|-- .env.example
|-- docs/
|   |-- screenshots/
|-- src/
|   |-- app.js
|   |-- config/
|   |-- controllers/
|   |-- middleware/
|   |-- models/
|   |-- routes/
|-- frontend/
    |-- index.html
    |-- package.json
    |-- .env.example
    |-- vite.config.js
    |-- vercel.json
    |-- src/
```

## Requirements

- Node.js 20 or newer
- npm
- MongoDB running locally, or a MongoDB Atlas connection string

The backend runs on `http://localhost:5000` by default.
The frontend runs on `http://localhost:5173` by default.

## Environment Setup

Create the backend env file:

```bash
cp .env.example .env
```

Backend variables:

```env
PORT=5000
NODE_ENV=development
DATABASE_URL=mongodb://127.0.0.1:27017/sharehope
MONGO_URI=mongodb://127.0.0.1:27017/sharehope
JWT_SECRET=replace_with_a_long_random_secret
CLIENT_URL=http://localhost:5173
FRONTEND_URL=http://localhost:5173
```

`DATABASE_URL` is the primary MongoDB variable. `MONGO_URI` is also supported as a fallback.

Create the frontend env file:

```bash
cd frontend
cp .env.example .env
```

Frontend variables:

```env
VITE_API_BASE_URL=http://localhost:5000/api/v1
```

## Install

Install backend dependencies from the project root:

```bash
npm install
```

Install frontend dependencies:

```bash
npm --prefix frontend install
```

Or install both:

```bash
npm run install:all
```

## Run Locally

Start MongoDB first if you are using the local connection string.

Start the backend from the project root:

```bash
npm run dev
```

Backend health check:

```txt
http://localhost:5000/
```

Swagger docs:

```txt
http://localhost:5000/api-docs
```

Start the frontend in a second terminal:

```bash
npm run dev:frontend
```

Frontend app:

```txt
http://localhost:5173
```

You can also run the frontend directly:

```bash
cd frontend
npm run dev
```

## Available Scripts

From the project root:

```bash
npm start          # start backend with node
npm run dev        # start backend with nodemon
npm run dev:backend
npm run dev:frontend
npm run install:all
npm run build      # build frontend
npm run lint       # lint frontend
```

From `frontend/`:

```bash
npm run dev
npm run build
npm run preview
npm run lint
```

## API Endpoints

Base local API URL:

```txt
http://localhost:5000/api/v1
```

Authentication:

| Method | Endpoint | Description |
| --- | --- | --- |
| POST | `/auth/signup` | Register a restaurant or NGO |
| POST | `/auth/login` | Login and receive JWT token |

Restaurant routes:

| Method | Endpoint | Description |
| --- | --- | --- |
| POST | `/donation/create` | Create a donation |
| GET | `/donation/my-donations` | View own donations |
| PATCH | `/donation/:id/collect` | Mark donation as collected |

NGO routes:

| Method | Endpoint | Description |
| --- | --- | --- |
| GET | `/donation/available` | View available donations |
| POST | `/donation/:id/claim` | Claim a donation |
| GET | `/donation/claimed` | View claimed donations |

## Troubleshooting

- If the backend exits with `Missing required environment variable`, copy `.env.example` to `.env` and fill the values.
- If MongoDB connection fails, confirm MongoDB is running and that `DATABASE_URL` points to the correct database.
- If the frontend cannot reach the backend, confirm `VITE_API_BASE_URL=http://localhost:5000/api/v1` and `CLIENT_URL=http://localhost:5173`.
- If CORS blocks requests, make sure the frontend is running on `http://localhost:5173` or add that origin to `CLIENT_URL`/`FRONTEND_URL`.
- If native dependencies fail on Windows, use a current 64-bit Node.js installation and rerun `npm install`.

## Production Notes

For deployment, set production env values in the hosting provider:

Backend:

```env
PORT=10000
NODE_ENV=production
DATABASE_URL=your_mongodb_connection_string
JWT_SECRET=your_long_random_secret
CLIENT_URL=https://your-frontend-domain
FRONTEND_URL=https://your-frontend-domain
```

Frontend:

```env
VITE_API_BASE_URL=https://your-backend-domain/api/v1
```

## Quality Checks

```bash
npm run lint
npm run build
```

## Security Features

- Passwords hashed with bcrypt
- JWT authentication
- Protected API routes
- Role-based route access
- Environment variables for secrets
- CORS configured for local and production frontend origins
- API rate limiting
