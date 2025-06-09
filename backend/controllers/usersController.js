const { deleteUserById } = require('../services/userServices')

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