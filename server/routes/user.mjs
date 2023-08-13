import express from "express";
import { User } from "../User.mjs";

const router = express.Router()
const user = new User()

router.post(`/api/user/add`, user.add)
router.get(`/api/user/read`, user.read)
router.post(`/api/user/login`, user.login)
router.get(`/api/user/approve/:id`, user.approve)
router.post(`/api/user/approve`, user.approve)

export {user}

export default router