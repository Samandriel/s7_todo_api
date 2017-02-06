const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID("5896a206f3fbaf269ad11c50")
  // }, {
  //   $set: {
  //     completed: false
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((updatedItem) => {
  //   console.log(updatedItem);
  // });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID("5895f8087f594f5ac76c158c")
  }, {
    $set: {
      name: "Sam"
    },
    $inc: {
      age: 2
    }
  }, {
    returnOriginal: false
  }).then((updatedItem) => {
    console.log(updatedItem);
  });



  //db.close();
});
