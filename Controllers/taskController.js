const Task = require('../models/Task');

exports.getTasksByUser = async (req, res) => {
  try {
    const tasks = await Task.find({ owner: req.userId });
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getTasksByUser = async (req, res) => {
  try {
    const tasks = await Task.find({ owner: req.userId });
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createTask = async (req, res) => {
  try {
    const { title, description, status } = req.body;
    const task = new Task({
      title,
      description,
      status,
      owner: req.userId
    });
    await task.save();
    res.status(201).json(task);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateTask = async (req, res) => {
  try {
    const { taskId } = req.params;
    const { title, description, status } = req.body;

    const task = await Task.findOneAndUpdate(
      { _id: taskId, owner: req.userId },
      { title, description, status },
      { new: true }
    );

    if (!task) {
      return res.status(404).json({ message: 'Tarefa nao encontrada' });
    }

    res.json(task);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    const { taskId } = req.params;

    const task = await Task.findOneAndDelete({ _id: taskId, owner: req.userId });

    if (!task) {
      return res.status(404).json({ message: 'Tarefa nao encontrada' });
    }

    res.json({ message: 'Tarefa deletada com Sucesso' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getTasksWithoutOwner = async (req, res) => {
  try {
    const tasks = await Task.find({ owner: null });
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.assignOwnerToTask = async (req, res) => {
  try {
    const { taskId } = req.params;
    const { userId } = req.body;

    const task = await Task.findByIdAndUpdate(
      taskId,
      { owner: userId },
      { new: true }
    );

    if (!task) {
      return res.status(404).json({ message: 'Tarefa nao encontrada' });
    }

    res.json(task);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
