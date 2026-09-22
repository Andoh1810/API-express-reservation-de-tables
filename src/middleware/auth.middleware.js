import { httpCode } from "../static/httpCode.js";
import jwt from "jsonwebtoken"

export const authMiddleware = (req, res, next) => {
    
    try {
        
        const tokenHeader = req.headers.authorization

        if(!tokenHeader || !tokenHeader.startsWith('Bearer ')){
            return res.status(httpCode.UNAUTHORIZED).json({message: "Token manquant ou mal écrit."})
        }

        const token = tokenHeader.split(" ")[1]

        const verifToken = jwt.verify(token, process.env.JWT_SERCRET_ACCESS)
        req.user = verifToken

        next()

    } catch (error) {
        return res.status(httpCode.UNAUTHORIZED).json({message: "Token expiré"})
    }

}

