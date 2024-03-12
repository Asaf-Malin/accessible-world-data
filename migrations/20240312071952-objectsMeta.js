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
    "objectsMeta",
    {
      id: {
        type: "int",
        primaryKey: true,
        autoIncrement: true,
      },
      objectId: {
        type: "int",
      },
      referenceId: {
        type: "int",
      },
      relationId: {
        type: "int",
      },
      name: {
        type: "string",
        length: 400,
      },
      creator: {
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
  db.dropTable("objectsMeta", callback);
};

exports._meta = {
  version: 1,
};
