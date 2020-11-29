module.exports = {
    mode: 'production', // development or production
    entry: './src/ts/script.ts',
    output: {
        path: `${__dirname}/dest/js`,
        filename: "script.js"
      },
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: 'ts-loader',
        },
      ],
    },
    resolve: {
      extensions: [
        '.ts', '.js',
      ],
    },
  };