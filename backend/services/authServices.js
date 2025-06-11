const prisma = require("../prisma/prisma")
const bcrypt = require('bcrypt')

exports.createUser = async({username, email, password}) =>{
    const hashPassword = await bcrypt.hash(password, 10)
    return await prisma.Users.create({
        data:{
            user_username: username,
            user_email: email,
            user_password:hashPassword
        }
    })
}

exports.getUserByEmail = async({email, password}) =>{
    return await prisma.Users.findUnique({
            where: {
                user_email: email
            }
        })
}

exports.getUserById = async(userId) =>{
    return await prisma.Users.findUnique({
        where: {
            user_id: userId
        }
    })
}