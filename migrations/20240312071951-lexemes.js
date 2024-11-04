"use strict";

var dbm;
var type;
var seed;

/**
 * We receive the dbmigrate dependency from dbmigrate initially.
 * This enables us to not have to rely on NODE_PATH.
 */
exports.setup = function (options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function (db, callback) {
  db.createTable(
    "lexemes",
    {
      id: {
        type: "int",
        primaryKey: true,
        autoIncrement: true,
      },
      lexemeWithVowels: {
        type: "string",
        length: 400,
      },
      lexemeWithoutVowels: {
        type: "string",
        length: 400,
      },
      partOfSpeech: {
        type: "string",
        length: 400,
      },
      gender: {
        type: "int",
      },
      exampleSentence1: {
        type: "string",
        length: 400,
      },
      exampleSentence2: {
        type: "string",
        length: 400,
      },
      translation1He: {
        type: "string",
        length: 400,
      },
      translation1En: {
        type: "string",
        length: 400,
      },
      translation2He: {
        type: "string",
        length: 400,
      },
      translation2En: {
        type: "string",
        length: 400,
      },
      translation3He: {
        type: "string",
        length: 400,
      },
      translation3En: {
        type: "string",
        length: 400,
      },
      plural1: {
        type: "string",
        length: 400,
      },
      plural2: {
        type: "string",
        length: 400,
      },
      pluralBroken: {
        type: "string",
        length: 400,
      },
      pluralOfPlural: {
        type: "string",
        length: 400,
      },
      sourceForm: {
        type: "string",
        length: 400,
      },
      femaleForm: {
        type: "string",
        length: 400,
      },
      femalePluralForm: {
        type: "string",
        length: 400,
      },
      doubleForm: {
        type: "string",
        length: 400,
      },
      root: {
        type: "string",
        length: 400,
      },
      source: {
        type: "string",
        length: 400,
      },
      creation: {
        type: "timestamp",
        defaultValue: new String("CURRENT_TIMESTAMP"),
      },
    },
    function (err) {
      if (err) return callback(err);
      return callback();
    }
  );
};

exports.down = function (db, callback) {
  db.dropTable("lexemes", callback);
};

exports._meta = {
  version: 1,
};
