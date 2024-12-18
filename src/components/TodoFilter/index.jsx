import './TodoFilter.css';
import useTodoStore from '../../store/useTodoStore';

const TodoFilter = () => {
  const { filter, setFilter, getTodosForCurrentDate } = useTodoStore();

  return (
    <div className="todo-filter">
      <div className="remaining-todos">
        Todo: {getTodosForCurrentDate().length}
      </div>
      <div className="filter">
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="all">All</option>
          <option value="done">Done</option>
          <option value="undone">Not Done</option>
        </select>
      </div>
    </div>
  );
};

export default TodoFilter;
