// // import http from core global modules of nodejs
// const http = require("http");
// const routes = require("./routes");

// // const rqListener = (request, response) => {
// // };

// console.log(routes.someText);
// // creating a server using http.createServer merthod
// // rqListener will always run when we send a request to the server
// const server = http.createServer(routes.handler);

// // node js starts to listen and its listening the port 3000 as we have passed as props
// server.listen(3001);

const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Assignment 1</title></head>");
    res.write(
      '<body><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Send</button></form></body>'
    );
    res.write("</html>");
    return res.end();
  }
  if (url === "/users") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Assignment 1</title></head>");
    res.write("<body><ul><li>User 1</li><li>User 2</li></ul></body>");
    res.write("</html>");
    return res.end();
  }
  // Send a HTML response with some "Page not found text
  if (url === "/create-user") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody.split("=")[1]); // username=whatever-the-user-entered
    });
    res.statusCode = 302;
    res.setHeader("Location", "/");
    res.end();
  }
});

server.listen(3001);
