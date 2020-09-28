const siteRouter = require('./siteRouter');
const blogRouter = require('./blogRouter');
const cartRouter = require('./cartRouter');

const router = (app) => {
  app.use('/shoppingCart', cartRouter);
  app.use('/blog', blogRouter);
  app.use('/', siteRouter);
};

module.exports = router;
