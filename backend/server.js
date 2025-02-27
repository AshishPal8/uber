const http = require("http");
const app = require("./app");
const port = process.env.PORT;
const { initialiseSocket } = require("./socket");

const server = http.createServer(app);

initialiseSocket(server);

server.listen(port, () => {
  console.log(`Server is listen on port ${port}`);
});
