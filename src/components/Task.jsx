import { useContext } from "react";
import { TaskContext } from "../context/ContextTask";
import { AiOutlineCloseCircle } from "react-icons/ai";

export const Task = ({ task }) => {
  const { deleteTask } = useContext(TaskContext);

  return (
    <div className="bg-slate-600 text-yellow-50 p-3 rounded-md">
      <button onClick={() => deleteTask(task.id)} 
        className="text-2xl float-right text-red-300"
      >
        <AiOutlineCloseCircle />
      </button>
      <h1 className="text-xl font-bold capitalize">{task.title}</h1>
      <p className="text-gray-400 capitalize">{task.descripcion}</p>
    </div>
  );
};
