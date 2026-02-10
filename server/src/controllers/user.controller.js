import User from "../models/user.model.js";



export const profile = async (req, res) => {
const user = await User.findById(req.user.id).select('-password')
res.json(user)
}