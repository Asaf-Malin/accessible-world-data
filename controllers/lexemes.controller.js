const knex = require("../dbConnection");
const tableName = "lexemes";

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

exports.getNextWord = async (req, res) => {
  knex(tableName)
  .where({ wikidataId: null })
  .first()
  .then((lexeme) => {
      if (!lexeme) {
        res.status(200).json({});
      } else {
        res.status(200).json(lexeme);
      }
    });
};

exports.createLexemes = async (req, res) => {
  for(let lexeme of req.body){
    lexeme.creation = new Date();
  }
  knex(tableName)
    .insert(req.body)
    .then((row) => {
      if (row > 0) {
        return res.status(200).send({createId: row[0]});
      }
  });
};

exports.updateLexeme = async (req, res) => {
  req.body.creation = new Date();
  knex(tableName)
    .where({ id: req.body.id })
    .update(req.body)
    .then((row) => {
      if (row > 0) {
        return res.status(200).send({createId: row[0]});
      }
  });
};