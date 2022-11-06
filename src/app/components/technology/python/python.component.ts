import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-python',
  templateUrl: './python.component.html',
  styleUrls: ['./python.component.scss']
})
export class PythonComponent implements OnInit {
  breadcrumbTitle = 'Python Software Development'
  techTitle = 'Python Software Development'
  serviceDesc = `We have 10s profitable Python software improvement tasks up our sleeves over the previous 5 years ranging from dynamic web sites to internet and laptop options to cellular apps. We supply scalable modern options tailor-made to special desires and necessities of every patron imparting dedication to shipping excellence, seamless integration with clients’ strategies and in-house teams. `;
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
