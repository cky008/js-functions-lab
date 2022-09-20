fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
    const uncomplete = json.filter(todos => todos.completed == false);
    const uncompleted = uncomplete.map( uncomplete => {
        return {
          userID: uncomplete.userId,
          title: uncomplete.title,
        };
      });
      console.log(uncompleted);
  })
  .catch(function(err) { 
    console.log(err);
  });