class contactController {
  index(req, res, next) {
    res.render('contactView');
  }
}

module.exports = new contactController();
