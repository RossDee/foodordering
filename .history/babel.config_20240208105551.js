module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'module-resolver',
      {
        alias: {
          // This needs to be mirrored in tsconfig.json
          components: './src/components',
          constants: './src/constants',
          assets: './src/app/assets',
        },
      },
    ],
  }
}
