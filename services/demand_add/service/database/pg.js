const settings = require('../config/settings');
const Pool = require('pg').Pool
const util = require('util');

const pool = new Pool({
  user: settings.pg.user,
  host: settings.pg.host,
  database: settings.pg.db,
  password: settings.pg.password,
  port: settings.pg.port,
})

function store(data, callback) {
    let fields = '(user_id, product_id, product_name, product_description, unit, date)';
    let values = util.format("VALUES('%s', '%s', '%s', '%s', '%s', '%s')",
        data.user_id,
        data.product_id,
        data.product_name,
        data.product_description,
        data.unit,
        data.date);
    pool.query(util.format('INSERT INTO "Demand" %s %s', fields, values), (error, results) => {
        if (error) {
            // The platform handles all exception that are not cought
            // in the services, don't worry
            throw error;
        }
        callback();
    })
}

module.exports = {
    store: store
};