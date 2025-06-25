const prisma = require('../prisma/prisma')

exports.getUserById = async ({id}) =>{
    return await prisma.Users.findUnique({
        select:{
            user_username: true,
            user_email: true,
            user_createdAt: true,
            user_description: true,
            user_website: true,
            user_address: true  
        },
        where: {
            user_id: Number(id)
        }
    })
}

exports.deleteUserById = async ({id}) =>{
    return await prisma.Users.delete({
        where:{
            user_id:Number(id)
        }
    })
}

exports.updateUserById = async ({id, username, email, description, website, address}) =>{
    return await prisma.Users.update({
        data:{
            user_username: username,
            user_email: email,
            user_description: description,
            user_website: website,
            user_address: address
        },
        where:{
            user_id: Number(id)
        }
    })
}

exports.getUnbannedUser = async () =>{
    return await prisma.Users.count({
        where :{
            user_role: "user"
        }
    })
} 