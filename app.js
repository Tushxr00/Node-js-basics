// import http from core global modules of nodejs
const http = require("http");
const requestHandler = require("./routes");

// const rqListener = (request, response) => {
// };

// creating a server using http.createServer merthod
// rqListener will always run when we send a request to the server
const server = http.createServer(requestHandler);

// node js starts to listen and its listening the port 3000 as we have passed as props
server.listen(3001);
