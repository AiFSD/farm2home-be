const feedback = require("../models/Feedback")


 exports.createFeedback = async (req ,res ) => {
     try {
          const feeds = await feedback.create(req.body)
          res.status(201).json(feeds)
          console.log(feeds)
     } catch (err) {
          res.status(400).json(err , "failed")
     }
}
