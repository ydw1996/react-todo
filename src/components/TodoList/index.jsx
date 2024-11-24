import { TodoItem } from '../';
import './TodoList.css';
import useTodoStore from '../../store/todoStore';

const TodoList = () => {
  const { todos } = useTodoStore(); 

  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
