module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@next/next/recommended"
    ],
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "settings": {
        "react": {
            "version": "detect" // Automatically detect the React version
        }
    },
    "plugins": [
        "react",
        "@next/next"
    ],
    "rules": {
        "react/react-in-jsx-scope": "off", // Disable React in scope for JSX
        "react/prop-types": "off" // Optional: disable prop-types if not used
    }
}
