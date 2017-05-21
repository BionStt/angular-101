import * as express from "express";
import * as path from "path";
import http = require("http");
import * as fs from "fs";

const port: number = 80;
let app: express.Application = express();
app.use(express.static(__dirname));
app.use(express.static("src"));
app.use(express.static("node_modules"));
app.all("/*", (request, response, next) => {
    response.sendFile("index.html", { root: __dirname });
});

let contents = fs.readFileSync("env-config.json", "utf8");
let config = JSON.parse(contents);
config.node_env = process.env.NODE_ENV || "development";
let json = JSON.stringify(config);
fs.writeFileSync("env-config.json", json, { encoding: "utf8" });

let server = http.createServer(<any>app);
server.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`Server is up and running, listening on port ${port}`);
});

function errorLog(error) {
    if (error) {
        // tslint:disable-next-line:no-console
        console.log(error);
    }
}