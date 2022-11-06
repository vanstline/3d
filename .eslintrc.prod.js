module.exports = {
    root: true,
    env: {
        node: true
    },
    globals: {
        env: true
    },
    extends: [
        "./.eslintrc.js"
    ],
    rules: {
        "no-console": 2,
        "no-debugger": 2
    }
};
