module.exports = {
  extends: 'stylelint-config-standard',
  ignoreFiles: ['**/*.css', '**/*.js', '**/node_modules/**'],
  rules: {
    'at-rule-no-unknown': [true, {
      ignoreAtRules: ['function', 'if', 'each', 'else', 'for', 'include', 'mixin', 'return', 'warn']
    }],
    'plugin/no-unsupported-browser-features': [true, {
      ignore: ['css3-cursors', 'outline', 'object-fit', 'css-sticky', 'css-appearance', 'css-mixblendmode', 'word-break', 'user-select-none', 'css-resize', 'viewport-units', 'multicolumn', 'calc', 'rem', 'flexbox', 'css-filters', 'css-hyphens']
    }]
  }
};