import { useState } from "react";
import { useTaskListStore } from "../store";
import styles from "./Column.module.css";
import Task from "./Task";
import { useShallow } from "zustand/react/shallow";
import { createPortal } from "react-dom";
import TaskInputModal from "./TaskInputModal";
import { FaPlus } from "react-icons/fa";

export default function Column({ status }) {
  const [open, setOpen] = useState(false);
  const [drop, setDrop] = useState(false);
  const taskList = useTaskListStore(
    useShallow((store) =>
      store.taskList.filter((task) => task.status === status)
    )
  );
  const setDraggedTaskId = useTaskListStore((store) => store.setDraggedTaskId);
  const draggedTaskId = useTaskListStore((store) => store.draggedTaskId);
  const moveTask = useTaskListStore((store) => store.moveTask);
  return (
    <div
      className={`${styles.column} ${drop ? styles.drop : ""}`}
      onDragOver={(e) => {
        e.preventDefault();
        setDrop(true);
      }}
      onDragLeave={(e) => {
        e.preventDefault();
        setDrop(false);
      }}
      onDrop={() => {
        moveTask(draggedTaskId, status);
        setDraggedTaskId("");
        setDrop(false);
      }}
    >
      {open
        ? createPortal(
            <TaskInputModal onClose={() => setOpen(false)} status={status} />,
            document.getElementById("App")
          )
        : null}
      <div className={styles.headingWrapper}>
        <h2 className={styles.columnHeading}>{status}</h2>
        <button onClick={() => setOpen(true)}>
          <FaPlus className={styles.plusIcon} />
        </button>
      </div>
      {taskList
        .sort((a, b) => b.timestamp - a.timestamp)
        .map((task) => (
          <Task id={task.id} key={task.id} />
        ))}
    </div>
  );
}
