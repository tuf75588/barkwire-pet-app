module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": ["eslint:recommended", "plugin:react/recommended"],
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "parser": "babel-eslint",
    "plugins": [
        "react"
    ],
    "rules": {
        "indent": [
            "error",
            2,
        ],
    
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ],
        "jsx-a11y/heading-has-content": 0,
    }
};