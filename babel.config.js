module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    // presets: ['expo-router/babel'],
  };
};
