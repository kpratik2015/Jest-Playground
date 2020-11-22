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

## Better Testible Code

```js
$("button").on("click", () => fetchThings(showThings));
function fetchThings(callback) {
  // can be tested
  $.getJSON("/path/to/data").then(callback);
}
```

**Avoid Side-Effects**

```js
function buildModelsString(cars) {
  const models = cars.map((car) => car.model);
  return models.join(",");
}
```

**Use Dependency Injection**

```js
// depends on an external state database connector instance; hard to test
function updateRow(rowId, data) {
  myGlobalDatabaseConnector.update(rowId, data);
}

// takes a database connector instance in as an argument; easy to test!
function updateRow(rowId, data, databaseConnector) {
  databaseConnector.update(rowId, data);
}
```

**Give Each Function a Single Purpose**

In functional programming, the act of stringing several single-purpose functions together is called composition

**Don’t Mutate Parameters**

```js
// sends a new object back instead
function upperCaseLocation(customerInfo) {
  return {
    name: customerInfo.name,
    location: customerInfo.location.toUpperCase(),
    age: customerInfo.age,
  };
}
```

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

## Clean Code

[Ref: Uncle Bob](https://www.youtube.com/watch?v=7EmboKQH8lM)

- Extract functions out of a function until you can't extract anymore. That's how long a function should be.
- A function should not have more than 2-3 arguments. It's possible to use those 'n' arguments in n! ways.
- Avoid passing boolean to function as that will cause an IF-ELSE.
- Switch statements are bad. Use polymorphism instead as there may be a situation when type switched on changes shape. They are like dependency magnet where switch statements allow importing of different modules and a change in switch will require re-deploy/re-compile everything.
- You don't want GUI changes to break business rules. Isolate GUI from business rules.
- Avoid side-effects. Side effects is when you call a function and it causes the system to change state. A real world scenario is when you just change order of 2 function calls and everything works -> because they are side-effect pairs. Let's say you wanna make `file.open()` safe. You pass in filename and lambda (function) to open function call and then the lambda will ensure file is closed after function execution completes.
  - A convention is that a function which does not returns anything could have side-effect and a function which returns something is free of side-effect.
- We don't know a software is correct but we can prove it's not failing by writing tests. Just like experiements in science can disprove hypothesis. Dijkstra thought with software we were headed towards mathematical constructs but it's actually science. We demonstrate our software is not incorrect by surrounding it with tests.
- The proper use of comment is to compensate for our failure to express ourselves in code. Try everything else, then comment as last resort. Don't check-in TODO comments; either do or remove it as when you check-in TODOs, you never do it.
- Design patterns are age old ideas which have been given canonical names so that we can singularly discuss & follow them.
- Small scopes like `i` in for loop are okay place to have short name variables. You don't need a reminder why that variable exists. That is, variable length depends on the scope that contains them. Opposite for function name because a global function would be called more often.
- Getting over fear of touching code requires tests. It would be trivial to clean the code if you believe the tests. You decouple the tests from the system. Code coverage is not a management metric.
- You should pair program enough so that you can cover for each other and review code. Pair for few times a week.
- Sequence, selection (if statement) and iteration (while loop) are fundamental invariant of programming.
- When was functional programming invented? The first functional language was LISP in 1957 but functional programming was invented in 1936 with predicate calculus.
- TDD is a discipline. Disciplines have arbitrary motives. TDD is motivated by something real.
  - Rule 1: You're not allowed to write any production code until you've first written a test that fails because the production code doesn't exists
  - Rule 2: You're not allowed to write more of a test than is sufficient to fail (and not compiling is failing)
  - Rule 3: You're not allowed to write anymore production code than is sufficient to pass the current failing test.
  - If you follow these rules, through tests you get a kind of documentation which will give every low level detail of implementation.
- If you're writing the tests first you're creating the code that is easy to test. A word for such code is de-coupled code.
- Who should be writing tests for GUI? GUIs are really hard to test. The reason is you don't know the right answers. You can test the intelligence part of GUI outside of GUI.
- Unit tests are tests written by programmer for programmer.
- TDD is like double entry book keeping which accountants do.
- Inheritance is the tightest coupling we can have. Or if we do inherit, we want to inherit as few things as possible.
- TDD Demo (Stack):
  - First write a test that does nothing and if it passes that means you've an execution environment ready
  - Then make test fail by writing code for a class that doesn't exists. So you already know what you're going to write so you write a test for that.
  - Create the class and make the test pass.
  - Write another failing test e.g. Assert stack isEmpty = true. You find that isEmpty method doesn't exists. So you create it, test passes and then you fail the test by returning false.
  - Now test fails and you return true to make it pass. Here you've tested your test. You've seen it go from red to green.
  - .... Write test to force you to write better code.
  - When you do TDD, you avoid the central behavior for as long as you can. Starting out keep tests simple.
- Agile is not absence of architecture. It's a framework in which we can apply a good architecture. Architecture changes on day to day basis as you add more lines of code or features.
- All disciplines feel slow but they speed you up if it's a good discipline. The only way to go fast, is to go well.
- Cost of modifying software must be low. Meeting requirements is secondary.
- Programmers see each new requirement as a puzzle piece that must fit into an even more complex puzzle. Solution is to keep the puzzle pieces simple.
- No stakeholder can prioritize architecture. You've to assert it. A programmer is also a stakeholder.
- Web is like an I/O system. We built OS to hide I/O from us. The architecture of building does not tells us what it is made of - like bricks, wood, nails, etc. It tells us the intent. Architecture at the top most layer (which is mostly web) should be telling you the intent.
- If you've got a use case you can convert that into an object. That object is called a control object/interactor.
  - It contains application specific business rules.
  - There are 2 types of business rules: 1st that you can automate i.e. application dependent and 2nd you have even if there's no computer i.e. application independent.
  - Application independent rules can be kept in entities. These entities are controlled by the interactor. The interactor control the execution.
  - Then you gotta get data in and out. Those are boundry/interfaces.
  - You can test the interactor without the web. You feed a request model in and you check that you've an appropriate response model
- MVC came before the design patterns. It was invented by Trygve Reenskaug (Danish). It was designed to be used in small stuff like a button or textbox.
- What is database? It's an I/O device. The Database is a detail. We don't want the business rules to know about database.
- An object contains behaviors and may contain data but you're not supposed to know that. A database contains data and not behaviors. ORMs fill in data structures, not objects.
- A good architecture allows major decisions to be deferred. Like what DB to be used can be decided on later.

Books:

- Object-Oriented Software Engineering: A Use Case Driven Approach by Ivar Jacobson
