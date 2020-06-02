# Movies-test

> A multi-pages website to load different movie lists and check the single movie details and trailer.

## Screenshot
<div align="center">

**Homepage**

![](./screenshot/homepage.png)

**Movie details**

![](./screenshot/singleMovie.png)

**Trailer page**

![](./screenshot/singleMovie.png)


</div>

## Usage

* Clone this repo in your local environment using `git clone`.

* `npm install` to begin dependencies installation.

* `npm start` to run it.

* `npm test` to run the jest tests.

* `npm run test:e2e` to open the cypress tests utility. If you had not run `npm start`, use `npm run test:e2e:start`.


## Improvements/Known bugs/Work in progress

* Improvement: The slider is written in pure Css and its depending by the width of the Movie container. Todo: link the different files to make use of the Css media queries to make height responsive (at current status only the width is).
* Bug: `npm test` it's warning us that *An update to Component inside a test was not wrapped in act(...).* for all the components that are updating the state with UseEffect: to fix.
* Improvement: errors mananement inside the single components.
* Improvement: possible improvement of the generic style to be more similar to the company website.

## Extra thoughts and decision process

Follow the [additional information](./Additional-information.md) file to explore more my decisional process and the structure of the application :). 

## Built with

* [React](https://reactjs.org/) - Front end library for building user interfaces.
* [Webpack](https://webpack.js.org/) - A bundler for javascript and friends.
* [Babel](https://babeljs.io/) - The compiler for next generation JavaScript.
* [Jest](https://jestjs.io/) - Delightful JavaScript Testing.
* [React-testing-library](https://testing-library.com/) - React testing utilities.
* [Cypress](https://www.cypress.io/) - JavaScript End to End Testing Framework.

## Authors

* Pier Andrea Delise: [GitHub](https://github.com/pierandread) - [LinkedIn](https://www.linkedin.com/in/pier-andrea-delise/)
