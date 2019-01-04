# TodoApp Project for Impact Fellowship

## Description
This project is to build a full-stack todo app that mimics the use of data storage vis a ```todo.js``` utility file. The project is broken into two parts.

### Part 1
You will be setting up an express server and an appropriate api for accessing the todos.

Routes: 
```GET /``` This route should serve up an index.html file.
```GET /todos``` This route should serve up all of the todos currently in storage in the todo file.
```POST /todos``` This route will add a todo via the todo.js util file to the list of todos. Expect the req.body to include name, description, dueDate, status (optional).
```GET /todos/:id``` This route should serve up the todo where the id matches this todo.
```PUT /todos/:id``` This route should expect a body that had a property called "complete" and will set the todo item with that id.
```DELETE /todos/:id``` This route should delete the todo with the included id.


### Part 2
You will be setting up a react app that will be served when hitting the home route with components for creating, reading, updating, and deleting todo data through an interface.