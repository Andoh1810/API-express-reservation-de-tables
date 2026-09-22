import prisma from "../lib/prisma.js";
import { httpCode } from "../static/httpCode.js";
import bcrypt from "bcrypt"
import {v4 as uuidv4} from "uuid"
import jwt from "jsonwebtoken"

const generateAcessToken =  (user) => {
    return jwt.sign(
        {
            id: user.id
        },
        process.env.JWT_SERCRET_ACCESS,
        {expiresIn: "3m"}
    )
}

const generateRefreshToken =  (user) => {
    return jwt.sign(
        {
            id: user.id
        },
        process.env.JWT_SERCRET_REFRESH,
        {expiresIn: "7d"}
    )
}


const userController = {
    signup: async (req,res) => {
        
        try {
            
            const {nom, email, motDePasse} = req.body

            if(!nom || !email || !motDePasse){
                return res.status(httpCode.BAD_REQUEST).json({message: "Toutes les informations sont requises!"})
            }

            const verifEmail = await prisma.utilisateurs.findUnique({where: {email}})

            if(verifEmail){
                return res.status(httpCode.BAD_REQUEST).json({message: "Cet email existe déjà!"})
            }

            const hashedpassword = await bcrypt.hash(motDePasse, 10)

            const newUser = await prisma.utilisateurs.create({
                data: {
                    id: uuidv4(),
                    nom,
                    email,
                    motDePasse: hashedpassword
                }
            })

            return res.status(httpCode.CREATED).json({message: "Utilisateur créé avec succès!",newUser})

        } catch (error) {
            return res.status(httpCode.INTERNAL_SERVER_ERROR).json({message: error.message})
        }

    }, 
    
    login: async (req,res) => {
        
        try {
            
            

        } catch (error) {
            return res.status(httpCode.INTERNAL_SERVER_ERROR).json({message: error.message})
        }

    }, 
    
    logout: async (req,res) => {
        
        try {
            
        } catch (error) {
            return res.status(httpCode.INTERNAL_SERVER_ERROR).json({message: error.message})
        }

    }, 
    
    getProfile: async (req,res) => {
        
        try {
            
        } catch (error) {
            return res.status(httpCode.INTERNAL_SERVER_ERROR).json({message: error.message})
        }

    }, 
    
    updateProfile: async (req,res) => {
        
        try {
            
        } catch (error) {
            return res.status(httpCode.INTERNAL_SERVER_ERROR).json({message: error.message})
        }

    }, 
    
    deleteProfile: async (req,res) => {
        
        try {
            
        } catch (error) {
            return res.status(httpCode.INTERNAL_SERVER_ERROR).json({message: error.message})
        }

    }, 
    
    refreshtoken: async (req,res) => {
        
        try {
            
        } catch (error) {
            return res.status(httpCode.INTERNAL_SERVER_ERROR).json({message: error.message})
        }

    }
}

export default userController