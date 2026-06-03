const express = require("express");
const cors = require("cors");
const rateLimit = require("express-rate-limit");

const app = express();

app.set("trust proxy", 1);

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    message: {
        success: false,
        message: "Too many requests please try again later",
    }
});

const allowedOrigins = [
    process.env.CLIENT_URL,
    process.env.FRONTEND_URL,
    "http://localhost:5173",
    "http://127.0.0.1:5173",
].filter(Boolean);

app.use(cors({
    origin(origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            return callback(null, true);
        }

        return callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
}));

const authRoutes = require("./routes/authRoutes");
const donationRoutes = require("./routes/donationRoutes");

const { errorHandler } = require("./middleware/errorMiddleware");

app.use(express.json());

app.use(limiter);

app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        service: "ShareHope API",
        status: "running",
    });
});

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/donation", donationRoutes);

app.use(errorHandler);

module.exports = app;