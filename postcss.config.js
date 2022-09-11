module.exports = {
	plugins: {
		'postcss-fontpath': { checkFiles: true, ie8Fix: true },
		'tailwindcss': './tailwind.config.js',
		'autoprefixer': {
			"overrideBrowserslist": [
				">1%",
				"last 4 versions",
				"Firefox ESR",
				"not ie < 9"
			],
			"flexbox": "no-2009"
		}
	}
};
