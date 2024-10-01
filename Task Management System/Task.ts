/**
 * This file is responsible for handling the task.
 * @class Task
 * @param {string} id - The id of the task
 * @param {string} author - The author of the task
 * @param {string} taskType - The type of the task
 * @param {string} title - The title of the task
 * @param {string} description - The description of the task
 * @param {string} status - The status of the task
 * @param {string} deadline - The deadline of the task
 * @version 1.0.0
 * @author Beatriz Sanssi <bs222eh@student.lnu.se>
 */
import { Category } from './Category'

export class Task {
  taskId: string
  category: string
  taskType: 'Assignment' | 'Test' | 'Project' | 'Group project'
  author: string
  title: string
  description: string
  deadline: Date
  status: 'not started' | 'in progress' | 'completed'
  createdAt: Date

  constructor(
    taskId: string,
    category: string,
    taskType: string,
    author: string,
    title: string,
    description: string,
    deadline: Date,
    status: string,
    createdAt: Date
  ) {
    this.taskId = taskId;
    this.category = category;
    this.taskType = taskType as 'Assignment' | 'Test' | 'Project' | 'Group project';
    this.author = author;
    this.title = title;
    this.description = description;
    this.deadline = deadline;
    this.status = status as 'not started' | 'in progress' | 'completed';
    this.createdAt = new Date()
  }

  // Check if the student has started the task
  hasStarted(): boolean {
    return this.status === 'in progress' || this.status === 'completed';
  }

  // Check if the student has completed the task
  hasCompleted(): boolean {
    return this.status === 'completed';
  }

  // Check if the student is working on the task
  inProgress(): boolean {
    return this.status === 'in progress';
  }

  // Check if the student has not started the task
  notStarted(): boolean {
    return this.status === 'not started';
  }

  // Change the tasks status to completed
  private markAsCompleted(): void {
    this.status = 'completed'
  }

  // Change the tasks status to in progress
  private markAsInProgress(): void {
    this.status = 'in progress'
  }

  // The taks initial status is not started
  private markAsNotStarted(): void {
    this.status = 'not started'
  }

  // Add an id to the task
  private addTaskId(taskId: string): void {
    this.taskId = taskId
  }

  // Add a category to the task
  private addCategory(category: string): void {
    this.category = category
  }

  // Add a type to the task
  private addType(taskType: 'Assignment' | 'Test' | 'Project' | 'Group project'): void {
    this.taskType = taskType
  }

  // Add an author to the task
  private addAuthor(author: string): void {
    this.author = author
  }

  // Add a title to the task
  private addTitle(title: string): void {
    this.title = title
  }

  // Add a description to the task
  private addDescription(description: string): void {
    this.description = description
  }

  // Add a deadline to the task
  private addDeadline(deadline: Date): void {
    this.deadline = deadline
  }

  // Add a status to the task
  private addStatus(status: 'not started' | 'in progress' | 'completed'): void {
    this.status = status
  }

  toString(): string {
    return `Task: ${this.title} - ${this.description} - ${this.status} - ${this.deadline}`
  }
}
