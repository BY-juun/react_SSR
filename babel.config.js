module.exports = {
  presets: ["@babel/env", "@babel/react", "@babel/preset-typescript"],
  plugins: [
    "@babel/plugin-transform-runtime",
    "@babel/plugin-transform-async-to-generator",
    "@babel/plugin-transform-arrow-functions",
    "@babel/plugin-proposal-object-rest-spread",
    "@babel/plugin-proposal-class-properties",
  ],
};
