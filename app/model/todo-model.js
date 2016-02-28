var mongoose = require('mongoose');

// Todo
var todoSchema = new mongoose.Schema({
  text  : { type: String },
  check : { type: Boolean,  default: false }
});

// Export
module.exports = mongoose.model('Todo', todoSchema);
