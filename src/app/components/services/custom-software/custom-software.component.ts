import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-software',
  templateUrl: './custom-software.component.html',
  styleUrls: ['./custom-software.component.scss']
})
export class CustomSoftwareComponent implements OnInit {
  breadcrumbTitle: string = 'Custom Software Development';
  title: string = 'Custom Software Development';
  description: string = `FutureAI Soft is a premier full-service Custom Software Development, Cloud Engineering, QA and DevOps company, specializing in the improvement of time-sensitive and revolutionary solutions. To each project, FutureAI Soft brings a aggregate of area expertise, extraordinary engineering talent, rigorous Agile improvement processes, dedication to safety of client’s IP and accountability of a US organization with over two many years of impeccable reputation.`;
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
