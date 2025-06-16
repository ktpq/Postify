const { createPostByUserId, getAllPublishPost, getPostDetailById, getPostViewByPostId, updatePostViewByPostId } = require('../services/postsServices')

exports.getAllPost = async (req, res) =>{
    try{
        const allPost = await getAllPublishPost()
        res.json({
            message: "Get all post successfully",
            allPost
        })
    } catch(error){
        res.json({
            message: 'cannot get all post',
            error
        })
    }
}

exports.getPostDetail = async (req,res) =>{
    try{
        const { id } = req.params
        const postDetail = await getPostDetailById({id})
        res.json({
            message: "fetch data successfully",
            postDetail
        })
    } catch(error){
        res.json({
            message: "Cannot get post detail",
            error
        })
    }
}

exports.createPost = async (req, res) =>{
    try{
        const { title, description, category, content, status, userId} = req.body
        const newPost = await createPostByUserId({ title, description, category, content, status, userId});
        res.json({
            message: "Create post successfully",
            newPost
        })
    } catch(error){
        res.json({
            message: "cannot create post",
            error
        })
    }
    
}

exports.getPostView = async (req, res) =>{
    try{
        const { id } = req.params;
        const postView = await getPostViewByPostId({id});
        res.json({
            message: `Get post ${id} view successfully`,
            postView
        })
    } catch(error){
        res.json({
            message: 'Cannot get post view',
            error
        })
    }
}

exports.updatePostView = async (req, res) =>{
    try{
        const { id } = req.params;
        const { view } = req.body;
        const updateView = await updatePostViewByPostId({id, view})
        res.json({
            message: "Update View successfully",
            updateView
        })
    } catch(error){
        res.json({
            message: "Cannot update post view",
            error
        })
    }
}