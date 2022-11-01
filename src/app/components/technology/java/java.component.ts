import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-java',
  templateUrl: './java.component.html',
  styleUrls: ['./java.component.scss']
})
export class JavaComponent implements OnInit {
  breadcrumbTitle = 'Java Development'
  techTitle = 'Java Software Development Services'
  serviceDesc = `With over 25 years of experience in Java Development and Dedication to Delivery excellence, Kanda
  has achieved the highest level of technology and domain expertise in developing, testing,
  and maintaining world-class Java Software Solutions customized uniquely to clients’ needs and budget.`;
  servicesTitle = 'FutureAI Soft’s Custom Java Development Services include:'
  services = [
    'Custom Java Software Development',
    'Enterprise Java Applications',
    'Java CMS Services',
    'Java/J2EE Development Services',
    'Java Web and Mobile Application Development',
    'Java Application Migration, Modernization and Enhancement',
    '24x7 Maintenance & Support Services for Java Applications',
    'Quality Assurance and Testing of Java Solutions',
    'Java Application Integration Services'
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
