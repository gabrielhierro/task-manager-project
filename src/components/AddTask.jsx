import { useState } from "react";
import Input from "./Input";

function AddTask({ onAddTaskClick }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <Input
        type="text"
        placeholder="New Task"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <Input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <button
        onClick={() => {
          if (!title.trim() || !description.trim()) {
            return alert("Please fill in all fields");
          }
          onAddTaskClick(title, description);
          setTitle("");
          setDescription("");
        }}
        className="bg-slate-700 px-4 py-2 rounded-md text-slate-50 font-medium"
      >
        Add Task
      </button>
    </div>
  );
}

export default AddTask;
