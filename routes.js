const fs = require("fs");

const requestHandler = (request, response) => {
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
    const body = [];
    request.on("data", (chunk) => {
      body.push(chunk);
    });
    return request.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      fs.writeFile("message.txt", parsedBody.split("=")[1], (err) => {
        response.statusCode = 302;
        response.setHeader("Location", "/");
        return response.end();
      });
    });
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

module.exports = requestHandler;
