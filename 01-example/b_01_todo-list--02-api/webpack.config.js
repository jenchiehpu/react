const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const webpack = require('webpack');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
// const CopyPlugin = require('copy-webpack-plugin');

const DEV_MODE = process.env.NODE_ENV === 'development';
const CONTENT_HASH = DEV_MODE ? '' : '-[contenthash]';

const creatSCSSRules = (isModule) => {
  const moduleOptions = isModule
    ? {
        importLoaders: 1,
        modules: {
          localIdentName: '[path][name]__[local]--[hash:base64:5]',
        },
      }
    : {};
  return [
    {
      loader: MiniCssExtractPlugin.loader,
      options: {},
    },
    {
      loader: 'css-loader',
      options: {
        sourceMap: true,
        ...moduleOptions,
      },
    },
    {
      loader: 'sass-loader',
      options: {
        sourceMap: true,
        implementation: require('sass'),
        additionalData: `
          $DEV_MODE: ${DEV_MODE};
        `,
      },
    },
  ];
};

/**
 * @type {import('webpack').Configuration}
 */
module.exports = {
  context: path.resolve('src'),
  mode: process.env.NODE_ENV,
  entry: {
    app: ['./index.jsx'],
  },
  devtool: DEV_MODE ? 'inline-source-map' : false,
  output: {
    filename: `js/[name]${CONTENT_HASH}.js`,
    chunkFilename: `js/[name]-chunk${CONTENT_HASH}.js`,
    path: path.resolve('dist'),
    publicPath: '/',
    assetModuleFilename: `assets/[name]${CONTENT_HASH}[ext][query]`,
  },
  cache: {
    type: 'filesystem',
  },
  resolve: {
    modules: [path.resolve('src'), path.resolve('node_modules')],
    alias: {
      '@': path.resolve('src'),
    },
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader',
        },
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        include: path.resolve('src'),
        oneOf: [
          {
            test: /\.module.scss$/,
            use: creatSCSSRules(true),
          },
          {
            test: /\.scss$/,
            use: creatSCSSRules(false),
          },
        ],
      },
      {
        test: /\.pug$/,
        use: [
          { loader: 'html-loader' },
          {
            loader: 'pug-html-loader',
            options: {
              pretty: DEV_MODE,
              data: {
                DEV_MODE,
                // 這裡可以傳變數給 pug
              },
            },
          },
        ],
        include: path.resolve('src/html'),
      },
      {
        // https://webpack.js.org/guides/asset-modules/
        // https://webpack.docschina.org/guides/asset-modules/
        test: /\.(png|jpg|gif|svg|ico)$/,
        oneOf: [
          {
            type: 'asset/inline',
            resourceQuery: /inline/,
            parser: {
              dataUrlCondition: {
                maxSize: 99999999,
              },
            },
          },
          {
            type: 'asset/resource',
            parser: {
              dataUrlCondition: {
                maxSize: 1024 * 2, // 2kb
              },
            },
          },
        ],
        include: path.resolve('src/img'),
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './html/index.pug',
      filename: 'index.html',
    }),
    new MiniCssExtractPlugin({
      filename: `css/[name]${CONTENT_HASH}.css`,
    }),
    /* new CopyPlugin({
      patterns: [{ from: './public', to: '' }],
    }), */
    // https://webpack.js.org/plugins/define-plugin/
    new webpack.DefinePlugin({}),
    new ProgressBarPlugin(),
    new FriendlyErrorsWebpackPlugin(),
    DEV_MODE && new ReactRefreshWebpackPlugin(),
  ].filter(Boolean),
  // https://webpack.js.org/configuration/stats/
  stats: DEV_MODE ? 'errors-only' : 'minimal',
  /**
   * @type {import('webpack-dev-server').Configuration}
   */
  devServer: {
    // https://webpack.js.org/configuration/dev-server/#devserverhistoryapifallback
    // HTML5 History API
    historyApiFallback: true,
    port: 3000,
    hot: true,
    // 可以用 ip 連線，預設是 localhost
    host: '0.0.0.0',
    proxy: [
      {
        context: ['/api'],
        target: 'https://k9wvmn0z75.sse.codesandbox.io',
        changeOrigin: true,
      },
    ],
  },
  optimization: {
    minimize: !DEV_MODE,
    minimizer: DEV_MODE ? [] : [new CssMinimizerPlugin(), new TerserPlugin()],
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendors: {
          name: 'vendors',
          test: /[\\/]node_modules[\\/]/,
          priority: 10,
          enforce: true,
        },
      },
    },
  },
};
