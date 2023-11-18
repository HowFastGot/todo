const path = require('path');

const isProduction = process.env.NODE_ENV === 'production';

const config = {
	resolve: {
		alias: {
			'@src': path.resolve(__dirname, 'src'),
			'@ownTypes': path.resolve(__dirname, 'src', 'types'),
			'@components': path.resolve(__dirname, 'src', 'components'),
		},
		extensions: ['.tsx', '.ts', '.js', '.jsx'],
	},
};

module.exports = () => {
	if (isProduction) {
		config.mode = 'production';
	} else {
		config.mode = 'development';
	}
	return config;
};
