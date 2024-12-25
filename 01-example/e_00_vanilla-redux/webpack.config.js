const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const webpack = require('webpack');

const DEV_MODE = process.env.NODE_ENV === 'development';
console.log(`DEV_MODE:${DEV_MODE}`);

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

module.exports = {
  context: path.resolve('src'),
  mode: process.env.NODE_ENV,
  entry: {
    app: ['./index.js'],
  },
  devtool: DEV_MODE ? 'inline-source-map' : false,
  output: {
    filename: `js/[name]${CONTENT_HASH}.js`,
    chunkFilename: `js/[name]-chunk${CONTENT_HASH}.js`,
    path: path.resolve('dist'),
    publicPath: '/',
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
        use: { loader: 'babel-loader' },
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
        test: /\.html$/,
        use: [{ loader: 'html-loader' }],
        include: path.resolve('src/html'),
      },
      {
        test: /\.(png|jpg|gif|svg|ico)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1024 * 2,
              name: `[path][name]${CONTENT_HASH}.[ext]`,
              esModule: false,
            },
          },
        ],
        include: path.resolve('src/img'),
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './html/index.html',
      filename: 'index.html',
    }),
    new MiniCssExtractPlugin({
      filename: `css/[name]${CONTENT_HASH}.css`,
    }),
    // https://webpack.js.org/plugins/define-plugin/
    new webpack.DefinePlugin({}),
    new FriendlyErrorsWebpackPlugin(),
  ],
  // https://webpack.js.org/configuration/stats/
  stats: 'minimal',
  devServer: {
    // https://webpack.js.org/configuration/dev-server/#devserverhistoryapifallback
    // HTML5 History API
    historyApiFallback: true,
    port: 3000,
    hot: true,
    // 可以用 ip 連線，預設是 localhost
    host: '0.0.0.0',
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
