# Share Hope Frontend

React + Vite frontend for ShareHope.

## Setup

```bash
npm install
cp .env.example .env
npm run dev
```

Local env:

```env
VITE_API_BASE_URL=http://localhost:5000/api/v1
```

The backend must be running on `http://localhost:5000`, and the backend `.env` should include:

```env
CLIENT_URL=http://localhost:5173
FRONTEND_URL=http://localhost:5173
```

## Scripts

```bash
npm run dev
npm run build
npm run preview
npm run lint
```
