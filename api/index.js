const server = require('./../dist/server/main');

server.bootstrap().catch((err) => console.error(err));
