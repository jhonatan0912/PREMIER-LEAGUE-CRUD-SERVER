import express from "express";
import playersRoutes from "./routes/players.routes.js";
import cors from "cors";

const app = express();

app.use(cors())

app.use(express.json());

app.use('/api', playersRoutes)

export default app;
