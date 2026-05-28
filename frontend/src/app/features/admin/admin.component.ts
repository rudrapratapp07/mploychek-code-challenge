import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../core/services/user.service';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './admin.component.html',
  styleUrls: ['../dashboard/dashboard.component.scss'] // Reusing styles
})
export class AdminComponent implements OnInit {
  users: any[] = [];
  isLoading = true;
  
  // Form state
  showAddForm = false;
  newUser = { name: '', username: '', password: '', role: 'General User' };
  isAdding = false;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.fetchUsers();
  }

  fetchUsers() {
    this.isLoading = true;
    this.userService.getUsers().subscribe({
      next: (data) => {
        this.users = data;
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
      }
    });
  }

  toggleAddForm() {
    this.showAddForm = !this.showAddForm;
    this.newUser = { name: '', username: '', password: '', role: 'General User' };
  }

  addUser() {
    this.isAdding = true;
    this.userService.addUser(this.newUser).subscribe({
      next: () => {
        this.fetchUsers();
        this.toggleAddForm();
        this.isAdding = false;
      },
      error: () => {
        this.isAdding = false;
      }
    });
  }

  deleteUser(id: string) {
    if (confirm('Are you sure you want to delete this user?')) {
      this.userService.deleteUser(id).subscribe({
        next: () => {
          this.fetchUsers();
        }
      });
    }
  }
}
