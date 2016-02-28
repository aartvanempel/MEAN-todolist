var Todo = require('./model/todo-model')

module.exports = function(app) {

  app.get('/todos', function(req, res) {
    Todo.find(function(err, todos) {
      res.json(todos);
    });
  });

  app.post('/todos', function(req, res) {
    Todo.create({
      text : req.body.text
    }, function(err, todo) {
      Todo.find(function(err, todos) {
        res.json(todos);
      });
    });
  });

  app.delete('/todos/:todo_id', function(req, res) {
    Todo.remove({
      _id : req.params.todo_id
    },
    function(err, todo) {
      if (err) res.send(err);
      Todo.find(function(err, todos) {
        if (err) res.send(err);
        res.json(todos);
      });
    });
  });

  app.put('/todos_check/:todo_id', function(req, res) {
    Todo.findById(req.params.todo_id, function(err, todo) {
      todo.check = !todo.check;
      todo.save(function(err) {
        if (err) throw err;
        console.log('Todo CHECK successfully updated!');
      });
    });
  });

  app.put('/todos/:todo_id', function(req, res) {
    console.log("body text: " + req.body.textUpdate);
    Todo.findById(req.params.todo_id, function(err, todo) {
      todo.text = req.body.textUpdate
      todo.save(function(err) {
        if (err) throw err;
        console.log('Todo TEXT successfully updated!');
      });
    });
    Todo.find(function(err, todos) {
      res.json(todos);
    });
  });

};
