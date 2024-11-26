import { BsFillPlusCircleFill } from 'react-icons/bs';

import styles from './App.module.css';
import { TodoAlert, TodoBoard, TodoFilter, TodoList, TodoPopup } from './components';
import { useAlertStore, useTodoStore } from './store';

const App = () => {
  const {
    isPopupOpen,
    setSelectedTodo,
    togglePopup,
    deleteAllTodos
  } = useTodoStore();

  const { isAlertOpen, type, message, onConfirm, onCancel, deleteAllAlert } = useAlertStore();

    const openAddTodoPopup = () => {
      setSelectedTodo(null);
      togglePopup();
    };
    
  return (
    <div className={styles.todoApp}>
      <TodoBoard>
        <TodoFilter />
        <TodoList />
        <BsFillPlusCircleFill className={styles.todoAddBtn} onClick={openAddTodoPopup} />
        <button className={styles.allDeleteBtn} onClick={() => deleteAllAlert(deleteAllTodos)}>
          모두 삭제
        </button>
        {isPopupOpen && <TodoPopup />}
        <TodoAlert
         isVisible={isAlertOpen}
         type={type}
         alertMessage={message}
         onConfirm={onConfirm}
         onCancel={onCancel}
       />
      </TodoBoard>
    </div>
  );
};

export default App;
