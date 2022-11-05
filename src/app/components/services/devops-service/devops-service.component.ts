import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-devops-service',
  templateUrl: './devops-service.component.html',
  styleUrls: ['./devops-service.component.scss']
})
export class DevopsServiceComponent implements OnInit {
  breadcrumbTitle: string = 'DevOps Services';
  title: string = 'DevOps Services and Solutions';
  description: string = `Achieve a greater business agility and a faster time to market by eliminating bottlenecks in software
  development with Kanda’s DevOps Services. Continuous Delivery makes staying ahead of the
  competition and impressing your customers with products they really want a breeze.`;
  serviceTitle: string = 'DevOps-as-a-Service Practice';
  services: any[] = [
    "Devops maturity assessment",
    "Devops org transformation consulting",
    "Open source and commercial tools implementations",
    "Automation (infrastructure as a code, qa)",
    "Application performance monitoring",
    "Devops processes effectiveness measurement",
    "Automated delivery, deployment and rollbacks",
    "24x7 monitoring and support",
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
