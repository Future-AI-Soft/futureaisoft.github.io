import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-mobile-application',
  templateUrl: './mobile-application.component.html',
  styleUrls: ['./mobile-application.component.scss']
})
export class MobileApplicationComponent implements OnInit {
  breadcrumbTitle: string = 'Mobile Application Development';
  title: string = 'Mobile Application Development Services';
  description: string = `We are pushing the boundaries of what’s viable on cellular by using growing transformative cell experiences that clear up enterprise challenges for purchasers ranging from massive businesses to revolutionary startups and innovative entrepreneurs. With in-depth understanding of native iOS, Android, and cross-platform utility development, we make positive that your notion is modified into a fantastically designed, user-friendly, and enticing cell answer of greatest quality.`;
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
  constructor(private meta: Meta, private pageTitle: Title) {
    this.meta.addTags([
      {name: 'description', content: 'FutureaAI Software provides mobile app development services for companies, who seek to develop iOS, Flutter and Android solutions.'},
      {name: 'author', content: 'FutureAI Software Development Services Ltd.'},
      {name: 'keywords', content: 'mobile app development company,mobile application development,mobile app development services,custom mobile application development,ios development services,android development,mobile apps development,mobile solutions'}
    ]);
    this.pageTitle.setTitle('ware Quality Assurance Company || FutureaAI Software')
   }

  ngOnInit(): void {
  }

}
