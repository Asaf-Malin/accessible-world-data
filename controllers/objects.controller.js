const knex = require("../dbConnection");
const tableName = "lexemes";

exports.createObject = async (req, res) => {
  knex(tableName)
    .insert({name: req.body.name, creator: req.body.creator})
    .then((row) => {
      if (row > 0) {
        return res.status(200).send({createId: row[0]});
      }
    });
};

exports.getObject = async (req, res) => {
  knex(tableName)
    .where({ id: req.query.id })
    .first()
    .then((object) => {
      if (!object) {
        res.status(401).json({
          message: "failed getting child from db",
        });
      } else {
        res.status(200).json(object);
      }
    });
};

exports.getLexeme = async (req, res) => {
  knex(tableName)
  .where({ lexemeWithVowels: req.query.searchTerm })
  .first()
  .then((lexeme) => {
      if (!lexeme) {
        res.status(200).json({});
      } else {
        res.status(200).json(lexeme);
      }
    });
};

