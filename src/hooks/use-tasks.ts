import useLocalStorage from "use-local-storage";
import { type Task, TASKS_KEY } from "../models/task";

export default function useTasks() {
  const hookLocalStorage = (useLocalStorage as any).default || useLocalStorage;
  const [tasks] = hookLocalStorage<Task[]>(TASKS_KEY, []);

  return {
    tasks,
    tasksCount: tasks.length,
    concludedTasksCount: tasks.filter((task) => task.concluded).length,
  };
}