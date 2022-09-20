fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
    const todoCompletedAccumulator = json.reduce((acc, todo)=> {
        if(todo.completed) { 
            acc[todo.userId] 
            ? acc[todo.userId] ++ 
            : acc[todo.userId] = 1
        }
        return acc; 
    }, {});
    console.log(todoCompletedAccumulator);
  })
  .catch(function(err) { 
    console.log(err);
  });