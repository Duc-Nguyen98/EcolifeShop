const contactRouter = require('./contactRouter');

const router = (app) => {
  app.use('/', contactRouter);
};

module.exports = router;
