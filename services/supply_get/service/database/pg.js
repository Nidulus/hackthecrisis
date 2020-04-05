const settings = require("../config/settings");
const Pool = require("pg").Pool;
const util = require("util");

const pool = new Pool({
  user: settings.pg.user,
  host: settings.pg.host,
  database: settings.pg.db,
  password: settings.pg.password,
  port: settings.pg.port,
});

function get(logger, params, callback) {
  let supplierID = params.id;
  pool.query(
    util.format('SELECT * from "Supply" WHERE id= %s', supplierID),
    (err, results) => {
      if (err) {
        logger.error(err);
        callback({ status: 500, message: [] });
      } else {
        callback({ status: 200, message: results.rows });
      }
    }
  );
}

module.exports = {
  get: get,
};
