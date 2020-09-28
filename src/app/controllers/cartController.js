class cartController{
    index(req, res, next){
        res.render('pageCartView')
    }
    procedureCart(req, res,next){
        res.render('pageCheckOutView')
    }
}

module.exports = new cartController();