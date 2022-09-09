const express = require("express");
const app = express();
const fs = require('fs');

app.use("/js", express.static("./js"));
app.use("/css", express.static("./css"));
app.use("/img", express.static("./img"));

app.get("/", (req, res) => {
    const file = fs.readFileSync("./portfolio.html", "utf-8");
    res.send(file);
})

app.listen(8000, () => {
    console.log("The app is listening on port 8000!");
})