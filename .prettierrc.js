module.exports = {
    arrowParens: 'avoid',
    bracketSpacing: true,
    endOfLine: 'lf',
    htmlWhitespaceSensitivity: 'css',
    jsxBracketSameLine: false,
    printWidth: 150,
    proseWrap: 'preserve',
    requirePragma: false,
    semi: true,
    singleQuote: true,
    tabWidth: 2,
    trailingComma: 'all',
    useTabs: false,
    vueIndentScriptAndStyle: true,
    overrides: [
      {
        files: '*.json',
        options: {
          printWidth: 200,
        },
      },
    ],
  };
  