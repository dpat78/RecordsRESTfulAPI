'use strict';

module.exports = function(app) {
	var record = require('../controllers/recordController');

	// recordList Routes
	app.route('/records')
		.get(record.list_all_records)
		.post(record.create_a_record);

	app.route('/records/:recordId')
		.get(record.read_a_record)
		.put(record.update_a_record)
		.delete(record.delete_a_record);
};
