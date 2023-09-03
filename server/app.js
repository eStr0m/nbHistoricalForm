const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer")
const app = express();
require("dotenv").config();

const PORT = 3000;



app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});



app.get("/test", (request, response) => {
    const testRes = {
        message: "HeiHei! Serveren funker :D"
    };

    response.json(testRes);
});




app.post("/submit", (request, response) => {
    const formData = request.body;
    const resMsg = {
        message: "Dette er informasjonen fra skjema:",
        data: formData,
    };

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_RECIPIENT,
        subject: "E Strøm - Case",
        text: "Vil takke for at dere tok dere tiden til å teste meg. Her er informasjonen dere fylte inn: "  + JSON.stringify(resMsg, null, 2) 
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if(error) {
            console.log(error)
            response.status(500).send("Beklager, eposten kunne ikke sendes.");
        }else {
            console.log("Email ble sendt!" + info.response)
            response.status(200).send("Eposten ble sendt!");
        }
    });

    response.json(resMsg);
});






app.listen(PORT, () => {
    console.log("server listening on PORT: ", PORT);
});