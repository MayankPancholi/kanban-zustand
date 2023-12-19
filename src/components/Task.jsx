import { useTaskListStore } from "../store";
import styles from "./Task.module.css";
import { FaTrash } from "react-icons/fa";

export default function Task({ id }) {
  const task = useTaskListStore((store) =>
    store.taskList.find((task) => task.id === id)
  );

  const setDraggedTaskId = useTaskListStore((store) => store.setDraggedTaskId);

  const deleteTask = useTaskListStore((store) => store.deleteTask);
  return (
    <div
      className={styles.task}
      draggable
      onDragStart={() => setDraggedTaskId(id)}
    >
      <p>{task.title}</p>
      <div className={styles.bottomWrapper}>
        <div
          onClick={() => deleteTask(task.id)}
          className={styles.trashIconContainer}
        >
          <FaTrash />
        </div>
        <div
          className={`${styles.status} ${
            task.status === "DONE"
              ? styles.done
              : task.status === "PLANNED"
              ? styles.planned
              : styles.ongoing
          }`}
        >
          {task.status}
        </div>
      </div>
    </div>
  );
}
