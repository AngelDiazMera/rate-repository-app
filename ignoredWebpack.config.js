/*const path = require('path');
const createExpoWebpackConfigAsync = require('@expo/webpack-config');

// By doing this we can use React router native in web
module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);

  config.module.rules.push({
    test: /\.js$/,
    loader: 'babel-loader',
    include: [path.join(__dirname, 'node_modules', 'react-router-native')],
  });

  return config;
};*/
