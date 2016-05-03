## Atom Themes

**UI Theme**: Seti

**Syntax Theme**: Monokai

## Atom Packages

* atom-beautify
* autoclose-html
* emmet
* file-types
* linter
* linter-jshint
* linter-scss-lint
* markdown-writter
* pigments
* terminal-panel


## Atom Config

```
"*":
  'file-types':
   'ftl': 'text.html.basic'
  "atom-beautify":
    _analyticsUserId: "2cdc5dba-a431-42e7-b17e-32413745d062"
    beautifyOnSave: false
    css_convert_quotes: "single"
    css_newline_between_rules: true
    css_preserve_newlines: true
    css_selector_separator_newline: true
    general:
      _analyticsUserId: "463e94db-cc09-4c38-8731-83f5abaf0012"
    html_indent_inner_html: true
  "atom-css-comb":
    readyMadeConfigs: "zen"
  "autocomplete-plus":
    confirmCompletion: "tab and enter"
    strictMatching: true
  core:
    disabledPackages: [
      "autocomplete"
      "autosave"
      "dev-live-reload"
      "nuclide-hg-repository"
      "linter-bootlint"
      "atom-prettify"
      "react"
    ]
    themes: [
      "seti-ui"
      "monokai"
    ]
  "css-comb":
    config: "yandex"
  editor:
    fontSize: 16
    invisibles: {}
    scrollPastEnd: true
    showIndentGuide: true
    softWrap: true
    tabLength: 4
    tabType: "hard"
  "exception-reporting":
    userId: "c33b304b-77f0-3669-381d-196e10b46c57"
  "seti-ui":
    compactView: true
  "terminal-panel":
    windowHeight: 15
  welcome:
    showOnStartup: false
core:
  "exception-reporting":
    userId: "cadcf641-8e30-74d9-9cde-22b2af2f737b"
  linter:
    showErrorInline: true
    statusBar: "Show all errors"
  "linter-eslint":
    disableWhenNoEslintConfig: false
  pigments:
    groupPaletteColors: "by file"
    mergeColorDuplicates: true
  scopeForExtension:
    ".ftl": "source.html"
  "terminal-panel":
    overrideLs: false
    windowHeight: 25
  welcome:
    showOnStartup: false


```
