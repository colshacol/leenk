
module.exports = {
  sourceMap: 'inline',
  plugins: [
    require('postcss-import')({
      path: './source/client/shared/styles'
    }),
    require('postcss-cssnext')
  ]
}