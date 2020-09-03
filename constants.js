module.exports = {
    base_url: process.env.API_URL ?
        process.env.API_URL :
        "http://localhost:3000/api",
};