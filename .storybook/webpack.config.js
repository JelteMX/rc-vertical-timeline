const path = require('path')
const SRC_PATH = path.join(__dirname, '../src')
const STORIES_PATH = path.join(__dirname, '../stories')

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    include: [SRC_PATH, STORIES_PATH],
    use: [
      {
        loader: require.resolve('awesome-typescript-loader'),
        options: {
          configFileName: './tsconfig.json'
        }
      },
      require.resolve("react-docgen-typescript-loader")
    ]
  })
  config.resolve.extensions.push('.ts', '.tsx')
  config.module.rules.push({
    test: /\.scss$/,
    use: ['style-loader', 'css-loader', 'sass-loader'],
    include: [
      path.join(SRC_PATH, 'scss'),
      STORIES_PATH
    ],
  });
  return config
}
