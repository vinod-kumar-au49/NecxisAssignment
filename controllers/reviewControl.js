const ReviewModel = require('../models/reviewmodel');

const getReview = async ( request, response) => {
    try {
        const reviews = await ReviewModel.find()
        response.send({ status:'success', reviews
        })
    } catch (error) {
        response.status(500).send({status:'error', msg: 'Erorr fetching reviwes'})
    }
}

const postReview = async (request, response) => {
    const reviewData = request.body
  
    try {
           const resultReview= await ReviewModel.create(reviewData)
      console.log(resultReview)
      response.status(201).send({ status: 'success',review: resultReview })
    } catch (err) {
      console.log(err)
      response.status(500).send({ status: 'error', msg: err.errors })
    }
  }

  module.exports = {getReview,postReview};