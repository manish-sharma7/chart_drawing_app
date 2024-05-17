module.exports = app => {
  const XYdata = require("./XYdata.controller.js");



  // Retrieve all data
  app.get("/XYdata/:XYname", XYdata.findXYdata);

};
