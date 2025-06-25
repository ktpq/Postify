const { post } = require('../routes/postRouter')
const { createPostByUserId, getAllPublishPost, getPostDetailById, getPostViewByPostId, updatePostViewByPostId, getRecommendPost, getPostCount, getAllPostView, getPostToday, getPostByUserId, deletePostById } = require('../services/postsServices')

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

exports.getRecommendPost = async (req, res) =>{
    try{
        const recommendPost = await getRecommendPost()

        res.json({
            message: "Get Recommend post",
            recommendPost
        })
    } catch (error){
        message: "cannot get recommend post",
        error
    }
}

exports.getPostCount = async (req, res) =>{
    try{
        const postCount = await getPostCount()
        res.json({
            message: "Get post count successfully",
            postCount
        })
    } catch(error){
        res.json({
            message: "Cannot get Post count",
            error
        })
    }
}

exports.getAllPostView = async (req, res) =>{
    try{
        const allPostView = await getAllPostView()
        res.json({
            message: "Get all post view successfully",
            allPostView
        })
    } catch (error){
        res.json({
            message: "Cannot get all post count",
            error
        })
    }
}

exports.getPostToday = async (req, res) =>{
    try{
        const postToday = await getPostToday()
        res.json({
            message: "Get post today successfully",
            postToday
        })
    } catch (error){
        res.json({
            message: "Cannot get post today",
            error
        })
    }
}

exports.getPostByUserId = async (req, res) =>{
    try{
        const { id } = req.params;
        const postByUserId = await getPostByUserId({id});
        res.json({
            message: "Get post by user id successfully",
            data: postByUserId
        })
    } catch(error){
        res.json({
            message: "Cannot get post by user id",
            error
        })
    }
}

exports.deletePost = async (req, res) =>{
    try{
        const { id } = req.params;
        const deletePost = await deletePostById({id});
        res.json({
            message: "Delete post successfully",
            deletePost
        })
    } catch(error){
        res.json({
            message: "Cannot delete post",
            error
        })
    }
}