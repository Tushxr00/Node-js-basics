// import http from core global modules of nodejs
const http = require("http");

const rqListener = (request, response) => {
  console.log({ request: request, response: response });
};

// creating a server using http.createServer merthod
// rqListener will always run when we send a request to the server
const server = http.createServer(rqListener);

// node js starts to listen and its listening the port 3000 as we have passed as props
server.listen(3000);
