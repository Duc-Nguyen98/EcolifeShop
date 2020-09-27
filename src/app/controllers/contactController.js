class contactController {
    index(req,res,next) {
        res.send('hi')
    }
}


module.exports = new contactController();