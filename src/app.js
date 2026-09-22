import express from "express"
import rateLimit from "express-rate-limit"
import morgan from "morgan"
import userRoutes from "./routes/user.routes.js"

const app = express()

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 100,
    message: {error : "Trop de requettes pour cette adresse IP"}
})
//middleware
app.use(express.json())
app.use(limiter)
app.use(morgan('tiny'))

//routes
app.use("/users", userRoutes)

export default app