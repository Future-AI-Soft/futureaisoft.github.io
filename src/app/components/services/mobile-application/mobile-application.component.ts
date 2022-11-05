import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile-application',
  templateUrl: './mobile-application.component.html',
  styleUrls: ['./mobile-application.component.scss']
})
export class MobileApplicationComponent implements OnInit {
  breadcrumbTitle: string = 'Mobile Application Development';
  title: string = 'Mobile Application Development Services';
  description: string = `We are pushing the boundaries of what’s possible on mobile by creating transformative mobile
  experiences that solve business challenges for clients ranging from large enterprises to innovative
  startups and creative entrepreneurs. With in-depth knowledge of native iOS, Android and
  cross-platform application development, we make sure that your idea is transformed into a
  beautifully designed, user-friendly and engaging mobile solution of a superior quality.`;
  serviceTitle: string = 'Mobile App Development Services';
  services: any[] = [
    'Native iOS mobile app development',
    'Native Android mobile app development',
    'Cross-Platform mobile solutions',
    'Responsive HTML5 mobile applications',
    'UX/UI Design',
    'Hybrid app development',
    'Mobile application migration and optimization',
    'Maintenance and Support',
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
