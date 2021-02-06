const path = require("path");

module.exports = {
  stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  webpackFinal: async (config) => {
    // Remove the existing css rule
    config.module.rules = [
      ...config.module.rules.filter((f) => f.test.toString() !== "/\\.css$/"),

      {
        oneOf: [
          {
            test: /\.module\.css$/,
            use: [
              require.resolve("style-loader"),
              {
                loader: require.resolve("css-loader"),
                options: {
                  modules: true,
                },
              },
            ],
            include: path.resolve(__dirname, "../styles"),
          },
          {
            test: /\.css$/,
            exclude: /\.module\.css$/,
            use: [
              require.resolve("style-loader"),
              require.resolve("css-loader"),
            ],
            include: path.resolve(__dirname, "../styles"),
          },
        ],
      },
    ];

    return config;
  },
};
