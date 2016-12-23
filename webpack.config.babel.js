import path from 'path';

const APP_DIR = path.resolve(__dirname, 'dist');
const BUILD_DIR = path.resolve(__dirname, 'src');

export default {
  output: {
    path: APP_DIR,
    filename: 'client-bundle.js',
  },
  devtool: 'source-map',
  devServer: {
    contentBase: APP_DIR,
    compress: true,
    port: 9000,
    historyApiFallback: true,
    stats: { colors: true },
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: [/node_modules/],
      },
    ],
  },
  resolve: {
    modules: [BUILD_DIR, 'node_modules'],
    extensions: ['', '.js', '.jsx'],
  },
};
