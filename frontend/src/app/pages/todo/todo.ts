import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoService, TodoItem } from '../../services/todo';
import { Router } from '@angular/router';
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-todo',
  imports: [FormsModule],
  templateUrl: './todo.html',
  styleUrl: './todo.css',
})
export class Todo implements OnInit {
  tasks: TodoItem[] = [];
  newTask = '';
  searchText = '';

  editingTaskId: number | null = null;
  editingTitle = '';

  constructor(
    private todoService: TodoService,
    private authService: Auth,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  get filteredTasks(): TodoItem[] {
    if (!this.searchText.trim()) {
      return this.tasks;
    }

    return this.tasks.filter(task =>
      task.title.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  loadTasks(): void {
    this.todoService.getAll().subscribe({
      next: (data) => {
        this.tasks = data;
      },
      error: (err) => {
        console.error(err);
        alert('Failed to load tasks');
      }
    });
  }

  addTask(): void {
    if (!this.newTask.trim()) {
      return;
    }

    this.todoService.create({ title: this.newTask }).subscribe({
      next: () => {
        this.newTask = '';
        this.loadTasks();
      },
      error: () => {
        alert('Failed to add task');
      }
    });
  }

  markDone(id: number): void {
    this.todoService.markDone(id).subscribe({
      next: () => this.loadTasks()
    });
  }

  startEdit(task: TodoItem): void {
    this.editingTaskId = task.id;
    this.editingTitle = task.title;
  }

  cancelEdit(): void {
    this.editingTaskId = null;
    this.editingTitle = '';
  }

  saveEdit(id: number): void {
    if (!this.editingTitle.trim()) {
      return;
    }

    this.todoService.update(id, this.editingTitle).subscribe({
      next: () => {
        this.editingTaskId = null;
        this.editingTitle = '';
        this.loadTasks();
      },
      error: () => {
        alert('Failed to update task');
      }
    });
  }

  deleteTask(id: number): void {
    this.todoService.delete(id).subscribe({
      next: () => this.loadTasks()
    });
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
