const routes = require('next-routes')();

routes
  .add('/projects/:address', '/projects/show')


module.exports = routes;
