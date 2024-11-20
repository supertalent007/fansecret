// pages/api/socketio.js
import { initSocket } from "../../../socket/socket";


export default function handler(req, res) {
  if (res.socket.server.io) {
    console.log("Socket.io already running");
  } else {
    console.log("Starting Socket.io");
    initSocket(res.socket.server);
  }
  res.end();
}
