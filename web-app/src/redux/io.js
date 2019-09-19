import io from "socket.io-client";
const socket = io.connect(process.env.API_URL || "http://localhost:4004/");
export default socket;
