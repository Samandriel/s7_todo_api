var mongoose = require('mongoose');

// Model is the way to organize data in Mongoose
var Todo = mongoose.model('Todo', {
text: {
  type: String, // This will wrap any input into string
  required: true,
  minlenght: 3,
  trim: true // Will remove leading and trailling spaces
},
completed: {
  type: Boolean,
  default: false
},
completedAt: {
  type: Number,
  default: null
}
});

module.exports = {Todo};
