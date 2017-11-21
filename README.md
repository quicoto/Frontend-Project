## Terminal

* https://github.com/robbyrussell/oh-my-zsh (for Git branches and other awesomeness)
  * Install fonts: https://github.com/powerline/fonts
  * Use Menlo Powerline font
  * Add `DEFAULT_USER=$USER` to the `~/.zshrc` to hide the machine name

## Atom Themes

**UI Theme**: Atom Material UI

**Syntax Theme**: Atom Material Syntax

## Atom Packages

* atom-beautify
* atom-easy-jsdoc
* atom-ide-ui 
* atom-npm-outdated
* busy-signal
* editorconfig
* emmet
* file-icons
* file-types (for associating .pcss and .ftl as other syntax)
* git-blame
* git-plus
* hyperclick
* ide-typescript
* intentions
* language-freemarker (for Magnolia / TeamSite)
* language-htl (for AEM)
* language-vue
* line-diff-details
* linter
* linter-eslint
* linter-htmlhint
* linter-sass-lint
* linter-stylelint
* markdown-writter
* pigments
* teletype

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
  "atom-easy-jsdoc":
    useReturns: true
  "atom-ide-ui":
    "atom-ide-diagnostics-ui":
      autoVisibility: true
      showDirectoryColumn: true
    use: {}
  "atom-material-ui":
    colors: {}
    fonts:
      fontSize: 19
    tabs: {}
    ui:
      panelContrast: true
  "autocomplete-plus":
    confirmCompletion: "tab and enter"
    strictMatching: true
  core:
    closeDeletedFileTabs: true
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
      "linter"
    ]
    ignoredNames: [
      ".git"
      ".hg"
      ".svn"
      ".DS_Store"
      "._*"
      "Thumbs.db"
      "desktop.ini"
      "node_modules"
      "target"
      ".bundle.js"
      ".bundle.css"
    ]
    telemetryConsent: "no"
    themes: [
      "atom-material-ui"
      "atom-material-syntax"
    ]
    titleBar: "custom-inset"
  "css-comb":
    config: "yandex"
  editor:
    fontFamily: "Fira Code"
    fontSize: 17
    invisibles: {}
    preferredLineLength: 100
    scrollPastEnd: true
    showIndentGuide: true
    showInvisibles: true
    softTabs: false
    softWrap: true
    tabLength: 4
  "exception-reporting":
    userId: "c33b304b-77f0-3669-381d-196e10b46c57"
  "file-icons": {}
  "file-types":
    ftl: "text.html.basic"
    pcss: "source.css"
  "git-blame":
    columnWidth: 486
  "git-diff":
    showIconsInEditorGutter: true
  hyperclick:
    darwinTriggerKeys: "altKey"
  linter: {}
  "linter-eslint":
    advancedLocalNodeModules: "/Users/ricard.torres/Projects/mamcom/mamcom-web-components/mamcom-web-components-package/frontend-build/node_modules"
    fixOnSave: true
  "linter-sass-lint":
    resolvePathsRelativeToConfig: true
  "linter-stylelint":
    disableWhenNoConfig: false
  "linter-ui-default":
    panelHeight: 229
  "node-debugger": {}
  nuclide:
    "nuclide-diagnostics-ui": {}
    "nuclide-home":
      showHome: false
  "seti-ui": {}
  "terminal-panel":
    windowHeight: 15
  "tree-view":
    alwaysOpenExisting: true
    autoReveal: true
  welcome:
    showOnStartup: false
".aem.htl":
  editor:
    commentEnd: " */-->"
    commentStart: "<!--/* "
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

## Atom Stylesheet

```
/*
 * Your Stylesheet
 *
 * This stylesheet is loaded when Atom starts up and is reloaded automatically
 * when it is changed and saved.
 *
 * Add your own CSS or Less to fully customize Atom.
 * If you are unfamiliar with Less, you can read more about it here:
 * http://lesscss.org
 */


 atom-text-editor {
   text-rendering: optimizeLegibility;

   &.editor .syntax--string.syntax--quoted,
   &.editor .syntax--string.syntax--regexp {
     -webkit-font-feature-settings: "liga" off, "calt" off;
   }
 }

 atom-text-editor.editor {
  /*
    Transform selected text into alternative font for elegant touch:
    - this
    - HTML and JSX attributes
    - JS functions (except arrow function)
    - JS undefined
    - JS storage (const/let/async)
    - EX constants
    - Ruby (nil/self/block)
    - Ruby hash keys
  */
  .syntax--variable.syntax--language.syntax--this,
  .syntax--html > .syntax--attribute-name,
  .syntax--JSXAttrs > .syntax--attribute-name,
  .syntax--storage.syntax--type.syntax--js:not(.syntax--function):not(.syntax--arrow),
  .syntax--constant.syntax--language.syntax--undefined.syntax--js,
  .syntax--constant.syntax--other.syntax--object.syntax--key.syntax--js,
  .syntax--variable.syntax--other.syntax--constant.syntax--elixir,
  .syntax--constant.syntax--language.syntax--elixir,
  .syntax--constant.syntax--language.syntax--nil.syntax--ruby,
  .syntax--variable.syntax--language.syntax--self.syntax--ruby,
  .syntax--constant.syntax--other.syntax--symbol.syntax--hashkey.syntax--ruby,
  .syntax--variable.syntax--other.syntax--block.syntax--ruby {
    vertical-align: baseline;
    font-family: 'Bad Script', cursive;
    font-size: 125%;
    font-style: normal !important;
    height: inherit;
    line-height: 100%;
  }
}
```

MIT License
======

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
