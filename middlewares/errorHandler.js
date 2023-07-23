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

function boomErrorHantler(err, req, res, next) {
  if (err.isBoom) {
    const { output } = err
    res.status(output.statusCode).json(output.payload)
  }else{
    next(err)
  }
}

module.exports = { logErrors, errorHantler, boomErrorHantler }
