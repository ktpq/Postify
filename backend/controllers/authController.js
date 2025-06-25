const { createUser, getUserByEmail, getUserById } = require('../services/authServices')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


exports.register = async (req, res) =>{
    try{
        const { username, email, password} = req.body;
        const newUser = await createUser({username, email, password})
        res.json({
            message: "success",
            newUser
        })

    } catch(error){
        // มี error หรือมี email นี้ในระบบอยู่เเเล้ว
        res.json({
            message: "fail",
            error: error
        })
    }
}

exports.login = async (req, res) =>{
    try{
        const { email, password } = req.body;
        const user = await getUserByEmail({email, password})
        if (!user){
            return res.json({
                message: "ไม่พบผู้ใช้ในระบบ"
            })
        }
        const match = await bcrypt.compare(password, user.user_password)

        if (!match){
            return res.json({
                message: "รหัสผ่านไม่ถูกต้อง"
            })
        }

        const token = jwt.sign({userId: user.user_id}, process.env.JWT_SECRET, {
            expiresIn: "1d"
        })

        res.cookie("authToken", token,{
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000,
        })

        return res.json({
            message: "เข้าสู่ระบบสำเร็จ",
            path: "/",
            token
        })
        
        
    } catch(error){
        res.json({
            message: "เกิดปัญหาเกี่ยวกับ server",
            error
        })
    }
}

exports.getProfile = async (req, res) => {
    try{
        const token = req.cookies.authToken;
        // console.log(token)
        if (!token){
            return res.json({
                userData: null,
                isLogin: false,
                message: "ยังไม่ได้เข้าสู่ระบบ"
            })
        }
        const decodedToken = await jwt.verify(token, process.env.JWT_SECRET);
        const userId = decodedToken.userId;
        const userData = await getUserById(userId);
        res.json({
            userData:{
                id: userData.user_id,
                username: userData.user_username,
                email: userData.user_email,
                role: userData.user_role
            },
            isLogin: true,
            message: "เข้าสู่ระบบเเล้ว"
        })
    } catch(error){
        res.json({
            message: "เกิดปัญหาเกี่ยวกับ server",
            error
        })
    }
}

exports.logout = async (req, res) => {
    try {
        res.clearCookie("authToken", {
            httpOnly: true,
            path: "/", // เพิ่ม path ให้ตรงกับตอน set (default คือ "/")
        });
        res.json({ message: "logout success" });
    } catch(error) {
        res.json({
            message: "เกิดปัญหาเกี่ยวกับ server",
            error
        })
    }
}