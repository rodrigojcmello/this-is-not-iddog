const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');
const path = require('path');

module.exports = (env = { NODE_ENV: '' }) => {
  const prod = env.NODE_ENV === 'production';
  const config = {
    mode: prod ? 'production' : 'development',
    entry: './src/App.tsx',
    output: {
      filename: '[name].[contenthash].js',
      publicPath: '/',
      path: path.resolve(__dirname, 'dist')
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js']
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: [
                  [
                    '@babel/preset-env',
                    {
                      targets: !prod
                        ? 'last 1 chrome version'
                        : ['> 1%', 'ie 10']
                    }
                  ],
                  '@babel/preset-react',
                  '@babel/preset-typescript'
                ],
                plugins: [
                  '@babel/plugin-transform-destructuring',
                  '@babel/plugin-transform-runtime',
                  'babel-plugin-styled-components'
                ],
                cacheDirectory: true
              }
            }
          ],
          exclude: /node_modules/
        },
        {
          test: /\.svg$/,
          use: [
            {
              loader: '@svgr/webpack',
              options: {
                configFile: './svg.js'
              }
            }
          ]
        },
        {
          test: /\.(jpe?g|png|gif|eot|woff2?|ttf)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: prod
                  ? 'assets/[hash].[ext]'
                  : 'assets/[name].[hash].[ext]'
              }
            }
          ]
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({ template: './index.html' }),
      new webpack.DefinePlugin({
        PRODUCTION: prod
      })
    ],
    optimization: {
      runtimeChunk: 'single',
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all'
          }
        }
      }
    }
  };
  if (prod) {
    config.plugins.push(new CleanWebpackPlugin());
  } else {
    config.devtool = 'source-map';
    config.plugins.push(
      new WebpackNotifierPlugin({
        title: 'Webpack',
        skipFirstNotification: true,
        alwaysNotify: false
      })
    );
    config.devServer = {
      // historyApiFallback: true
    };
  }
  return config;
};
