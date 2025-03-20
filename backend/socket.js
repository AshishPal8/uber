const socketIo = require("socket.io");
const userModel = require("./models/user.model");
const captainModel = require("./models/captain.model");

let io;

function initialiseSocket(server) {
  io = socketIo(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
    },
  });

  io.on("connection", (socket) => {
    console.log("A user connected", socket.id);

    socket.on("join", async (data) => {
      const { userId, userType } = data;

      console.log("User joined", userId, userType);

      if (userType === "user") {
        await userModel.findByIdAndUpdate(userId, {
          socketid: socket.id,
        });
      } else if (userType === "captain") {
        await captainModel.findByIdAndUpdate(userId, {
          socketid: socket.id,
        });
      }
    });

    socket.on("update-captain-location", async (data) => {
      const { userId, location } = data;

      if (!location || !location.ltd || !location.lng) {
        return socket.emit("error", "Location is required");
      }

      await captainModel.findByIdAndUpdate(userId, {
        location: {
          ltd: location.ltd,
          lng: location.lng,
        },
      });
    });

    socket.on("disconnect", () => {
      console.log("User disconnected", socket.id);
    });
  });
}

function sendMessageToSocketId(socketId, messageObject) {
  console.log(`Sending message to ${socketId}, ${messageObject}`);
  if (io) {
    io.to(socketId).emit(messageObject.event, messageObject.data);
  } else {
    console.log("Socket not initialised");
  }
}

module.exports = { initialiseSocket, sendMessageToSocketId };
