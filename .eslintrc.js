module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ["standard", "prettier"],
  plugins: ["prettier"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    camelcase: "off",
    "prettier/prettier": ["error", { endOfLine: "auto" }],
  },
};

/* 

module.exports = {
  env: {
    es2021: true,
    node: true
  },
  extends: 'standard',
  overrides: [
    {
      env: {
        node: true
      },
      files: [
        '.eslintrc.{js,cjs}'
      ],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
  }
}


*/
