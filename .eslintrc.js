module.exports = {
    "env": {
        "commonjs": true,
        "es6": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018
    },
    "rules": {
        "no-caller": 1,
        "global-require": ["error"],
        "no-sync": ["error"],
        "no-var": ["warn"],
        "no-console": 1
    }
}; 