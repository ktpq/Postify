const prisma = require('../prisma/prisma')


exports.getAllPublishPost = async () =>{
    return await prisma.posts.findMany({
        where:{
            post_status: "เผยแพร่แล้ว"
        },
        include:{
            user:{
                select:{
                    user_username: true
                }
            }
        }
    })
}

exports.getPostDetailById = async ({id}) =>{
    return await prisma.Posts.findUnique({
        where:{
            post_id: Number(id)
        },
        include:{
            user: {
                select:{
                    user_username: true
                }
            }
        }
    })
}

exports.createPostByUserId = async ({ title, description, category, content, status, userId}) =>{
    return await prisma.posts.create({
        data:{
            post_title: title,
            post_description: description,
            post_category: category,
            post_content: content,
            post_status: status,
            user_id: Number(userId)
        }
    })
}

exports.getPostViewByPostId = async({id}) =>{
    return await prisma.Posts.findUnique({
        where: {
            post_id: Number(id)
        },
        select:{
            post_view: true
        }
    })
}

exports.updatePostViewByPostId = async ({id, view})=>{
    return await prisma.Posts.update({
        data:{
            post_view: Number(view)
        },
        where:{
            post_id: Number(id)
        }
    })
}