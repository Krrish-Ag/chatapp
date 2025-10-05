import { io } from "socket.io-client";

// const url = "http://localhost:3000";
const url = import.meta.env.VITE_RENDER_BACKEND_URL;

export const socket = io(url);
