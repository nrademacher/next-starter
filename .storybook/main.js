// .storybook/main.js
const path = require('path');

module.exports = {
  stories: ['../src/**/*.story.mdx', '../src/**/*.story.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-postcss',
  ],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.(sc|sa|c)ss$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
            modules: {
              auto: true,
            },
          },
        },
        {
          loader: 'postcss-loader',
          options: {
            // it "compiles" when I omit these options but I didn't confirm whether the correct postcss
            // version is imported when omiting this.. So having it here helps me sleep at night
            implementation: require('postcss'),
            postcssOptions: {
              config: path.resolve(__dirname, '..', 'postcss.config.js'),
            },
          },
        },
        'sass-loader',
      ],
      include: path.resolve(__dirname, '..', 'src'),
    });

    return config;
  },
};
