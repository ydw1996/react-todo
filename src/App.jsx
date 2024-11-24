import { BsFillPlusCircleFill } from 'react-icons/bs';

import styles from './App.module.css';
import { TodoAlert, TodoBoard, TodoFilter, TodoList, TodoPopup } from './components';
import useTodoStore from './store/todoStore';

const App = () => {
  const {
    isPopupOpen,
    isDeleteAll,
    togglePopup,
    toggleDeletePopup,
    deleteAllTodos,
  } = useTodoStore();

  return (
    <div className={styles.todoApp}>
      <TodoBoard>
        <TodoFilter/>
        <TodoList/>
        <BsFillPlusCircleFill className={styles.todoAddBtn} onClick={togglePopup} />
        <button className={styles.allDeleteBtn} onClick={toggleDeletePopup}>
          모두 삭제
        </button>
        {isPopupOpen && <TodoPopup />}
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
