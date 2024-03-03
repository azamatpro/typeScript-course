import axios from 'axios';
const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
  Todo has an id of ${id},
  Todo has tile of ${title},
  Is Todo completed? ${completed === false ? 'Not completed' : 'Completed'}
  `);
};

axios.get(url).then((res) => {
  const todo = res.data as Todo;

  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;

  logTodo(id, title, completed);
});
