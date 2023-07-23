function logErrors(err, req, res, next) {
  console.log('logErrors')
  console.error(err)
  next(err)
}

function errorHantler(err, req, res, next) {
  console.log('errorHantler')
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  })
}

module.exports = { logErrors, errorHantler }
