const express = require("express");
const cors = require("cors");
const app = express ();

const PORT = 3000;



app.use(cors());
app.use(express.json());


app.listen(PORT, () => {
    console.log("server listening on PORT: ", PORT)
});

app.get("/status", (req, res) => {
    res.send("hallo!")
});

app.get("/abc", (req, res) => {
    const status = {
        "status": "running",
    };

    res.send(status);
});