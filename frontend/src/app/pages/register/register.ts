import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  username = '';
  password = '';

  constructor(
    private authService: Auth,
    private router: Router
  ) {}

  register(): void {
    this.authService.register({
      username: this.username,
      password: this.password
    })
    .subscribe({
     next: (response) => {
      this.authService.saveToken(response.token);
      this.router.navigate(['/todo']);
     },
      error: () => {
        alert('Username already exists');
      }
    });
  }

  goToLogin(): void {
    this.router.navigate(['/login']);
  }
}
