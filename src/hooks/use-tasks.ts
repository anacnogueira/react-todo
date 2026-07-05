import useLocalStorage from "use-local-storage";
import { type Task, TASKS_KEY, TaskState } from "../models/task";

export default function useTasks() {
  const hookLocalStorage = (useLocalStorage as any).default || useLocalStorage;
  const [tasks] = hookLocalStorage<Task[]>(TASKS_KEY, []);

  return {
    tasks,
    createdTasksCount: tasks.filter((task) =>task.state === TaskState.Created).length,
    concludedTasksCount: tasks.filter((task) => task.concluded).length,
  };
}