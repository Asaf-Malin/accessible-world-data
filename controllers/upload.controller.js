const knex = require("../dbConnection");

exports.upload = async (req, res) => {
  const upfile = req.files.upfile;
  const filename = Date.now() + upfile.name;
  const updest = __dirname + "/../../assets/uploads/" + filename;
  upfile.mv(updest, (err) => {
    if (err) {
      return res.status(500).send(err);
    }
    //this.saveToDb(req, res, filename);
  });
};
