import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Início', url: 'home', icon: 'home' },
    { title: 'Notícias', url: 'news', icon: 'newspaper' },
    { title: 'Fale Conosco', url: 'contacts', icon: 'mail' },
    { title: 'Sobre', url: 'about', icon: 'information-circle' }
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
