import { useContext } from "react";
import { TaskContext } from "../context/ContextTask";
import { Task } from "./Task";

export const TaskList = () => {
  const { tasks } = useContext(TaskContext);

  if (tasks.length === 0) return <h1>No hay Tareas!!!</h1>;

  return (
    <div className="grid grid-cols-4 gap-2">
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};
