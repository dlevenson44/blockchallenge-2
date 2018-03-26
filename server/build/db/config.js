'use strict';

var options = {
	query: function query(e) {
		console.log(e.query);
	}
};

var pgp = require('pg-promise')(options);

function setDatabase() {
	if (process.env.NODE_ENV === 'development' || !process.env.NODE_ENV) {
		return pgp({
			database: 'cryptotracker_1',
			port: 5432,
			host: 'localhost'
		});
	} else if (process.env.NODE_ENV === 'production') {
		return pgp(process.env.DATABASE_URL);
	}
}

var db = setDatabase();

module.exports = db;