const prisma = require('../prisma/prisma')

exports.deleteUserById = async ({id}) =>{
    return await prisma.Users.delete({
        where:{
            user_id:Number(id)
        }
    })
}