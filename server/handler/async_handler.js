const { resp } = require("../utils/util");

module.exports = (theFunc) => (req, res, next) => {
  Promise.resolve(theFunc(req, res, next)).catch((error)=>{
    console.log(error)
   return resp(res, 500, false, `Error : ${error.message}`, error);
  });
};
