# typescript-webpack-generator-sample
Builds a minimalistic ES6 generator code sample with the help of TypeScript and webpack


### Contents

The `sample.tsx` code includes four basic samples in a single resulting JS bundle & HTML page:

- React DOM rendering sample
- Async & Await sample with REST-API fetching
- Generator function sample with finite values
- Fibonacci sequence generator sample with infinite values

### Usage

To run the webpack development server (with live editing support)

    npm install
    npm start

To build the `bundle.js` file for regular usage

	npm run build

### Notes

The important parts in the project setup to get async/await & generator support working are:

- `.babelrc` config file with the `es2015 preset` and `regenerator transform` plugin
- inclusion of the `"babel-polyfill"` in `webpack.config.js` build configuration
- a fix to include the babel-polyfill in the `awesome-typescript-loader` for webpack
 - see `fixes\awesome-typescript-loader` directory
 - needed until [issue #121](https://github.com/s-panferov/awesome-typescript-loader/issues/121) of `awesome-typescript-loader` is resolved
