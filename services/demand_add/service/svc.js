const pg = require('./database/pg');

function onMessage(headers, params, query, body, logger, requester, reply) {
    logger.error(JSON.stringify(body));
    pg.store(body, () => {
        reply.send(200, { 'Content-type': 'application/json' }, { data: 'Demand stored' });
    });
};

module.exports = {
    onMessage: onMessage
};