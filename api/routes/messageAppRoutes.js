'use strict';
module.exports = function(app) {
  var messages = require('../controllers/messageAppController');

  // todoList Routes
  app.route('/messages')
    .get(messages.list_all_messages)
    .post(messages.create_a_message);


  app.route('/message/:messageId')
    .get(messages.read_a_message)
    .put(messages.update_a_message)
    .delete(messages.delete_a_message);
};