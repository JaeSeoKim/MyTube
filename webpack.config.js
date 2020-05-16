const path = require('path')
const ExtractText = require('extract-text-webpack-plugin')
const autoprefixer = require('autoprefixer')

const WEBPACK_ENV = process.env.WEBPACK_ENV
const ENTRY_FILE = path.resolve(__dirname, 'assets', 'js', 'main.js')
const OUTPUT_DIR = path.join(__dirname, 'static')

const config = {
  mode: WEBPACK_ENV,
  entry: ['@babel/polyfill', ENTRY_FILE],
  module: {
    rules: [
      {
        test: /\.(js)$/,
        use: [{ loader: 'babel-loader' }]
      },
      {
        test: /\.(scss)$/,
        use: ExtractText.extract([
          { loader: 'css-loader' },
          {
            loader: 'postcss-loader',
            options: {
              plugins () {
                return [autoprefixer()]
              }
            }
          },
          { loader: 'sass-loader' }
        ])
      }
    ]
  },
  output: {
    path: OUTPUT_DIR,
    filename: '[name].js'
  },
  plugins: [new ExtractText('styles.css')]
}

module.exports = config
