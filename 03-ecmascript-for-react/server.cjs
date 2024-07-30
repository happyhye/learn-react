const liveServer = require("live-server");

const params = {
	host: "localhost", // Set the address to bind to. Defaults to 0.0.0.0 or process.env.IP.
	port: 3000, // Set the server port. Defaults to 8080.
	root: ".", // Set root directory that's being served. Defaults to cwd. 서버위치
	open: false, // When false, it won't load your browser by default. 오픈여부
	mount: [['/', './public']], // Mount a directory to a route.
};
liveServer.start(params);