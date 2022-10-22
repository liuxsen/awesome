# Liuxsen Theme for VS Code

# Installation

1. Open **Extensions** sidebar panel in VS Code. `View → Extensions`
2. Search for `liuxsen` - find the one by **liuxsen**
3. Click **Install** to install it.
4. Code > Preferences > Color Theme > **liuxsen**
5. Optional: Use the recommended settings below for best experience

## Recommended Settings

```js
{
  // This is all that matters
  "workbench.colorTheme": "liuxsen",
  // The Cursive font is operator Mono, it's $200 and you need to buy it to get the cursive. Dank Mono or Victor Mono are good alternatives
  "editor.fontFamily": "Operator Mono, Menlo, Monaco, 'Courier New', monospace",
  "editor.fontSize": 17,
  "editor.lineHeight": 25,
  "editor.letterSpacing": 0.5,
  "files.trimTrailingWhitespace": true,
  "editor.fontWeight": "400",
  "prettier.eslintIntegration": true,
  "editor.cursorStyle": "line",
  "editor.cursorWidth": 5,
  "editor.cursorBlinking": "solid",
  "editor.renderWhitespace": "all",
}
```

## Colours
Blue: #193549
Blue Highlight: #1F4662
Blue Highlight2: #234E6D
Blue Dark: #122738
Yellow: #ffc600
Hot Pink: #ff0088
Blush Pink: #ff628c
Orange: #ff9d00
Green

## Contributing

To work on the theme:

1. Clone this repo and open in VS Code
2. Open run `View → Run`
3. Click `Launch Extension`. This will open up another VS Code Editor
4. Make changes to `liuxsen.json`. You will see changes reflected in the other editor that opened in step 3.

If you are making a Pull Request, Please give me a screenshot of before/after!

## Deploying a new version

These are mostly notes for me.

1. Increment the version number in `package.json`
1. run `npm run bundle`
1.

## I don't like something

First, this theme is new so if something is funky, please open an issue. There are many languages and parts of VS Code I don't use, so let me know!

These are the things we have control over. If you would like to change something, you can either open a PR and see if I'd like it added, or override the colours in your own settings.json file.

https://code.visualstudio.com/docs/getstarted/theme-color-reference

## Put liuxsen in other places!

* [Sublime Text](https://github.com/wesbos/liuxsen)
* [Atom](https://github.com/wesbos/liuxsen-atom)
* [iTerm2](https://github.com/wesbos/liuxsen-iterm)
* [Hyper Term](https://github.com/wesbos/hyperterm-liuxsen-theme)
* [Alfred](https://github.com/wesbos/liuxsen-Alfred-Theme)
* [Slack](https://github.com/wesbos/liuxsen-Slack)

## Thanks

Thanks to Roberto Achar for doing much of the initial porting to VS Code.
