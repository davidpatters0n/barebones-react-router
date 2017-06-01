module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "parser": "babel-eslint",
    "extends": ["eslint:recommended", "plugin:react/all"],
    "parserOptions": {
        "sourceType": "module",
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        }
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "indent": [
            "error",
            2
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "no-undef": 0,
        "no-unused-vars": 0,
        "react/no-unused-prop-types": 0,
        "react/jsx-indent": [2, 2],
        "react/jsx-indent-props": [2, 2],
        "react/jsx-sort-props": [0, { "callbacksLast": true, "ignoreCase": true }],
        "react/jsx-max-props-per-line": [1, { "maximum": 2 }],
        "react/jsx-no-literals": 0,
        "react/no-set-state": 0
    },
};
