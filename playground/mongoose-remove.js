const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });
//
// Todo.findOneAndRemove({_id: "589aacf9f4072c2d893a6e80"}).then(() => {
//
// });

Todo.findByIdAndRemove("589aacf9f4072c2d893a6e80").then((todo) => {
console.log(todo);
})
