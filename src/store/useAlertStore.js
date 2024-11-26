import { create } from 'zustand';

const useAlertStore = create((set, get) => ({
    isAlertOpen: false,
    type: null,
    message: "",
    onConfirm: null,
    onCancel: null,
    
    // 공통 함수
    openAlert: ({ type, message, onConfirm, onCancel }) =>
      set({
        isAlertOpen: true,
        type,
        message,
        onConfirm,
        onCancel,
      }),
  
    closeAlert: () => 
        set({ 
            isAlertOpen: false, 
            type: null, 
            message: "", 
            onConfirm: null, 
            onCancel: null 
        }),
  
    
    // 기본 타입 Alert
    basicTypeAlert: ({ type, message, action }) =>
        get().openAlert({
          type,
          message,
          onConfirm: () => {
            action();
            get().closeAlert();
          },
          onCancel: get().closeAlert,
    }),
      
    deleteAllAlert: (action) =>
        get().basicTypeAlert({
          type: "delete",
          message: "정말 모두 삭제하시겠습니까?",
          action,
    }),
      
    confirmAlert: (action) =>
        get().basicTypeAlert({
          type: "confirm",
          message: "모두 확인 하셨습니까?",
          action,
    }),

}));

  export default useAlertStore;