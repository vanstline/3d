const env = require('./src/env/env.prod');

module.exports = {
    extends: ['stylelint-config-standard', 'stylelint-config-rational-order'],
    plugins: ['stylelint-declaration-block-no-ignored-properties'],
    rules: {
        // 插件和基础
        'plugin/declaration-block-no-ignored-properties': true,
        indentation: [4],
        'max-empty-lines': 1,
        'max-line-length': [
            80,
            {
                ignore: ['comments']
            }
        ],
        // 字体 属性
        'no-descending-specificity': true,
        'function-url-quotes': 'always',
        'font-family-no-missing-generic-family-keyword': true,
        'selector-type-no-unknown': true,
        'declaration-no-important': true,
        'font-family-name-quotes': 'always-unless-keyword',
        // 单位
        'unit-no-unknown': [
            true,
            {
                ignoreUnits: ['rpx']
            }
        ],
        'unit-disallowed-list': ['rem'],
        'declaration-property-unit-allowed-list': {
            'font-size': ['px', 'em'],
            'min-width': ['px', '%']
        },
        'value-no-vendor-prefix': [
            true,
            {
                ignoreValues: ['box']
            }
        ],
        'color-hex-case': 'lower',
        'color-hex-length': 'short',
        'color-function-notation': 'legacy',
        'alpha-value-notation': 'number',
        // 选择器
        'selector-max-class': 3,
        'max-nesting-depth': [
            2,
            {
                ignore: ['pseudo-classes'],
                ignoreAtRules: ['media'],
                ignorePseudoClasses: ['hover', 'after', ':after']
            }
        ],
        'selector-max-id': 0,
        'selector-max-type': 0,
        'selector-no-qualifying-type': true,
        'selector-class-pattern': [
            '^((' + env.ssn + '|ant)s?-)([a-zA-Z0-9]+)(-[a-zA-Z0-9]+)*$',
            {
                resolveNestedSelectors: true
            }
        ]
    },
    overrides: [
        {
            files: ['**/*.less'],
            customSyntax: 'postcss-less'
        },
        {
            files: ['**/*.scss'],
            customSyntax: 'postcss-scss'
        }
    ]
};
