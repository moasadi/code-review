import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import { PORT, DBURL, CORS_ORIGINS } from "./config";
import { router as favoriteRouter } from "./routes/favorite.router";
import { router as profileRouter } from "./routes/profile.router";
import { router as simulatorRouter } from "./routes/simulator.router";
// Connect to the MongoDB database
mongoose.connect(DBURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log(`Connected to DB ${DBURL}`);
    // Start the server after successfully connecting to the database
    app.listen(PORT, () => {
      console.log(`✅ Ready on port http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to the database:", error);
  });

const app = express();

// Middleware
app.use(cors({ origin: CORS_ORIGINS }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
app.use("/api/favorite", favoriteRouter);
app.use("/api/profile", profileRouter);
app.use("/api/simulator", simulatorRouter);

export default app;
