module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/,
      },
      use: ["@svgr/webpack"],
    });

    return config;
  },
  env: {
    ENV: process.env.NODE_ENV,
    MONGODB_URL: process.env.MONGODB_URL,
    MAILERLITE_API_KEY: process.env.MAILERLITE_API_KEY,
    MAILERLITE_GROUP_ID: process.env.MAILERLITE_GROUP_ID,
    API_URL: process.env.API_URL,
  },
};
