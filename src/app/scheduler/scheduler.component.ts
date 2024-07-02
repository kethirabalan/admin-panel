import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-scheduler',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './scheduler.component.html',
  styleUrl: './scheduler.component.scss'
})
export class SchedulerComponent {
  postContent: string = '';
  scheduleTime: string = '';

  schedulePost() {
    const scheduledPost = {
      content: this.postContent,
      time: this.scheduleTime
    };
    console.log('Scheduled Post:', scheduledPost);
    // Add logic to save the scheduled post (e.g., send to server or Firebase)
  }
}
