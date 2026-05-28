import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { UserService } from '../../core/services/user.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  user: any;
  records: any[] = [];
  isLoadingRecords = true;

  constructor(
    public authService: AuthService, 
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {
    this.user = this.authService.currentUserValue;
    this.fetchRecords();
  }

  fetchRecords() {
    this.isLoadingRecords = true;
    this.userService.getRecords().subscribe({
      next: (data) => {
        this.records = data;
        this.isLoadingRecords = false;
      },
      error: () => {
        this.isLoadingRecords = false;
      }
    });
  }

  logout() {
    this.authService.logout();
  }
}
