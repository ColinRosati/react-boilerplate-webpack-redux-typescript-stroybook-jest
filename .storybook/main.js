const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const path = require('path')

module.exports = {
  addons: [
    "@storybook/addon-essentials",
  ],
  // Note the mini match prefix search *stories does not work
  stories: ["../src/**/stories.@(tsx|ts|jsx|js)"],

  webpackFinal: async config => {
    // declare storybook's path resolution to be defined by root tsconfig
    config.resolve.plugins = [
      ...(config.resolve.plugins || []),
      new TsconfigPathsPlugin({
        extensions: config.resolve.extensions,
      }),
    ];

    // rule overide for scss modules
    config.module.rules.push(
      {
        test: /\.s(a|c)ss$/,
        include: path.resolve(__dirname, '../'),
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                auto: true,
                localIdentName: '[name]__[local]--[hash:base64:5]',
              },
            },
          },
          'sass-loader'
        ],
      },
    );
    return config;
}
};