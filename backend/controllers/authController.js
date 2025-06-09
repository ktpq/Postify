const { createUser } = require('../services/authServices')

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