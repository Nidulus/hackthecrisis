const pg = require("./database/pg");

function onMessage(headers, params, query, body, logger, requester, reply) {
  pg.search(logger, query, function (ret) {
    reply.send(ret.status, { "Content-type": "application/json" }, ret);
  });
}

module.exports = {
  onMessage: onMessage,
};
