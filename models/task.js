/**
 * Array to store tasks.
 * @type {Array<Object>}
 */
const tasks = []

/**
 * ID for the next task. Increments each time a new task is added.
 * @type {number}
 */
let currentId = 1

/**
 * Model class representing a task.
 * @class
 */
export class TaskModel {
  /**
   * Fetches all tasks.
   * @name TaskModel.getAllTasks
   * @static
   * @returns {Array<Object>} Array of tasks.
   */
  static getAllTasks () {
    return tasks
  }

  /**
   * Adds a new task to the list.
   * @name TaskModel.addTask
   * @static
   * @param {string} description - The description of the task.
   * @returns {Object} The new task object.
   */
  static addTask (description) {
    const newTask = {
      id: currentId,
      description
    }
    tasks.push(newTask)
    currentId++
    return newTask
  }

  /**
   * Deletes a task from the list by its ID.
   * @name TaskModel.deleteTask
   * @static
   * @param {number} id - The ID of the task to delete.
   */
  static deleteTask (id) {
    const parsedId = parseInt(id, 10)
    if (isNaN(parsedId)) throw new Error('Invalid ID format')
    const taskIndex = tasks.findIndex(task => task.id === parsedId)
    if (taskIndex === -1) return null
    const [deletedTask] = tasks.splice(taskIndex, 1)
    return deletedTask
  }
}
