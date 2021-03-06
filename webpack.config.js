const path = require('path');
module.exports = {
mode:"production",
devtool:"source-map",
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
    module: {
        rules: [
            {
              test:/\.(scss|css)$/,
              use:['style-loader', 'css-loader', 'sass-loader']
            },
            { test: /\.m?js$/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: ['@babel/preset-env', '@babel/preset-react' ]
                }
              }
            },
            { 
              test: /\.(png|jpg|gif)$/,
              loader: 'file-loader',
              options: {},
            }
        ]
    }
};