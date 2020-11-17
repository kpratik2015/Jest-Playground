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

## TDD Katas

- String Calculator
- Interactions
- Password Verifier
- Prime Factors
- Bowling Game
- FizzBuzz

## TDD Takeaways

- Avoid testing implementation details (like a method), test behaviors.
- Trigger for writing tests is implementing a requirement. If I want the software to do something then I will write a test for that.
- Test the public API (what contract your software has with the world i.e. what it's offering to do).
  - Not an HTTP API; the exports from a module.
- Writing tests to cover the use cases or stories. Use a Given When Then model.
- The SUT (System Under Test) is not a class. The SUT is the 'exports' from a module - its facade. A class may be the facade, but many classes are implementation details of the module.
- Write tests only against the stable contract of the API.
- Test becomes the first consumer of your code. That dictates what it should look like and how it should work. This is objective of TDD.
- The unit of isolation is the test and not the system under test.
- You do not write new unit tests when refactoring to clean code. Generally you have conditionals when you're trying to cover new behaviours.
- Tight coupling is worse than DRY.
- Code smells to know for refactoring (Martin Fowler, Refactoring): Duplicate code, Parallel Inheritance Heirarchies, Long Method, Lazy Class, Large Class, Speculative Generality, Long Parameter List, Message Chains, Divergent Change, Inappropriate Intimacy, Shotgun Surgery, Data Class, Feature Envy, Refused Bequest, Data Clumps, Comments, Primitive Obsession, Temporary Field, Switch Statements and Middle Man.
- Prefer DI friendly frameworks that want factories. Implement via IOC if you need to. If you find implementing IOC registration in your tests then something has gone horribly wrong.
