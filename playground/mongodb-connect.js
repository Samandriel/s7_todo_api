//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// We can use objectID from anywhere we like
var obj = new ObjectID();
console.log(obj);

// Destructuring is a way to make new variable from object property
// var user = {name: 'Sam', age: 29};
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    // If this return, code after this block won't be executed
    // Alternatively, we can use if..else statement instead.
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo', err);
  //   }
  //   // .ops will store the document object
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // })

  // db.collection('Users').insertOne({
  //   name: 'Harris',
  //   age: 29,
  //   location: 'Tokyo'
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to add user', err);
  //   }
  //   //console.log(JSON.stringify(result.ops, undefined, 2));
  //   console.log(result.ops[0]._id.getTimestamp());
  // });

  db.close();
});
