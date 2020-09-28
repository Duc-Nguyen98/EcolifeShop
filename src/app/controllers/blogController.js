class blogController{
    index(req, res, next){
        res.render('blogGridView')
    }
    details(req, res,next){
        res.render('blogSingerView')
    }
}

module.exports = new blogController();