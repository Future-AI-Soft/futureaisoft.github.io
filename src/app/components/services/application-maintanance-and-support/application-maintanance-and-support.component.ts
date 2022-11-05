import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-application-maintanance-and-support',
  templateUrl: './application-maintanance-and-support.component.html',
  styleUrls: ['./application-maintanance-and-support.component.scss']
})
export class ApplicationMaintananceAndSupportComponent implements OnInit {
  breadcrumbTitle: string = 'Application Maintenance & Support';
  title: string = 'Application Maintenance & Support Services';
  description: string = `Outsourcing your application maintenance and support frees up your team to focus on
  business—critical initiatives. Kanda maintenance and support teams seamlessly blend with clients
  development and support practices ensuring smooth software operation and scalability.`;
  serviceTitle: string = 'Application Maintenance Services';
  services: any[] = [
    "Application monitoring",
    "Server monitoring",
    "Network and remote connectivity management",
    "Event log management",
    "Backup & recovery",
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
