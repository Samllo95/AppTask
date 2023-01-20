import { useContext, useState } from "react";
import { TaskContext } from "../context/ContextTask";

export const FormTask = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { createTask } = useContext(TaskContext);


  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      title,
      description,
    });
    setTitle("");
    setDescription("");
  };

  return (
    <div className="p-5 max-w-md mx-auto">
      <form onSubmit={handleSubmit}>
        <h1 className="text-slate-50 text-3xl font-bold pb-2">Crea tu Tarea</h1>
        <input
          className="w-full p-3 mb-2 rounded-sm"
          required
          type="text"
          placeholder="Titulo de la Tarea"
          value={title}
          autoFocus
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <br />
        <textarea
          className="w-full p-3 mb-2 rounded-sm"
          cols="30"
          rows="5"
          placeholder="Escribe una descripción para la tarea"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        ></textarea>
        <br />
        <button className="bg-indigo-400 p-2 rounded-sm">Agregar Tarea</button>
      </form>
    </div>
  );
};
