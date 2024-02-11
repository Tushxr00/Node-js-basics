// import http from core global modules of nodejs
const http = require("http");
const fs = require("fs");
const rqListener = (request, response) => {
  const url = request.url;
  const method = request.method;
  if (url === "/") {
    response.write("<html>");
    response.write("<head><title>Enter Message</title></head>");
    response.write(
      "<body><form action='/message' method='POST'> <input type='text' name='message' ><button type='submit'>Send Info</button></form></body>"
    );
    response.write("</html>");
    return response.end();
  }
  if (url === "/message" && method === "POST") {
    console.log("here");
    // const message = response.body;
    fs.writeFileSync("message.text", "Dummy text");
    response.statusCode = 302;
    response.setHeader("Location", "/");
    return response.end();
  }
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
