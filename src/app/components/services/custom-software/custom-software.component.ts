import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

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

  constructor(private meta: Meta, private pageTitle: Title) {
    this.meta.addTags([
      {name: 'description', content: 'Future AI Soft is a Custom Software Development Company that develops sophisticated and innovative solutions.'},
      {name: 'author', content: 'FutureAI Software Development Services Ltd.'},
      {name: 'keywords', content: 'custom software development,software development solutions,software development services,development services,software services,software development company,custom software development companies,software development companies,custom software development company'}
    ]);
    this.pageTitle.setTitle('Custom Software Development | FutureaAI Software')
   }

  ngOnInit(): void {
  }

}
