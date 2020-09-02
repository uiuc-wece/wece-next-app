const axios = require("axios");

async function addSubscriber(req, res) {
    try {
        const url = `https://api.mailerlite.com/api/v2/groups/${process.env.MAILERLITE_GROUP_ID}/subscribers`;
        const { firstName, lastName, email } = req.body;

        const headers = {
            "content-type": "application/json",
            "x-mailerlite-apikey": process.env.MAILERLITE_API_KEY,
        };

        const data = {
            name: firstName,
            email: email,
            resubscribe: true,
            fields: {
                last_name: lastName,
            },
        };

        await axios
            .post(url, data, { headers: headers })
            .then((response) => {
                res.status(201).json({
                    success: true,
                    message: "Subscriber added.",
                    data: response.data,
                });
            })
            .catch((error) => {
                console.log("Error: " + error);
            });
    } catch (err) {
        res.status(400).json({
            success: false,
            message: "Invalid parameters.",
            data: err,
        });
    }
}

async function unsubscribe(req, res) {
    try {
        const { email } = req.body;
        const url = `https://api.mailerlite.com/api/v2/subscribers/${email}`;

        const data = {
            type: "unsubscribed",
        };

        const headers = {
            "content-type": "application/json",
            "x-mailerlite-apikey": process.env.MAILERLITE_API_KEY,
        };

        await axios
            .put(url, data, { headers: headers })
            .then((response) => {
                res.status(200).json({
                    success: true,
                    message: "Subscriber unsubscribed.",
                    data: response.data,
                });
            })
            .catch((error) => {
                console.log("Error: " + error);
            });
    } catch (err) {
        res.status(400).json({
            success: false,
            message: "Invalid parameters.",
            data: err,
        });
    }
}

module.exports = { addSubscriber, unsubscribe };