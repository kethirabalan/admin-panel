import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-social-media-manager',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './social-media-manager.component.html',
  styleUrl: './social-media-manager.component.scss'
})
export class SocialMediaManagerComponent {
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