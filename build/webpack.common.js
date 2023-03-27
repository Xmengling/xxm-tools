const TypescriptDeclarationPlugin = require('typescript-declaration-webpack-plugin');

module.exports = {
  mode: 'production',
  optimization: {
    minimize: false,
  },
  resolve: {
    extensions: ['.js', '.ts', '.json'],
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        use: [
          {
            loader: 'ts-loader',
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new TypescriptDeclarationPlugin({ out: `main.d.ts` }), // 将声明文件合成一个
  ],
};
