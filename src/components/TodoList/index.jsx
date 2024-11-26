import { TodoItem } from '../';
import './TodoList.css';
import useTodoStore from '../../store/useTodoStore';

const TodoList = () => {
    const getTodosForCurrentDate = useTodoStore(
      (state) => state.getTodosForCurrentDate
    );

    return (
      <div className="todo-list">
        {getTodosForCurrentDate().map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>
    );
};

export default TodoList;
