import '../assets/style/TodoFilter.css';

const TodoFilter = ({ filter, setFilter }) => {
  return (
    <div className="todo-filter">
      <select
        value={filter}
        onChange={(e) => {
          setFilter(e.target.value);
        }}
      >
        <option value="all">All</option>
        <option value="done">Done</option>
        <option value="undone">Not Done</option>
      </select>
    </div>
  );
};
export default TodoFilter;
