module.exports = {
	'plugins': [
		'jsdoc'
	],
	'parser': 'babel-eslint',
	'parserOptions': {
		'ecmaVersion': 2021
	},
	'rules': {
		'jsdoc/check-line-alignment': ['error', 'always'],
	}
};