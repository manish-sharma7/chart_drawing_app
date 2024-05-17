const sql = require("./db.js");

// constructor
const XYData = function(xydata) {
  this.friends_X = xydata.friends_X;
  this.avengers_X = xydata.avengers_X;
  this.GoT_X = xydata.GoT_X;
  this.moneyheist_X = xydata.moneyheist_X;
  this.friends_Y = xydata.friends_Y;
  this.avengers_Y = xydata.avengers_Y;
  this.GoT_Y = xydata.GoT_Y;
  this.moneyheist_Y = xydata.moneyheist_Y;
};

//getting result 

XYData.getXYdata = (XYname , result) => {
  sql.query("SELECT " + XYname + " FROM XYdata", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("XYdata: ", res);
    result(null, res);
  });
};

module.exports = XYData;
