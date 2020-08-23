import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent implements OnInit {
  version = '1.0.0';

  appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home-sharp'
    },
    {
      title: 'Profile',
      url: '/profile',
      icon: 'person-sharp'
    },
    {
      title: 'Book Club',
      url: '/club',
      icon: 'library-sharp'
    },
    {
      title: 'Quotes',
      url: '/quotes',
      icon: 'chatbubble-sharp'
    },
    {
      title: 'Blog',
      url: '/blog',
      icon: 'newspaper-sharp'
    }
  ];
  user = {
    firstName: 'Michael',
    lastName: 'B. Jordan',
    profiler: '../../assets/img/sample-profile.png',
    email: 'michael.jordan@gmail.com'
  };

  constructor() {}

  ngOnInit() {}

  async leaveAReview() {}

  openFacebookProfile() {}

  openInstagramProfile() {}

  openTwitterProfile() {}

  openWebsite() {}
}
