import userController from "../controller/user.controller.js";
import { Router } from "express";

const userRoutes = Router()

const patternRoutes = {
    signup: "/signup",
    login: "/login",
    logout: "/logout",
    profile: "/profile/:id"
}

userRoutes.post(patternRoutes.signup, userController.signup)
userRoutes.post(patternRoutes.login, userController.login)
userRoutes.post(patternRoutes.logout, userController.logout)

userRoutes.get(patternRoutes.profile, userController.getProfile)

userRoutes.put(patternRoutes.profile, userController.updateProfile)

userRoutes.delete(patternRoutes.profile, userController.deleteProfile)

export default userRoutes