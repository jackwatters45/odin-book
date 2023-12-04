import { io } from "socket.io-client";
import { apiRoot } from "./envVariables";

const socket = io(apiRoot, { autoConnect: false });

// socket.onAny((event, ...args) => {
//   console.log(event, args);
// });

export default socket;
