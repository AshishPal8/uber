const http = require("http");
const app = require("./app");
const port = process.env.PORT;
const server = http.createServer(app);

server.listen(port, () => {
  console.log("Server is listen on port 3000");
});
