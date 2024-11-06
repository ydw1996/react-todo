import TodoItem from './TodoItem';
import '../assets/style/TodoList.css';

const TodoList = ({
  todos,
  onToggleCheck,
  onTogglePopup,
  onSelectTodo,
}) => {
  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggleCheck={onToggleCheck}
          onTogglePopup={onTogglePopup}
          onSelectTodo={onSelectTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
