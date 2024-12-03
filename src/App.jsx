import classNames from "classnames";
import { useState } from "react";
import { BsFillPlusCircleFill } from 'react-icons/bs';
import { TbSnowflake, TbSnowflakeOff } from "react-icons/tb";
import Snowfall from 'react-snowfall';

import styles from './App.module.css';
import {
  TodoAlert,
  TodoBoard,
  TodoCalender,
  TodoFilter,
  TodoList,
  TodoPopup,
} from './components';
import { useAlertStore, useTodoStore } from './store';

const App = () => {
  const { isPopupOpen, setSelectedTodo, togglePopup, deleteAllTodos } =
    useTodoStore();

  const { isAlertOpen, type, message, onConfirm, onCancel, deleteAllAlert } =
    useAlertStore();

  const [isSnowing, setIsSnowing] = useState(true);

  const openAddTodoPopup = () => {
    setSelectedTodo(null);
    togglePopup();
  };

   const toggleSnow = () => {
     setIsSnowing((prev) => !prev); 
   };

  return (
    <div className={styles.todoApp}>
      {isSnowing && <Snowfall color="white" snowflakeCount={200} />}
      <TodoBoard>
        <div
          className={styles.snowToggle}
          onClick={toggleSnow}
        >
          {isSnowing ? (
            <TbSnowflake size={24} />
          ) : (
            <TbSnowflakeOff size={24}  />
          )}
        </div>
        <TodoFilter />
        <div className={styles.todoBox}>
          <TodoCalender />
          <TodoList />
        </div>
        <BsFillPlusCircleFill
          className={styles.todoAddBtn}
          onClick={openAddTodoPopup}
        />
        <button
          className={classNames(styles.allDeleteBtn, styles.outlineBtn)}
          onClick={() => deleteAllAlert(deleteAllTodos)}
        >
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
