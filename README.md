# Workshop CMD PWA

Based on [Workshop Performance Matters](https://github.com/CMDA/performance-matters/tree/16c287).

## Project setup

This project serves an adapted version of the [Bootstrap documentation website](http://getbootstrap.com/). It is based on the [github pages branche of Bootstrap](https://github.com/twbs/bootstrap/tree/gh-pages). 

Differences from actual Bootstrap documentation:

- Added custom webfont
- Removed third party scripts
- The src directory is served with [Express](https://expressjs.com/).
- Templating is done with [Nunjucks](https://mozilla.github.io/nunjucks/)

## Getting started

- Install dependencies: `npm install`
- Serve: `npm start`
- Expose localhost: `npm run expose`

## Exercise 8

Precache all the assets. For more info, check [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Cache/addAll)
