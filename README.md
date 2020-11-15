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

[Extension in VSCode](https://github.com/jest-community/vscode-jest)

For intellisense,

```
yarn add -D @types/jest
```

### For ES6

You can either go with babel and friends route or you should have **Node.js >=v13.x**, and **Jest >=26.1.0** installed.

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

## Unit Tests

- Unit means One. Each test tests exactly one thing.
- Each test method is one test.
- Best practice: one assert per test method.
- Share setup in a fixture, not same method.
- You can have multiple test classes per model class.

**Speed**

- A single test should run in a second or less
- A complete suite should run in a minute or less
- Separate larger tests into additional suites
- Fail fast. Run slowest tests last

**Passing test should produce no output. If necessary, silence loggers in test**

### Unit also means indepedent

- Tests can (and do) run in any order.
- Tests can (and do) run in parallel in multiple threads.
- Tests should not interfere with each other.
  - Do not use non-constant static fields in your tests.
  - Be wary of global state in the model code under test.
- Share setup in a fixture, not the same method.

### Avoid Conditional Logic in Tests

```
if(x > 5) {
  assertTrue(y);
} else {
  assertEquals(1,z);
}
```

Instead, they should be separate tests.

## Different Tests in JS

1. Unit test - Fully isolated (i.e. testing one function)
2. Integration test - With Dependencies (e.g. testing a fuction that calls another function)
3. End-to-End (E2E) test - Full flow (e.g. validating the DOM after a click)
