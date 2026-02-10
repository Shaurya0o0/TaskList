import { useEffect, useState } from "react";
import {
  getTasks,
  createTask,
  deleteTask,
  updateTask,
} from "../../services/task.service";

export default function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editingTitle, setEditingTitle] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [adding, setAdding] = useState(false);

  // 📥 Fetch tasks
  useEffect(() => {
    getTasks()
      .then((res) => setTasks(res.data))
      .catch(() => setError("Failed to load tasks"))
      .finally(() => setLoading(false));
  }, []);

  // ➕ Add task
  const addTask = async () => {
    if (!title.trim() || adding) return;

    try {
      setAdding(true);
      setError("");

      const res = await createTask({ title: title.trim() });
      setTasks((prev) => [...prev, res.data]);
      setTitle("");
    } catch {
      setError("Failed to create task");
    } finally {
      setAdding(false);
    }
  };

  // ❌ Delete task (optimistic)
  const removeTask = async (id) => {
    const prev = tasks;
    setTasks((t) => t.filter((x) => x._id !== id));

    try {
      await deleteTask(id);
    } catch {
      setTasks(prev);
      setError("Delete failed");
    }
  };

  // ✏️ Save edit
  const saveEdit = async (id) => {
    if (!editingTitle.trim()) return;

    try {
      const res = await updateTask(id, {
        title: editingTitle.trim(),
      });

      setTasks((prev) =>
        prev.map((t) => (t._id === id ? res.data : t))
      );

      setEditingId(null);
      setEditingTitle("");
    } catch {
      setError("Update failed");
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow space-y-4">
      <h2 className="text-xl font-semibold text-center">My Tasks</h2>

      {/* ➕ Add task */}
      <div className="flex gap-2">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") addTask();
          }}
          placeholder="Add task..."
          className="flex-1 px-3 py-2 border rounded-md"
          disabled={adding || loading}
        />
        <button
          onClick={addTask}
          disabled={adding || !title.trim()}
          className="bg-blue-600 text-white px-4 rounded-md disabled:opacity-50"
        >
          {adding ? "Adding..." : "Add"}
        </button>
      </div>

      {loading && <p className="text-center text-sm">Loading...</p>}
      {error && <p className="text-red-500 text-sm text-center">{error}</p>}

      {/* 📋 Task list */}
      <ul className="space-y-2">
        {tasks.map((task) => (
          <li
            key={task._id}
            className="flex justify-between items-center border p-2 rounded"
          >
            {editingId === task._id ? (
              <input
                value={editingTitle}
                onChange={(e) => setEditingTitle(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") saveEdit(task._id);
                  if (e.key === "Escape") setEditingId(null);
                }}
                className="flex-1 px-2 py-1 border rounded"
                autoFocus
              />
            ) : (
              <span>{task.title}</span>
            )}

            <div className="flex gap-2">
              {editingId === task._id ? (
                <button
                  onClick={() => saveEdit(task._id)}
                  className="text-green-600 hover:cursor-pointer"
                >
                  ✔
                </button>
              ) : (
                <button
                  onClick={() => {
                    setEditingId(task._id);
                    setEditingTitle(task.title);
                  }}
                  className="text-blue-600 hover:cursor-pointer"
                >
                  ✏️
                </button>
              )}

              <button
                onClick={() => removeTask(task._id)}
                className="text-red-500 hover:cursor-pointer"
              >
                ❌
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
