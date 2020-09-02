const prod = {
    url: {
        API_URL: "https://wece.ece.illinois.edu/api",
    },
};
const dev = {
    url: {
        API_URL: "http://localhost:3000/api",
    },
};
module.exports = {
    config: process.env.NODE_ENV === "development" ? dev : prod,
};