import { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";
function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleChangeDesc = (e) => {
    setDescription(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({ title, description });
    setTitle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4">
        <h1 className="text-2xl font-bold text-white mb-3">Crea tu tarea</h1>
        <input
          onChange={handleChangeTitle}
          placeholder="Escribre tu tarea"
          value={title}
          className="bg-slate-300 p-3 w-full mb-2"
          autoFocus
          />
        <textarea
          onChange={handleChangeDesc}
          placeholder="Escribe descripción de la tarea"
          value={description}
          className="bg-slate-300 p-3 w-full mb-2"
        ></textarea>
        <button className="bg-indigo-500 px-3 py-1 text-white rounded-sm">Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;
