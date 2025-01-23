module.exports = {
  semi: false,
  trailingComma: 'all',
  singleQuote: true,
  printWidth: 100,
  tabWidth: 2,
  endOfLine: 'auto',
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrder: [
    '^react(.*)$',
    '<THIRD_PARTY_MODULES>',
    '^@/(.*)$',
    '^../(.*)',
    '^./(.*)',
  ],
} 