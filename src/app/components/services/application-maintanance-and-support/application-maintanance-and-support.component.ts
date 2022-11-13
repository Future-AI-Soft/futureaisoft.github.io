import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
@Component({
  selector: 'app-application-maintanance-and-support',
  templateUrl: './application-maintanance-and-support.component.html',
  styleUrls: ['./application-maintanance-and-support.component.scss']
})
export class ApplicationMaintananceAndSupportComponent implements OnInit {
  breadcrumbTitle: string = 'Application Maintenance & Support';
  title: string = 'Application Maintenance & Support Services';
  description: string = `Outsourcing your utility preservation and aid frees up your group to center of attention on business-critical initiatives. FutureAI Soft renovation and help groups seamlessly combo with clients' improvement and assist practices making sure clean software program operation and scalability.`;
  serviceTitle: string = 'Application Maintenance Services';
  services: any[] = [
    "Application monitoring",
    "Server monitoring",
    "Network and remote connectivity management",
    "Event log management",
    "Backup & recovery",
  ];
  
  
   constructor(private meta: Meta, private pageTitle: Title) {
    this.meta.addTags([
      {name: 'description', content: 'FutureaAI Software provides Outsourcing your utility preservation and aid frees up your group to center of attention on business-critical initiatives. FutureAI Soft renovation and help groups seamlessly combo with clients improvement and assist practices making sure clean software program operation and scalability.'},
      {name: 'author', content: 'FutureAI Software Development Services Ltd.'},
      {name: 'keywords', content: 'application maintenance and support services,maintenance application process,maintenance service levels,e-maintenance software,f5 application services,application of maintenance,utility maintenance services,support maintenance,maintenance service app,6 service,application maintenance support activities,top software developers,development,      '}
    ]);
    this.pageTitle.setTitle('Application Maintenance & Support Services|| FutureaAI Software')
   }

  ngOnInit(): void {
  }

}
