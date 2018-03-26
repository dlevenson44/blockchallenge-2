'use strict';

// require config file
var db = require('../db/config');

// initiate model object
var Dash = {};

// find all entries
Dash.findAll = function () {
    return db.query('SELECT * FROM tracked_data');
};

// find most recent entry
Dash.findRecent = function () {
    return db.query('SELECT * FROM tracked_data ORDER BY id DESC LIMIT 1');
};

module.exports = Dash;