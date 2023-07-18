import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-qa-and-testing-services',
  templateUrl: './qa-and-testing-services.component.html',
  styleUrls: ['./qa-and-testing-services.component.scss']
})
export class QaAndTestingServicesComponent implements OnInit {
  breadcrumbTitle: string = 'QA and Testing Services';
  title: string = 'Software Quality Assurance and Testing Services';
  description: string = `For 5 years Future AI Soft Software utilized an Integrated Quality Assurance practice to ensure the highest
  quality of our deliverables. We have perfected QA and Testing strategy and methodology that blend
  seamlessly into the development lifecycle without crossing the important boundary between the
  development and software quality assurance processes.`;
  serviceTitle: string = 'Software QA and Testing Services';
  services: any[] = [
    'Consulting',
    'Complete Lifecycle',
    'Embedded Agile',
    'Complete Lifecycle',
    'Unit Testing Automation Platform',
    'Custom Teams',
    'Test Automation',
    'Web, Mobile, On-premises Applications',
  ];
  constructor(private meta: Meta, private pageTitle: Title) {
    this.meta.addTags([
      {name: 'description', content: 'When your company is in need of software quality assurance services, Future AI can help. We can help you maximize your team&#039;s productivity while we take on QA support and testing initiatives.'},
      {name: 'author', content: 'Future AI Software Development Services Ltd.'},
      {name: 'keywords', content: 'software quality assurance,quality assurance services,software quality,software qa service,software quality assurance company,software testing services,software qa company,application qa and testing,qa services,application testing'}
    ]);
    this.pageTitle.setTitle('Mobile App Development || FutureaAI Software')
   }

  ngOnInit(): void {
  }

}
