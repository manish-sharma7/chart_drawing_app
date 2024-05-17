const XYData = require("./XYdata.model.js");
// Retrieve all XY data from the database

exports.findXYdata = (req, res) => {
  XYData.getXYdata(req.params.XYname,(err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving data."
      });
    else res.send(data);
  });
};