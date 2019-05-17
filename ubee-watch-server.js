const http = require("http");
const express = require("express");
const socket_io = require("socket.io");
const cors = require("cors");

const app = express();

app.get("/credits", {
    author: "Alan Badillo Salas",
    email: "badillo.soft@hotmail.com",
    github: "https://github.com/badillosoft"
});

app.use(cors());

const server = http.createServer(app);

const io = socket_io(server);

console.log("Ubee Watch v1.0");

const prompt = () => `Ubee Watch [${new Date().toLocaleString()}] @`;

const $host = process.env.HOST || process.argv[4] || "0.0.0.0";
const $port = process.env.PORT || process.argv[2] || 5000;
const $token = process.argv[3] || "ubee-watch-public-server";

const $handler = `(channel, data, device = null) => socket.emit("@mode", @protocol)`;

//{ app: @app, device, channel, data }

io.on("connection", socket => {
    socket.on("watcher", (watcher, callback) => {
        
    });
});

server.listen($port, $host, () => {
    console.log(`${prompt()} Server started at http://${$host}:${$port}`);
    console.log(`${prompt()} Acess token: ${$token}`);
});