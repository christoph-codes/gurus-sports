module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'plugin:react/recommended',
		'airbnb',
		'plugin:react/jsx-runtime',
		'prettier',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react', '@typescript-eslint'],
	rules: {
		semi: ['error', 'always'],
		'react/jsx-filename-extension': [
			1,
			{ extensions: ['.js', '.ts', '.tsx'] },
		],
		'react/function-component-definition': [
			2,
			{ namedComponents: 'arrow-function' },
		],
		'react/react-in-jsx-scope': 'off',
		'react/jsx-props-no-spreading': 'off',
		'no-restricted-exports': 0,
		'react/jsx-no-useless-fragment': 0,
		'react/require-default-props': 0,
		'react/no-array-index-key': 0,
		'react/jsx-no-constructed-context-values': 0,
		'import/extensions': 0,
	},
	settings: {
		'import/resolver': {
			typescript: {}, // this loads <rootdir>/tsconfig.json to eslint
		},
	},
};
