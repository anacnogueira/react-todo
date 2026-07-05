import useLocalStorage from "use-local-storage";
import { type Task, TASKS_KEY, TaskState } from "../models/task";
import React from "react";
import { delay } from "../helpers/utils";

export default function useTasks() {
  const hookLocalStorage = (useLocalStorage as any).default || useLocalStorage;
  const [tasksData] = hookLocalStorage<Task[]>(TASKS_KEY, []);
  const [tasks, setTasks] = React.useState<Task[]>([]);
  const [isLoadingTasks, setIsLoadingTasks] = React.useState(true);

  async function fetchTasks() {
    if (isLoadingTasks) {
      await delay(2000);
      setIsLoadingTasks(false);
    }

    setTasks(tasksData);    
  }

  React.useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchTasks();

  }, [tasksData])

  return {
    tasks,
    createdTasksCount: tasks.filter((task) =>task.state === TaskState.Created).length,
    concludedTasksCount: tasks.filter((task) => task.concluded).length,
    isLoadingTasks
  };
}