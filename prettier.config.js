module.exports = {
  semi: false,
  singleQuote: true,
  printWidth: 100,
  tabWidth: 2,
  useTabs: false,
  trailingComma: 'es5',
  bracketSpacing: true,
  jsxBracketSameLine: false,
  proseWrap: 'preserve',
  htmlWhitespaceSensitivity: 'strict',
  endOfLine: 'lf',
  overrides: [
    {
      files: '*.mdx',
      options: {
        parser: 'mdx',
        proseWrap: 'preserve',
      },
    },
  ],
}
