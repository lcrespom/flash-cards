// http://eslint.org/docs/user-guide/configuring

module.exports = {
	root: true,
	parser: 'babel-eslint',
	parserOptions: {
		sourceType: 'module'
	},
	env: {
		browser: true,
		es6: true
	},
	// https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
	// extends: 'standard',
	// required to lint *.vue files
	plugins: [
		'html'
	],
	// add your custom rules here
	'rules': {
		//--------------- Semantic style rules ---------------
		// allow async-await
		'generator-star-spacing': 0,
		// Allow "debugger" statements only during development
		'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
		// Disallow modifying variables that are declared using const
		'no-const-assign': 'error',
		// Disallow use of this/super before calling super() in constructors.
		'no-this-before-super': 'warn',
		// Disallow Undeclared Variables
		'no-undef': 'error',
		// Disallow assignment to native objects or read-only global variables
		'no-global-assign': 'error',
		// Disallow unreachable code after return, throw, continue, and break statements
		'no-unreachable': 'warn',
		// Disallow Unused Variables
		'no-unused-vars': ['warn', { args: 'none' }],
		// Verify calls of super() in constructors
		'constructor-super': 'warn',
		// Enforce comparing typeof expressions against valid strings
		'valid-typeof': 'warn',
		// Disallow Case Statement Fallthrough
		'no-fallthrough': 'warn',
		// Disallow variable redeclaration
		'no-redeclare': 'warn',
		// Disallow assignment operators in conditional statements
		'no-cond-assign': 'warn',
		// Disallow duplicate keys in object literals
		'no-dupe-keys': 'warn',
		// Disallow a duplicate case label
		'no-duplicate-case': 'warn',
		// Require calls to isNaN() when checking for NaN
		'use-isnan': 'warn',
		// Require let or const instead of var
		'no-var': 'warn',

		//--------------- Syntactic style rules ---------------
		// allow paren-less arrow functions
		'arrow-parens': 0,
		// Require semicolons
		semi: 'warn',
		// Disallow mixed spaces and tabs for indentation
		'no-mixed-spaces-and-tabs': 'warn',
		// Disallow trailing whitespace at the end of lines
		'no-trailing-spaces': 'warn',
		// Disallow multiple spaces
		'no-multi-spaces': 'warn',
		// Require spacing around infix operators
		'space-infix-ops': 'warn',
		// Enforce consistent indentation
		indent: ['warn', 'tab'],
		// Require Brace Style
		'brace-style': ['warn', 'stroustrup'],
		// Enforces spacing after commas
		'comma-spacing': 'warn',
		// Require newline at the end of files
		'eol-last': 'warn',
		// Enforce single quotes for strings
		quotes: ['warn', 'single']
	}
}
