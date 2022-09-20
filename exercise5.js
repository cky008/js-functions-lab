fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
    const todoUncompletedAccumulator = json.reduce( (arr, todo) => {
        todo.completed
        ? arr
        : arr.push({userID: todo.userId, title: todo.title})
        return arr
    }, [])
   console.log(todoUncompletedAccumulator);
  })
  .catch(function(err) { 
    console.log(err);
  });