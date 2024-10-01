/**
 * This is a test file
 * @class TestApp
 * @version 1.0.0
 * @author Beatriz Sanssi <bs222eh@student.lnu.se>
 */

import { Task } from '../Task Management System/Task'
import { NotificationSystem } from '../Task Management System/NotificationSystem'
import { User } from '../Task Management System/User'
import { Category } from '../Task Management System/Category'
import { TaskManager } from '../Task Management System/TaskManager'

// Create a new user
const user = new User('Paul', 'paul@student.lnu.se', 'student')
console.log('User created:', user)

// Create a password for the user
async function setupUserPassword() {
  try {
    await user.createPassword('mySecurePassword')
    console.log('Password has been set for:', user.name)

    // Check if the password is correct
    const isPasswordCorrect = await user.checkPassword('mySecurePassword')
    console.log('Is the password correct?', isPasswordCorrect)

    // Test with incorrect password
    const isPasswordIncorrect = await user.checkPassword('wrongPassword')
    console.log('Is the wrong password correct?', isPasswordIncorrect)
  } catch (error) {
    console.error('Error setting password:', error)
  }
}

setupUserPassword()

// Create a notification system
const notificationSystem = new NotificationSystem('New Task:', 'newTask')
console.log('Notification system created:', notificationSystem)

// Create a category
try { 
const category = new Category('Math')
console.log(category.toString());

// Try to change the category to another
category.setCategoryName('Science');
console.log('Category updated to:', category.toString());

// Try setting an invalid category
const invalidCategory = new Category('InvalidCategory'); 
} catch (error) {
  if (error instanceof Error) {
    console.error(error.message);
  } else {
    console.error('An unknown error occurred');
  }
}

// Create tasks
const task1 = new Task(
  '1',
  'English',
  'Assignment',
  'Maria Johnson',
  'Essay',
  'Write an essay about "Lord of the Flies". The essay must have a minimum of 500 words.',
  new Date('Deadline: 2024-10-01'),
  'not started',
  new Date('Created at 2024-09-01'),
)

console.log('Task created:', task1)

const task2 = new Task(
  '2',
  'Biology',
  'Test',
  'John Doe',
  'Test 1',
  'Test about the human body',
  new Date('Deadline: 2024-10-08'),
  'not started',
  new Date('Created at 2024-09-03'),
)
console.log('Task created:', task2)

// Create a task manager
const taskManager = new TaskManager()
taskManager.assignTaskToStudent(
  task1,
  new User('Maria Johnson', 'maria.Johnson@lnu.com', 'teacher'),
  user,
)
console.log('Task assigned to student:', user.name)

// Add tasks to the task manager
taskManager.createTask(task1)
taskManager.notifyStudent(user, 'New task added', 'newTask', task1 )

// // Assign task to user
// user.assignTask(task1);
// user.assignTask(task2);

console.log(taskManager.listTasks())
