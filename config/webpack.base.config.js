const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = (env) => {
  const { PLATFORM, VERSION } = env;
  return merge([
    {
      module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/env',
                '@babel/react',
                {
                  plugins: ['@babel/plugin-proposal-class-properties'],
                },
              ],
            },
          },
          {
            test: /\.css$/,
            exclude: /node_modules/,
            use: [
              {
                loader: 'style-loader',
                options: {
                  hmr: true,
                },
              },
              'css-loader',
            ],
          },
          {
            test: /\.s[ac]ss$/i,
            exclude: /node_modules/,
            use: [
              {
                loader:
                  PLATFORM === 'production'
                    ? MiniCssExtractPlugin.loader
                    : 'style-loader',
                options: {
                  hmr: true,
                },
              },
              'css-loader',
              {
                loader: 'sass-loader',
                options: {
                  // Prefer `dart-sass`
                  implementation: require('sass'),
                },
              },
            ],
          },
          {
            test: /\.svg$/,
            use: ['@svgr/webpack'],
          },
        ],
      },
      resolve: { extensions: ['*', '.js', '.jsx'] },
      output: {
        path: path.resolve(__dirname, 'dist/'),
        publicPath: '/dist/',
        filename: 'bundle.js',
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: './src/index.html',
          filename: './index.html',
        }),
        new webpack.DefinePlugin({
          'process.env.VERSION': JSON.stringify(env.VERSION),
          'process.env.PLATFORM': JSON.stringify(env.PLATFORM),
        }),
        new CopyWebpackPlugin([{ from: 'src/static' }]),
      ],
    },
  ]);
};
