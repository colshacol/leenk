const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: './source/client/index.tsx',
  output: {
      filename: 'app.bundle.js',
      path: `${__dirname}/public/js`
  },

  devtool: 'source-map',

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json', '.styl'],
    modules: ['node_modules', `${__dirname}/source/client`],
    alias: {
      '@styles': `${__dirname}/source/client/shared/styles`,
      '@utils': `${__dirname}/source/client/shared/utils`,
      '@state': `${__dirname}/source/client/state/`
    }
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          'awesome-typescript-loader'
        ]
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      },
      {
        test: /\.styl$/,
        exclude: /(node_modules)/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                importLoaders: 1,
                localIdentName: '[name]-[local]__[hash:base64:5]'
              }
            },
            { loader: 'postcss-loader' },
            {
              loader: 'stylus-loader',
              options: {
                import: `${__dirname}/source/client/shared/styles/global.styl`
              }
            }
          ]
        })
      }
    ]
  },

  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  },

  plugins: [
    new ExtractTextPlugin({
      filename: `../css/styles.css`,
      allChunks: true
    }),
  ]
}