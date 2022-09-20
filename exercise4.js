fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
    const ctAccumulator = json.reduce( (acc, json) => {
        if(json.completed == true) {
            acc += 1
        }
        return acc
    }, 0)
   console.log(`The number of completed todos =  ${ctAccumulator}`);
  })
  .catch(function(err) { 
    console.log(err);
  });