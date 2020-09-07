const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const next = require("next");

require("./server/database/index.js");

const router = require("./server/routes/index.js");

const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== "production";
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

nextApp.prepare().then(() => {
    const app = express();
    app.use(
        bodyParser.urlencoded({
            extended: true,
        })
    );
    app.use(bodyParser.json());
    app.use(cors());
    app.use("/api", router);

    app.get("*", (req, res) => {
        return handle(req, res);
    });

    app.listen(port, (err) => {
        if (err) throw err;
        console.log("Server running on port " + port);
    });
});