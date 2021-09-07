module.exports = {
  presets: [
    "@babel/preset-env",
    "@babel/preset-typescript",
    [
      "@babel/preset-react",
      {
        runtime: "automatic", //Para não precisar importar o React nas páginas
      },
    ],
  ],
};
