import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-software',
  templateUrl: './custom-software.component.html',
  styleUrls: ['./custom-software.component.scss']
})
export class CustomSoftwareComponent implements OnInit {
  breadcrumbTitle: string = 'Custom Software Development';
  title: string = 'Custom Software Development';
  description: string = `FutureAI Soft is a premier full-service Custom Software Development, Cloud Engineering, QA and DevOps
  company, specializing in the development of time-sensitive and innovative solutions. To every
  project, FutureAI Soft brings a combination of domain expertise, exceptional engineering talent, rigorous
  Agile development processes, commitment to protection of client’s IP and accountability of a US
  company with over two decades of impeccable reputation.`;
  serviceTitle: string = 'Custom Software Development Services';
  services: any[] = [
    'Discovery and Analysis',
    'Architecture and UX/UI design',
    'POC and MVP development',
    'Custom Software Development',
    'QA Testing and Automation',
    'DevOps Implementation',
    'Cloud Migration, Optimization and Maintenance',
    'Support and Maintenance',
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
