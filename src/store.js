import { create } from "zustand";
import { persist } from "zustand/middleware";
// import { initialTaskList } from "./constants";

function taskListStore(set) {
  return {
    taskList: [],
    draggedTaskId: "",
    addTask: (title, status) =>
      set((store) => ({
        taskList: [
          ...store.taskList,
          {
            title: title,
            status: status,
            id: window.crypto.randomUUID(),
            timestamp: Date.now(),
          },
        ],
      })),

    deleteTask: (id) =>
      set((store) => ({
        taskList: store.taskList.filter((task) => task.id !== id),
      })),

    setDraggedTaskId: (id) => set({ draggedTaskId: id }),

    moveTask: (id, status) =>
      set((store) => ({
        taskList: store.taskList.map((task) =>
          task.id === id ? { ...task, status: status } : task
        ),
      })),
  };
}

export const useTaskListStore = create(
  persist(taskListStore, {
    name: "taskList",
    partialize: (store) => ({ taskList: store.taskList }),
  })
);
