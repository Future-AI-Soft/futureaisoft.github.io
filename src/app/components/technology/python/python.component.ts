import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-python',
  templateUrl: './python.component.html',
  styleUrls: ['./python.component.scss']
})
export class PythonComponent implements OnInit {
  breadcrumbTitle = 'Python Software Development'
  techTitle = 'Python Software Development'
  serviceDesc = `We have 100s successful Python application development projects up our sleeves over the past 25
  years ranging from dynamic websites to web and desktop solutions to mobile apps. We deliver
  scalable cutting-edge solutions tailored to unique needs and requirements of each client providing
  dedication to delivery excellence, seamless integration with clients’ processes and in-house teams.`;
  servicesTitle = 'AdvPython Development Services'
  services = [
    'Custom Python Web Application Development',
    'Python SaaS and PaaS Development',
    'Suited for portable, cross-platform development',
    'Django Development',
    'Python Dynamic Website Development',
    'Python Migration and Integration Services',
    'Server-side Development',
    'Application Maintenance and Support',
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
