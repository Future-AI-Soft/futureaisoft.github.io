import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
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
  
  
   constructor(private meta: Meta, private pageTitle: Title) {
    this.meta.addTags([
      {name: 'description', content: 'FutureaAI Software provides HOMETECHNOLOGYFRONT END DEVELOPMENT, UX AND UI DESIGN Front End Development, UX&UI Design Services We combination ability and knowledge to produce elegant, useful and user-focused interfaces. We let the reason of the specific net or cellular software pressure its plan and consumer ride to supply excessive consumer acceptance and engagement costs of your product.'},
      {name: 'author', content: 'Future AI Software Development Services Ltd.'},
      {name: 'keywords', content: 'application maintenance services can be termed as production support,maintenance application process,maintenance application process,maintenance service levels,e-maintenance software,it application services,m maintenance,o and m support,what is service and maintenance,x application,support and maintenance agreement,application maintenance support activities,define software in software engineering,number of software engineers in india,number of software engineers in bangladesh,number of software engineers in usa,number of software engineers in canada,agile software development is all about,software developer solutions'}
    ]);
    this.pageTitle.setTitle('Front End Development, UX&UI Design Services || FutureaAI Software')
   }

  ngOnInit(): void {
  }

}
