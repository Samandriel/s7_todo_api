const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = "68995f42667ee6206c037dee";

// if(!ObjectID.isValid(id)) {
//   console.log('Invalid ID');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// })
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// })
//
// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('ID not found');
//   }
//   console.log('Todo', todo);
// }).catch((e) => console.log(e));

if(!ObjectID.isValid('5896ccf1f94dab45d9ee5358')) {
  console.log('Invalid ID');
}

User.findById('5896ccf1f94dab45d9ee5358').then((user) => {
  if (!user) {
    return console.log('User not found')
  }

  console.log('User', user.email);
}).catch((e) => console.log(e));
