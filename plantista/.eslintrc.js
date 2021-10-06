
module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        'plugin:vue/recommended',
        '@vue/airbnb'
    ],
    globals: {
        globalThis: false
    },
    rules: {
        'vue/html-indent': ['error', 4, {
            attribute: 1,
            baseIndent: 1,
            closeBracket: 0,
            alignAttributesVertically: true,
            ignores: []
        }],
        'vue/max-attributes-per-line': ['error', {
            singleline: 2,
            multiline: {
                max: 2,
                allowFirstLine: false
            }
        }],
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        indent: ['error', 4, {SwitchCase: 1}],
        'object-curly-spacing': [2, 'never'],
        'no-underscore-dangle': ['warn', {allowAfterThis: true}],
        'lines-between-class-members': ['error', 'always'],
        'brace-style': ['error', 'allman', {allowSingleLine: true}],
        'no-multiple-empty-lines': ['error', {max: 1}],
        'padded-blocks': ['error', 'never'],
        'class-methods-use-this': ['warn'],
        'comma-dangle': ['error', 'never'],
        'prefer-template': ['warn'],
        'space-before-function-paren': ['error', 'never'],
        'object-curly-newline': ['error', {
            ObjectExpression: {minProperties: 6, multiline: true, consistent: true},
            ObjectPattern: {minProperties: 6, multiline: true, consistent: true},
            ImportDeclaration: {minProperties: 6, multiline: true, consistent: true},
            ExportDeclaration: {minProperties: 6, multiline: true, consistent: true}
        }],
        'no-use-before-define': ['error', {functions: true, classes: true, variables: false}],
        'max-len': ['error', {
            code: 100,
            tabWidth: 4,
            comments: 130,
            ignoreUrls: true,
            ignoreComments: false,
            ignoreRegExpLiterals: true,
            ignoreStrings: false,
            ignoreTemplateLiterals: false
        }],
        'no-restricted-syntax': [
            'error',
            {
                selector: 'LabeledStatement',
                message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.'
            },
            {
                selector: 'WithStatement',
                message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.'
            }
        ],
        'arrow-parens': ['error', 'as-needed', {requireForBlockBody: true}],
        'operator-linebreak': ['error', 'after'],
        'guard-for-in': 0,
        'global-require': 0,
        'no-prototype-builtins': 0,
        'no-continue': 0,
        'no-param-reassign': 0,
        'no-plusplus': 0,
        'implicit-arrow-linebreak': 0,
        'func-names': 0,
        'no-new': 0,
        'import/no-extraneous-dependencies': 0,
        'import/no-unresolved': 0,
        'import/no-cycle': [2, {maxDepth: 2}]
    },
    parserOptions: {
        parser: 'babel-eslint'
    }
};
