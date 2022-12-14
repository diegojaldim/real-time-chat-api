module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        }
      }
    ],
    '@babel/preset-typescript'
  ],
  plugins: [
    [
      "module-resolver",
      {
        "root": ["./"],
        "alias": {
          "@controllers": "./src/controllers",
          "@models": "./src/models"
        }
      }
    ]
  ],
  ignore: [
    '**/*.spec.ts'
  ]
}