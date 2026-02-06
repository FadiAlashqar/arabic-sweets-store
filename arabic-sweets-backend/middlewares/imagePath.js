function imagePath(req, res, next) {
    req.imagePath = `${req.protocol}://${req.get('host')}/static/imgs/`
    next()
}


module.exports = imagePath