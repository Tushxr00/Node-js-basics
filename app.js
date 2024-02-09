// import http from core global modules of nodejs
const http = require("http");

const rqListener = (request, response) => {
  //   console.log({ request: request, response: response });
  console.log({
    url: request.url,
    method: request.method,
    headers: request.headers,
  });

  response.setHeader("Content-Type", "text/html");
  response.write("<html>");
  response.write("<head><title>my first page</title></head>");
  response.write(
    "<body><h1> This is an hello world response form my node js application</h1></body>"
  );
  response.write("</html>");
  response.end();
};

// creating a server using http.createServer merthod
// rqListener will always run when we send a request to the server
const server = http.createServer(rqListener);

// node js starts to listen and its listening the port 3000 as we have passed as props
server.listen(3000);
