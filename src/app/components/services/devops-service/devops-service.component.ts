import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
@Component({
  selector: 'app-devops-service',
  templateUrl: './devops-service.component.html',
  styleUrls: ['./devops-service.component.scss']
})
export class DevopsServiceComponent implements OnInit {
  breadcrumbTitle: string = 'DevOps Services';
  title: string = 'DevOps Services and Solutions';
  description: string = `Achieve a greater business agility and a faster time to market by eliminating bottlenecks in software development with FutureAI Soft’s DevOps Services. Continuous Delivery makes staying ahead of the competition and impressing your customers with products they really want a breeze.`;
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
  
  
   constructor(private meta: Meta, private pageTitle: Title) {
    this.meta.addTags([
      {name: 'description', content: 'FutureaAI Software provides DevOps Services and Solutions,Achieve a greater business agility and a faster time to market by eliminating bottlenecks in software development with FutureAI Soft’s DevOps Services. Continuous Delivery makes staying ahead of the competition and impressing your customers with products they really want a breeze.' },
      {name: 'author', content: 'FutureAI Software Development Services Ltd.'},
      {name: 'keywords', content: 'managed devops services,cd devops tools,devops services aws,environment devops,azure devops services features,azure devops multiple solutions in one repository,devops as a service companies,programming company,flow devops,enterprise devops,environment devops,azure devops as a service,managed devops services,enterprise software development services,latest devops technology in software development      '}
    ]);
    this.pageTitle.setTitle('DevOps Services and Solutions || FutureaAI Software')
   }

  ngOnInit(): void {
  }

}
