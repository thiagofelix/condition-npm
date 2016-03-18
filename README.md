# condition-npm

> Checks npm script before publishing successful build using semantic-release

Inspired by [condition-circle](https://github.com/bahmutov/condition-circle)

[![NPM Package](https://img.shields.io/npm/v/condition-npm.svg?style=flat-square)](https://www.npmjs.org/package/condition-npm)  
[![Build Status](https://travis-ci.org/thiagofelix/condition-npm.svg?branch=master)](https://travis-ci.org/thiagofelix/condition-npm)  
[![semantic-release][semantic-image] ][semantic-url]  
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)  


[semantic-image]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-url]: https://github.com/semantic-release/semantic-release

## Install and configure

```
npm install --save-dev condition-npm
```

Add the following to the `package.json`

```json
"release": {
  "verifyConditions": "condition-npm"
}
```

This tells [semantic-release plugins](https://github.com/semantic-release/semantic-release#plugins)
to use this package to verify the environment to make sure that a given npm script is running successfuly

### Small print

Author: Thiago Felix &copy; 2016

* [@thiagoofelix](https://twitter.com/thiagoofelix)
* [thiagofelix.com](http://thiagofelix.com)

License: MIT - do anything with the code, but don't blame me if it does not work.

Spread the word: tweet, star on github, etc.

Support: if you find any problems with this module, email / tweet /
[open issue](https://github.com/thiagofelix/condition-npm/issues) on Github
