import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface TodoItem {
  id: number;
  title: string;
  isDone: boolean;
}

export interface CreateTodoRequest {
  title: string;
}

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private apiUrl = 'http://localhost:5000/api/ToDo';

  constructor(private http: HttpClient) {}

  getAll(): Observable<TodoItem[]> {
    return this.http.get<TodoItem[]>(this.apiUrl, {
      headers: this.getAuthHeaders(),
    });
  }

  create(data: CreateTodoRequest): Observable<TodoItem> {
    return this.http.post<TodoItem>(this.apiUrl, data, {
      headers: this.getAuthHeaders(),
    });
  }

  markDone(id: number): Observable<TodoItem> {
    return this.http.put<TodoItem>(`${this.apiUrl}/${id}`, {}, {
      headers: this.getAuthHeaders(),
    });
  }

  update(id: number, title: string): Observable<TodoItem> {
    return this.http.put<TodoItem>(`${this.apiUrl}/${id}/edit`, { title }, {
      headers: this.getAuthHeaders(),
    });
  }

  delete(id: number): Observable<string> {
    return this.http.delete(`${this.apiUrl}/${id}`, {
      headers: this.getAuthHeaders(),
      responseType: 'text',
    });
  }

  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');

    return new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
  }
}
