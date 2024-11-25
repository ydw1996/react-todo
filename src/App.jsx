import { BsFillPlusCircleFill } from 'react-icons/bs';

import styles from './App.module.css';
import { TodoAlert, TodoBoard, TodoFilter, TodoList, TodoPopup } from './components';
import useTodoStore from './store/todoStore';

const App = () => {
  const {
    isAlertOpen,
    alertType,
    isPopupOpen,
    setSelectedTodo,
    togglePopup,
    toggleAlert,
    openDeleteAlert,
    deleteAllTodos,
  } = useTodoStore();

    const openAddTodoPopup = () => {
      setSelectedTodo(null);
      togglePopup();
    };

    const deleteAllConfirm = () => {
      deleteAllTodos(); 
      toggleAlert(); 
    };
    
  return (
    <div className={styles.todoApp}>
      <TodoBoard>
        <TodoFilter />
        <TodoList />
        <BsFillPlusCircleFill className={styles.todoAddBtn} onClick={openAddTodoPopup} />
        <button className={styles.allDeleteBtn} onClick={openDeleteAlert}>
          모두 삭제
        </button>
        {isPopupOpen && <TodoPopup />}
        {isAlertOpen && alertType === 'deleteAll' && (
          <TodoAlert
            alertMessage="정말 모두 삭제하시겠습니까?"
            onConfirm={deleteAllConfirm}
            onCancel={toggleAlert}
          />
        )}
      </TodoBoard>
    </div>
  );
};

export default App;
