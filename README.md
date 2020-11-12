# Jest Playground

## Setup

```
npm init -y
yarn add jest -D
```

In `package.json`:

```json
"scripts": {
  "test": "jest --coverage"
}
```

In `.gitignore`:

```
node_modules
# testing
/coverage
```

### For ES6

```
yarn add -D babel-jest @babel/core @babel/preset-env
```

Create `babel.config.js` with below code:

```js
module.exports = {
  presets: [["@babel/preset-env", { targets: { node: "current" } }]],
};
```

It's not advisable exclude `targets` as it'll disallow babel from targetting specific environments/versions.
By default, all ES2015-ES2020 code is transpiled to be ES5 compatible.

## Test Run

`yarn test` or `yarn jest`
