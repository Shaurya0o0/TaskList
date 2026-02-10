import Task from "../models/task.model.js";



export const getTasks = async (req, res) => {
  const tasks = await Task.find({ user: req.user._id });
  res.json(tasks);
};

export const createTask = async (req, res) => {
  const task = await Task.create({
    title: req.body.title,
    user: req.user._id,
  });
  res.status(201).json(task);
};

export const deleteTask = async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};

export const updateTask = async (req, res) => {
  const { title, completed } = req.body;

  const task = await Task.findOneAndUpdate(
    { _id: req.params.id, user: req.user._id }, // security check
    { title, completed },
    { new: true }
  );

  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }

  res.json(task);
};

