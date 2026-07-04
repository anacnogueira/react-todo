import useLocalStorage from 'use-local-storage';
import { TASKS_KEY, TaskState, type Task } from "../models/task";

export default function useTask() {
    const hookLocalStorage = (useLocalStorage as any).default || useLocalStorage;
    const [tasks, setTasks] = hookLocalStorage<Task[]>(TASKS_KEY, []);

    function prepareTask() {
        setTasks([...tasks, { 
            id: Math.random().toString(36).substring(2, 9),
            title: "",
            state: TaskState.Creating 
        }])
    }

    return {
        prepareTask
    }
}