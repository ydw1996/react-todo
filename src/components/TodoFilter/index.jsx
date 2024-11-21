import './TodoFilter.css';

const TodoFilter = ({ filter, setFilter, remainingTodos }) => {
    return (
        <div className="todo-filter">
            <div className="remaining-todos">Todo: {remainingTodos}</div>
            <div className="filter">
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
        </div>
    );
};
export default TodoFilter;
