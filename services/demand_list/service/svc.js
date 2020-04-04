/*
Any module that should not be required on each message received should be imported/required here,
outside of the onMessage function. That is also valid for any object instantiation you only want to be done
when the service starts.
*/

const settings = require('./config/settings');

function onMessage(headers, params, query, body, logger, requester, reply) {
    //logger.info('Lorem ipsum dolor sit amet, consectetur adipiscing elit.');
    //logger.warning('Lorem ipsum dolor sit amet, consectetur adipiscing elit.');
    //logger.error('Lorem ipsum dolor sit amet, consectetur adipiscing elit.');
    //logger.critical('Lorem ipsum dolor sit amet, consectetur adipiscing elit.');

    // Uncomment if you wish to call another service. The remote service will require header, params
    // and body, just like this service. Add any data you wish to send into one of the
    // three parameters. It is OK to leave any or all empty.

    /*requester('myRemoteService', { headers: {}, params: {}, query: {}, body: {} }, function(response) {
        reply.send(response.status, response.header, response.message);
    });*/

    // HTTP Status code, additional headers, and the response
    //reply.send(200, { 'Content-type': 'application/json' }, { data: 'Hello World!' });
    reply.send(200, null, 'Hello World!');
};

module.exports = {
    onMessage: onMessage
};