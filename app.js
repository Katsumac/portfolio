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

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`The app is listening on port ${port}!`);
})