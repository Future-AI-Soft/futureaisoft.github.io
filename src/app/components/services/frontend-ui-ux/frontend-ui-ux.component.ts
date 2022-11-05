import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-frontend-ui-ux',
  templateUrl: './frontend-ui-ux.component.html',
  styleUrls: ['./frontend-ui-ux.component.scss']
})
export class FrontendUiUxComponent implements OnInit {
  breadcrumbTitle: string = 'Front End Development, UX and UI Design';
  title: string = 'Front End Development, UX&UI Design Services';
  description: string = `We blend skill and expertise to produce elegant, functional and user-focused interfaces. We let the
  purpose of the particular web or mobile application drive its design and user experience to deliver
  high user acceptance and engagement rates of your product.`;
  serviceTitle: string = 'nt-End Development Services';
  services: any[] = [
    "Front-End Architecture and Design",
    "Rapid Prototyping",
    "Front-end assessment and optimization services",
    "Front-end Migration",
    "Front-end Quality assurance services",
    "Maintenance and Support",
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
