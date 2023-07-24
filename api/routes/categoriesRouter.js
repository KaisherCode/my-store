const express = require('express')
const { faker } = require('@faker-js/faker')
const router = express.Router()

router.get('/',(req,res)=>{
  res.json([
    {
      name:faker.commerce.productAdjective()
    },
    {
      name:faker.commerce.productAdjective()
    }
  ])

})

router.get('/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params
  res.json({
    categoryId,
    productId
  })
})

module.exports = router
