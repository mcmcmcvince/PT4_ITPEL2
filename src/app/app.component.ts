import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public pages:any[] = [
    {title: 'Bench Report', url: '/bench', icon: 'home'},
    {title: 'About', url: '/about', icon: 'person'},
    {title: 'Sports Hub', url: '/shoes', icon: 'footsteps'},
    {title: 'Top Sports', url: '/holy', icon: 'basketball'},
    {title: 'Ticket Hub', url: '/home', icon: 'cash'},
    

 
  ];
  constructor() {}
}
