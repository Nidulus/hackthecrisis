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

function search(logger, query, callback) {
  let fields =
    "user_id, product_id, product_name, product_description, units, date, image";
  let searchText = query.text.toLowerCase();
  pool.query(
    util.format(
      'SELECT %s FROM "Supply" WHERE LOWER(product_name) LIKE' +
        "'%" +
        searchText +
        "%'",
      fields
    ),
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
  search: search,
};
