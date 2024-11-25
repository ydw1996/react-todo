import { TodoItem } from '../';
import './TodoList.css';
import useTodoStore from '../../store/todoStore';

const TodoList = () => {
  const { filteredTodos } = useTodoStore(); 

  return (
    <div className="todo-list">
      {filteredTodos().map(
        (todo ) => (
          <TodoItem key={todo.id} todo={todo} />
        )
      )}
    </div>
  );
};

export default TodoList;
