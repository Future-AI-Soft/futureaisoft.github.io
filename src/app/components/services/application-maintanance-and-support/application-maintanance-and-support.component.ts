import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-application-maintanance-and-support',
  templateUrl: './application-maintanance-and-support.component.html',
  styleUrls: ['./application-maintanance-and-support.component.scss']
})
export class ApplicationMaintananceAndSupportComponent implements OnInit {
  breadcrumbTitle: string = 'Application Maintenance & Support';
  title: string = 'Application Maintenance & Support Services';
  description: string = `Outsourcing your utility preservation and aid frees up your group to center of attention on business-critical initiatives. Kanda renovation and help groups seamlessly combo with clients' improvement and assist practices making sure clean software program operation and scalability.`;
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
