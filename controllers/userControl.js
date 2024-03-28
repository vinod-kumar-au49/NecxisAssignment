const UserModel = require('../models/usermodel')

const getUser = async ( request, response) => {
    try {
        const users = await UserModel.find()
        response.send({ status:success, users})
    } catch (error) {
        response.status(500).send({status:'error', msg: 'Erorr fetching users'})
    }
}
const postUser = async (request, response) => {
    const userData = request.body
  
    try {
           const resultUser = await UserModel.create(userData)
      console.log(resultUser)
      response.status(201).send({ status: 'success',user: resultUser })
    } catch (err) {
      console.log(err)
      response.status(500).send({ status: 'error', msg: err.errors })
    }
  }

  module.exports = {getUser,postUser};