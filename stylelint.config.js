module.exports = {
  extends: 'stylelint-config-standard',
  ignoreFiles: ['**/*.css', '**/*.js', '**/node_modules/**'],
  rules: {
    'at-rule-no-unknown': [true, {
      ignoreAtRules: ['function', 'if', 'each', 'else', 'for', 'include', 'mixin', 'return', 'warn']
    }]
  }
};
