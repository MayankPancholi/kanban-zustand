import { useState } from "react";
import styles from "./TaskInputModal.module.css";
import { useTaskListStore } from "../store";
import { ImCancelCircle } from "react-icons/im";
import { FaPlus } from "react-icons/fa";

export default function TaskInputModal({ onClose, status }) {
  const [text, setText] = useState("");
  const addTask = useTaskListStore((store) => store.addTask);

  return (
    <div className={styles.modal}>
      <form
        className={styles.modalForm}
        onSubmit={(e) => {
          e.preventDefault();
          addTask(text, status);
          setText("");
          onClose();
        }}
      >
        <div className={styles.modalInputContainer}>
          <input
            type="text"
            placeholder="Add Task"
            value={text}
            onInput={(e) => setText(e.currentTarget.value)}
            autoFocus
            required
          />
        </div>
        <div className={styles.btnContainer}>
          <button className={styles.cancelBtn} onClick={onClose}>
            <div className={styles.cancelIconContainer}>
              <ImCancelCircle />
            </div>
            <div>Cancel</div>
          </button>
          <button className={styles.addBtn} type="submit">
            <div className={styles.addIconContainer}>
              <FaPlus />
            </div>
            <div>Add</div>
          </button>
        </div>
      </form>
    </div>
  );
}
