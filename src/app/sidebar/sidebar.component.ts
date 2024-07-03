import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  isExpanded = false;
  activeDropdown: string | null = null;

  toggleSidebar() {
    this.isExpanded = !this.isExpanded;
  }

  toggleDropdown(dropdownId: string) {
    if (this.activeDropdown === dropdownId) {
      this.activeDropdown = null;
    } else {
      this.activeDropdown = dropdownId;
    }
  }
}