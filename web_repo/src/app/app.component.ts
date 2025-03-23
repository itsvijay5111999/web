import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'One Hub Dashboard';
  username: string = 'Vijay Kumar';
  notifications: number = 5;

  tasks: { name: string; completed: boolean }[] = [
    { name: 'Check Reports', completed: false },
    { name: 'Team Meeting', completed: true },
    { name: 'Review Dashboard', completed: false }
  ];

  // Define the cards array with images and links
  cards = [
    { title: 'Angular Docs', imageUrl: 'assets/angular.png', link: 'https://angular.io/docs' },
    { title: 'TypeScript Docs', imageUrl: 'assets/typescript.png', link: 'https://www.typescriptlang.org/docs/' },
    { title: 'GitHub', imageUrl: 'assets/github.png', link: 'https://github.com' }
  ];

  markTaskComplete(index: number) {
    this.tasks[index].completed = true;
  }

  clearNotifications() {
    this.notifications = 0;
  }

  navigateTo(url: string) {
    window.open(url, '_blank');
  }
}
