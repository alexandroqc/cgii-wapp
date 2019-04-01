// import URL from 'url';

const Wappalyzer = require('wappalyzer/driver');
const Browser = require('wappalyzer/browsers/zombie');


export class Controller {
  wapp(req, res) {
    const errorMessage = {
      error: "Ooops!, your domain does not exist"
    }
    const options = {};
    const wappalyzer = new Wappalyzer(Browser, req.params.uri, options)
    wappalyzer.analyze()
      .then((json) => {
        res.status(200);
        return res.send(JSON.stringify(json));
      })
      .catch((error) => {
        res.status(404);
        errorMessage.error = error;
        return res.send(JSON.stringify(errorMessage));
      });
  }
}
export default new Controller();
