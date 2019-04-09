const swag = require('../models/swag');


module.exports = {
    search:(req, res) => { 
    const { category } = req.body

    if (!category) {
        res.status(200).send(swag)
    } else { 
        let categorySwag = swag.filter(swag => swag.category == category)
        res.status(200).send(categorySwag)
        }
    }
}