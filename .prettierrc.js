module.exports = {
  // React convention is `prop={value}`.
  bracketSpacing: false,
  // Avoid orphaning `>` on a new line to differentiate from self-closing tags.
  // An orphaned `>` looks like a typo in most cases anyway.
  bracketSameLine: true,
  // Avoid mixing quoted and unquoted object keys in the same object.
  quoteProps: 'consistent',
  // React convention is `prop="string"` to differentiate from `prop={'string'}`
  // and `var = 'string'`.
  singleQuote: true,
  // Allow trailing commas for function parameters (added in ECMAScript 2017).
  trailingComma: 'all',
};
