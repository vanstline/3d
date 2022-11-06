const rules = {
    'no-console': 0,
    'no-debugger': 0,
    'no-nested-ternary': 0,
    camelcase: ['error', { ignoreImports: true, ignoreDestructuring: true, properties: 'never' }],
    'no-restricted-syntax': ['error', { selector: 'WithStatement' }],
    'import/no-unresolved': 0,
    'import/extensions': 0,
    'react/jsx-filename-extension': [
        2,
        {
            extensions: ['.ts', '.tsx', '.js', '.jsx']
        }
    ],
    'no-mixed-spaces-and-tabs': [2, true],
    'require-jsdoc': [
        'error',
        {
            require: {
                FunctionDeclaration: true,
                MethodDefinition: true,
                ClassDeclaration: true,
                ArrowFunctionExpression: true,
                FunctionExpression: true
            }
        }
    ],
    'valid-jsdoc': [
        'error',
        {
            prefer: {
                arg: 'param',
                argument: 'param',
                class: 'class',
                constructor: 'constructor',
                // "return": "returns",
                virtual: 'abstract'
            },
            preferType: {
                // "boolean": "Boolean",
                // "number": "Number",
                // "object": "Object",
                // "string": "String"
            }, // 类型格式
            matchDescription: '.+', // 必须写描述
            requireReturn: false, // 没有返回值可以不用写@return
            requireReturnType: true, // 必须写返回类型
            requireReturnDescription: false, // 必须写返回描述
            requireParamDescription: true
        }
    ],
    semi: ['error', 'always'],
    indent: [
        2,
        4,
        {
            SwitchCase: 1,
            VariableDeclarator: 1,
            MemberExpression: 1
        }
    ],
    'react/jsx-indent': [2, 4],
    'react/jsx-indent-props': [2, 4],
    'react/prop-types': 0,
    'comma-dangle': [
        'error',
        {
            arrays: 'never',
            objects: 'never',
            imports: 'never',
            exports: 'never',
            functions: 'ignore'
        }
    ],
    'eol-last': 0,
    'space-before-function-paren': 0,
    'one-var': 0,
    eqeqeq: 0,
    'space-before-blocks': 2,
    'max-len': [2, 140],
    'max-lines': [2, 300],
    'no-new': 0,
    'no-extra-bind': 2,
    'no-inner-declarations': [2, 'functions'],
    'no-shadow': [2, { allow: ['resolve', 'reject'] }],
    // 'no-undef': [2, { typeof: false }],
    'no-unreachable': 2,
    'no-unused-vars': [2, { vars: 'all', args: 'after-used', argsIgnorePattern: '^reject' }],
    'no-useless-call': 2,
    'no-var': 2,
    'no-with': 2,
    'consistent-this': [2, '_that'],
    curly: [2, 'all'],
    'max-depth': [2, 4],
    'max-nested-callbacks': [2, 3],
    'max-params': [2, 5],
    'max-statements': [2, 30],
    'new-parens': 2,
    radix: 2,
    'space-infix-ops': 2,
    strict: 2,
    'use-isnan': 2,
    'valid-typeof': 2,
    'wrap-iife': [2, 'inside'],
    yoda: [2, 'never'],
    'no-dupe-class-members': 2,
    'arrow-parens': 2,
    quotes: [2, 'single'],
    'prettier/prettier': [
        0,
        {
            tabWidth: 4,
            semi: true,
            singleQuote: true,
            arrowParens: 'always',
            htmlWhitespaceSensitivity: 'ignore',
            jsxBracketSameLine: true,
            trailingComma: 'none',
            bracketSpacing: true,
            wrap_attributes: 'force-aligned'
        }
    ],
    'no-useless-escape': 0,
    'comma-spacing': 2,
    'func-names': 0,
    'react/function-component-definition': [2, { namedComponents: ['function-expression', 'arrow-function'] }],
    'jsx-a11y/click-events-have-key-events': 0,
    'react/jsx-props-no-spreading': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'object-curly-newline': ['error', { ObjectPattern: { multiline: true, minProperties: 5 } }],
    'no-param-reassign': 0, // 函数参数不能覆盖值
    'prefer-destructuring': 0, // 必须使用解构
    'no-underscore-dangle': 0, // 悬挂下划线
    'class-methods-use-this': 0, // 方法必须有使用this
    'react/state-in-constructor': 0, // 定义state
    'react/no-unused-state': 0, // 设置state值
    'react/no-array-index-key': 0, // 数据遍历时需要加key 值，唯一标识
    'react/require-default-props': 0, //props 方法非必传
    'react/destructuring-assignment': 0, // 解构
    'react/no-unused-class-component-methods': 0, // class组件只能定义方法
    'react/display-name': 0, // 取消默认导出显示名称定义,
    'import/prefer-default-export': 0,
    'no-use-before-define': [2, { functions: false }],
    'linebreak-style': ['error', 'unix'] // 换行风格使用LF
};

