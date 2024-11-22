import { useState, useCallback, useEffect } from 'react';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import { v4 as uuidv4 } from 'uuid';

import styles from './App.module.css';
import { TodoAlert, TodoBoard, TodoFilter, TodoList, TodoPopup } from './components';

const App = () => {
    const [todos, setTodos] = useState([
        {
            id: uuidv4(),
            text: '달력 기능 추가 하기 🎨',
            checked: false,
        },
        {
            id: uuidv4(),
            text: '컴포넌트, 코드 정리 📓',
            checked: true,
        },
        {
            id: uuidv4(),
            text: '자스몽 스터디 Todo리스트 생성 💪',
            checked: true,
        },
    ]);
    const [selectedTodo, setSelectedTodo] = useState(null);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [isDeleteAll, setIsDeleteAll] = useState(false);
    const [filter, setFilter] = useState('all');
    const [filtersArray, setFiltersArray] = useState(todos);

    const remainingTodos = todos.filter((todo) => !todo.checked).length;

    // Todo 필터
    useEffect(() => {
        if (filter === 'all') {
            setFiltersArray(todos);
        } else if (filter === 'done') {
            setFiltersArray(todos.filter((todo) => todo.checked));
        } else if (filter === 'undone') {
            setFiltersArray(todos.filter((todo) => !todo.checked));
        }
    }, [filter, todos]);

    // Popup 함수
    const togglePopup = () => {
        if (selectedTodo) {
            setSelectedTodo(null);
        }
        setIsPopupOpen((prev) => !prev);
    };

    const toggleDeletePopup = () => {
        setIsDeleteAll((prev) => !prev);
    };

    // Todo CRUD 함수
    const addTodo = useCallback((text) => {
        const newTodo = {
            id: uuidv4(),
            text,
            checked: false,
        };
        setTodos((prevTodos) => [newTodo, ...prevTodos]);
    }, []);

    const editTodo = (id, text) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) => (todo.id === id ? { ...todo, text } : todo))
        );
    };

    const removeTodo = (id) => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
        togglePopup();
    };

    // Todo 체크 상태 토글 함수
    const toggleTodoCheck = (id) => {
        setTodos((prevTodos) => {
            const targetTodo = prevTodos.find((todo) => todo.id === id);
            if (!targetTodo) return prevTodos;

            const updatedTodo = {
                ...targetTodo,
                checked: !targetTodo.checked,
            };

            const remainingTodos = prevTodos.filter((todo) => todo.id !== id);

            const updateTodosList = updatedTodo.checked
                ? [...remainingTodos, updatedTodo]
                : [updatedTodo, ...remainingTodos];

            return updateTodosList;
        });
    };

    const deleteAllTodos = () => {
        setTodos([]);
    };

    return (
        <div className={styles.todoApp}>
            <TodoBoard>
                <TodoFilter filter={filter} setFilter={setFilter} remainingTodos={remainingTodos} />
                <TodoList
                    todos={filter === 'all' ? todos : filtersArray}
                    onToggleCheck={toggleTodoCheck}
                    onTogglePopup={togglePopup}
                    onSelectTodo={setSelectedTodo}
                />
                <BsFillPlusCircleFill className={styles.todoAddBtn} onClick={togglePopup} />
                <button className={styles.allDeleteBtn} onClick={toggleDeletePopup}>
                    모두 삭제
                </button>
                {isPopupOpen && (
                    <TodoPopup
                        selectedTodo={selectedTodo}
                        onClosePopup={togglePopup}
                        onAddTodo={addTodo}
                        onRemoveTodo={removeTodo}
                        onEditTodo={editTodo}
                        isDeletePopup={false}
                    />
                )}
                {isDeleteAll && (
                    <TodoAlert
                        onConfirm={() => {
                            deleteAllTodos();
                            toggleDeletePopup();
                        }}
                        onCancel={toggleDeletePopup}
                    />
                )}
            </TodoBoard>
        </div>
    );
};

export default App;
