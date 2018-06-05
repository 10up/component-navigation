const path = require('path');

module.exports = {
	host: '0.0.0.0',
	add: (app, middleware, options) => {
		middleware.webpack();
		middleware.content();
	}
}