module.exports = {
    root: true,
    extends: [
        'airbnb',
        'plugin:react/recommended',
        'eslint:recommended',
        'plugin:json/recommended',
        'plugin:react/jsx-runtime'
    ],
    parser: '@babel/eslint-parser',
    parserOptions: {
        requireConfigFile: false,
        babelOptions: {
            presets: ['@babel/preset-react']
        }
    },
    plugins: ['import', 'react', 'react-hooks', 'json'],
    env: {
        browser: true,
        node: true,
        es6: true,
        mocha: true,
        jest: true,
        jasmine: true
    },
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.jsx']
            }
        },
        'import/external-module-folders': ['node_modules', 'node_modules/@types'],
        polyfills: ['fetch', 'Promise', 'URL', 'object-assign']
    },
    rules: rules,
    overrides: [
        {
            files: ['src/**/*.ts', 'src/**/*.tsx'],
            parser: '@typescript-eslint/parser',
            parserOptions: {
                tsconfigRootDir: './',
                project: './tsconfig.json',
                extraFileExtensions: ['.less', '.css']
            },
            extends: ['plugin:@typescript-eslint/eslint-recommended', 'plugin:@typescript-eslint/recommended'],
            plugins: ['@typescript-eslint'],
            settings: {
                'import/resolver': {
                    node: {
                        extensions: ['.ts', '.tsx', '.d.ts']
                    }
                },
                'import/parsers': {
                    '@typescript-eslint/parser': ['.ts', '.tsx', '.d.ts']
                },
                'import/extensions': ['.ts', '.tsx', '.d.ts']
            },
            rules: Object.assign({}, rules, {
                'no-shadow': 0,
                '@typescript-eslint/no-shadow': [2],
                '@typescript-eslint/no-unused-vars': 2,
                '@typescript-eslint/no-this-alias': 0,
                '@typescript-eslint/interface-name-prefix': 0,
                '@typescript-eslint/ban-types': 0,
                '@typescript-eslint/naming-convention': [
                    'error',
                    {
                        selector: 'variable',
                        format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
                        leadingUnderscore: 'allow',
                        filter: {
                            match: false,
                            regex: '^_'
                        }
                    },
                    {
                        selector: 'variable',
                        types: ['array'],
                        format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
                        custom: {
                            match: true,
                            regex: '[s|List|S|LIST|Arr|ARR]$'
                        },
                        filter: {
                            match: false,
                            regex: '^_'
                        }
                    },
                    {
                        selector: 'interface',
                        format: ['PascalCase'],
                        custom: {
                            regex: '^I[A-Z]',
                            match: true
                        }
                    },
                    {
                        selector: 'class',
                        format: ['PascalCase'],
                        custom: {
                            regex: '^[A-Z][a-z]',
                            match: true
                        }
                    },
                    {
                        selector: 'function',
                        format: ['camelCase', 'PascalCase'],
                        custom: {
                            match: true,
                            regex: '^([a-z]|ReactComponent)'
                        },
                        filter: {
                            match: false,
                            regex: '^_'
                        }
                    }
                ],
                '@typescript-eslint/no-explicit-any': 0,
                '@typescript-eslint/explicit-function-return-type': 0,
                '@typescript-eslint/no-inferrable-types': 0,
                '@typescript-eslint/consistent-type-assertions': 0,
                '@typescript-eslint/consistent-type-imports': 0,
                '@typescript-eslint/method-signature-style': 0, //props 方法非必传
                'no-plusplus': 0, // 不能使用++,
                '@typescript-eslint/explicit-module-boundary-types': 0
            })
        }
    ]
};
