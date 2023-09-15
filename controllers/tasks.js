import { TaskModel } from '../models/task.js'

export const getAllTasks = async (req, res) => {
  try {
    const tasks = await TaskModel.getAllTasks()
    res.json(tasks)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const addTask = async (req, res) => {
  try {
    const task = await TaskModel.addTask(req.body.description)
    res.json(task)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const deleteTask = async (req, res) => {
  try {
    await TaskModel.deleteTask(req.params.id)
    res.json({ message: 'Deleted successfully' })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
