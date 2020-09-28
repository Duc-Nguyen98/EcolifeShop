class siteController {
  indexPage(req, res, next) {
    res.render('indexView');
  }
  contactPage(req,res,next) {
    res.render('contactView');
  }
  wishPage(req, res, next){
    res.render('pageWishListView')
  }
}

module.exports = new siteController();
