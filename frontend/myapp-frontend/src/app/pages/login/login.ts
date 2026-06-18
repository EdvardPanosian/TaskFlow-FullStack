import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  username = '';
  password = '';

  constructor(
    private authService: Auth,
    private router: Router
  ) {}

  login(): void {
    this.authService.login({
      username: this.username,
      password: this.password
    })
    .subscribe({
      next: (response) => {
        this.authService.saveToken(response.token);
        this.router.navigate(['/todo']);
      },
      error: () => {
        alert('Invalid username or password');
      }
    });
  }

  goToRegister(): void {
    this.router.navigate(['/register']);
  }
}
