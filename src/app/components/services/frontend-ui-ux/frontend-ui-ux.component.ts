import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-frontend-ui-ux',
  templateUrl: './frontend-ui-ux.component.html',
  styleUrls: ['./frontend-ui-ux.component.scss']
})
export class FrontendUiUxComponent implements OnInit {
  breadcrumbTitle: string = 'Front End Development, UX and UI Design';
  title: string = 'Front End Development, UX&UI Design Services';
  description: string = `We combination ability and knowledge to produce elegant, useful and user-focused interfaces. We let the reason of the specific net or cellular software pressure its plan and consumer ride to supply excessive consumer acceptance and engagement costs of your product. `;
  serviceTitle: string = 'nt-End Development Services';
  services: any[] = [
    "Front-End Architecture and Design",
    "Rapid Prototyping",
    "Front-end assessment and optimization services",
    "Front-end Migration",
    "Front-end Quality assurance services",
    "Maintenance and Support",
    "24x7 monitoring and support",
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
