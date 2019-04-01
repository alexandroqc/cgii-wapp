// import examplesRouter from './api/controllers/examples/router';
import webSitesRouter from './api/controllers/websites/router';

export default function routes(app) {
  // app.use('/api/v1/examples', examplesRouter);
  app.use('/api/v1/wapp', webSitesRouter);
}
