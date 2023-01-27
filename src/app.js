import express from "express";
import playersRoutes from "./routes/players.routes.js";
import cors from "cors";

const app = express();

app.use(cors())

app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    "message": "Welcome to premier league REST API!",
    "METHODS": {
      "GET": "/api/players",
      "POST": "/api/players",
      "PATCH": "/api/players/{id}",
      "DELETE": "/api/players/{id}"
    }

  })
})

app.use('/api', playersRoutes)

export default app;
