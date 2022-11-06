import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qa-and-testing-services',
  templateUrl: './qa-and-testing-services.component.html',
  styleUrls: ['./qa-and-testing-services.component.scss']
})
export class QaAndTestingServicesComponent implements OnInit {
  breadcrumbTitle: string = 'QA and Testing Services';
  title: string = 'Software Quality Assurance and Testing Services';
  description: string = `For 5 years FutureAI Soft Software utilized an Integrated Quality Assurance practice to ensure the highest
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
  constructor() { }

  ngOnInit(): void {
  }

}
