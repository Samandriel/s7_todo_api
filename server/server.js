// Library import
var express = require('express');
var bodyParser = require('body-parser');
var {ObjectID} = require('mongodb');

// Local import
var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

// Config middleware
app.use(bodyParser.json());

// Routing
app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text // body-parser middleware
  });

  todo.save().then((doc) => {
    res.send(doc); // Send respond to user
  }, (e) => {
    res.status(400).send(e);
  });
});

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos});
  }, (e) => {
    res.status(400).send(e);
  })
})

app.get('/todos/:id', (req, res) => {
  var id = req.params.id;

  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  Todo.findById(id).then((todo) => {
    if (!todo) {
      return res.status(404).send();
    }

    // Send as an object attach into todo property
    res.send({todo})
  }).catch((e) => {
    res.status(404).send();
  });
});

app.delete('/todos/:id', (req, res) => {
  var id = req.params.id;

  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  Todo.findByIdAndRemove(id).then((todo) => {
    if (!todo) {
      return res.status(404).send();
    }

    res.send({todo});
  }).catch((e) => done(e));
});


app.listen(3000, () => {
  console.log('Server Started on port 3000');
});

module.exports = {app};
