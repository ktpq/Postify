const { deleteUserById, getUserById, updateUserById, getUnbannedUser } = require('../services/userServices')

exports.getUserById = async (req, res) =>{
    try{
        const { id } = req.params
        const User = await getUserById({id})
        res.json({
            message: "fetching user data by id successfully",
            userData: User
        })
    } catch (error){
        res.json({
            message: "Cannot fetch user data by id",
            error
        })
    }
}

exports.updateUser = async (req, res) =>{
    try{
        const { id } = req.params
        const { username, email, description, website, address} = req.body
        const updateUser = await updateUserById({id, username, email, description, website, address})
        res.json({
            message: 'update user successfully',
            updateUser
        })
    } catch (error){
        res.json({
            message: 'cannot update user',
            error
        })
    }
}

exports.deleteUser = async (req, res) =>{
    try {
        const id = req.params.id
        console.log(id)
        const deleteUser = await deleteUserById({id})
        res.json({
            message: "Delete user successfully",
            deleteUser
        })
    } catch(error){
        res.json({
            message:"Delete user failed",
            error
        })
    }
}

exports.getUnbannedUser = async (req, res) =>{
    try{
        const countUnbanned = await getUnbannedUser()

        res.json({
            message: "get unbanned user successfully",
            countUnbanned
        })
    } catch(error){
        res.json({
            message: "Cannot get unbanned user",
            error
        })
    }
}