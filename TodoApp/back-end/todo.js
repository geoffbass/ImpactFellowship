let todos = [];
let todoIdCounter = 1;

const todoFuncs = {
    getTodos: () => {
        return todos;
    },
    getTodoByName: (name) => {
        return todos.filter(todo => todo.name === name);
    },
    getTodoById: (id) => {
        return todos.filter(todo => todo.id === id);
    },
    getTodosByStatus: (status) => {
        return todos.filter(todo => todo.complete === status);
    },
    addTodo: (name, details, dueDate, complete = false) => {
        todos.push({
            id: todoIdCounter++,
            name,
            details,
            dueDate,
            complete
        });
    },
    setTodoStatus: (todoId, status = true) => {
        todos.forEach(todo => {
            if(todo.id === todoId){
                todos[todoId].complete = status;
            }
        })
    },
    removeTodo: (todoId) => {
        todos = todos.filter(todo => todo.id !== todoId);
    },
    setDefaultTodos: () => {
        todos.push({
            id: todoIdCounter++,
            name: 'Study',
            details: 'Study for Math Final!',
            dueDate: '012419',
            complete: false
        }, {
            id: todoIdCounter++,
            name: 'Learn to Cook',
            details: 'Attend Class for Lessons',
            dueDate: '012519',
            complete: false
        }, {
            id: todoIdCounter++,
            name: 'Be Awesome',
            details: 'Already Sooo Coold B-D',
            dueDate: '010119',
            complete: true
        })
    }
};

module.exports = todoFuncs;