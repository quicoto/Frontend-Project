## Atom Themes

**UI Theme**: Seti

**Syntax Theme**: Monokai

## Atom Packages

* atom-beautify
* busy-signal
* editorconfig
* emmet
* file-types
* goto-definition
* hyperclick
* intentions
* linter
* linter-eslint
* linter-htmlhint
* linter-sass-lint
* markdown-writter
* pigments

## Atom Config

```
"*":
  "atom-beautify":
    css:
      convert_quotes: "single"
      newline_between_rules: true
      preserve_newlines: true
      selector_separator_newline: true
    general:
      _analyticsUserId: "2cdc5dba-a431-42e7-b17e-32413745d062"
      beautifyOnSave: false
    html:
      indent_inner_html: true
  "atom-css-comb":
    readyMadeConfigs: "zen"
  "autocomplete-plus":
    confirmCompletion: "tab and enter"
    strictMatching: true
  core:
    customFileTypes:
      "source.ini": [
        ".buckconfig"
        ".flowconfig"
        ".hgrc"
      ]
      "source.json": [
        ".arcconfig"
        "BUCK.autodeps"
      ]
      "source.python": [
        "BUCK"
      ]
    disabledPackages: [
      "autocomplete"
      "autosave"
      "dev-live-reload"
      "nuclide-hg-repository"
      "linter-bootlint"
      "atom-prettify"
      "react"
      "atom-jinja2"
      "atom-easy-jsdoc"
      "tree-view"
    ]
    telemetryConsent: "no"
    themes: [
      "seti-ui"
      "monokai"
    ]
    titleBar: "custom-inset"
  "css-comb":
    config: "yandex"
  editor:
    fontSize: 17
    invisibles: {}
    scrollPastEnd: true
    showIndentGuide: true
    softTabs: false
    softWrap: true
    tabLength: 4
  "exception-reporting":
    userId: "c33b304b-77f0-3669-381d-196e10b46c57"
  "file-types":
    ftl: "text.html.basic"
  "git-diff":
    showIconsInEditorGutter: true
  linter: {}
  "linter-eslint":
    disableWhenNoEslintConfig: false
  "linter-sass-lint":
    resolvePathsRelativeToConfig: true
  "linter-ui-default":
    panelHeight: 116
    showPanel: true
  "node-debugger": {}
  nuclide:
    "nuclide-diagnostics-ui": {}
    "nuclide-home":
      showHome: false
  "seti-ui": {}
  "terminal-panel":
    windowHeight: 15
  welcome:
    showOnStartup: false
".editorconfig.source":
  editor:
    tabLength: 4
".html.jinja.text":
  editor:
    tabLength: 4
".jinja.source":
  editor:
    tabLength: 4
".js.regexp.replacement.source":
  editor:
    tabLength: 4
".js.regexp.source":
  editor:
    tabLength: 4
".js.source":
  editor:
    tabLength: 4
".source.ts":
  editor:
    tabLength: 4
".source.tsx":
  editor:
    tabLength: 4
core:
  "exception-reporting":
    userId: "cadcf641-8e30-74d9-9cde-22b2af2f737b"
  linter:
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

MIT License
======

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
