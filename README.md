# editor-font-family

Font family inline tool developed for [Editor.js](https://editorjs.io).

## Installation

### Install via NPM or Yarn

Get the package

```shell
npm i editor-font-family
```

or

```shell
yarn add editor-font-family
```

Include module in your application

```typescript
import FontFamily from "editor-font-family";
```

## Usage

Add a new Tool to the `tools` property of the Editor.js initial config.

```typescript

  ...

  tools: {
    ...
    fontFamily: FontFamily
  }
  ...

```
