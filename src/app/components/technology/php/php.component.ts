import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-php',
  templateUrl: './php.component.html',
  styleUrls: ['./php.component.scss']
})
export class PhpComponent implements OnInit {
  breadcrumbTitle = 'PHP Development Services'
  techTitle = 'PHP Development Services'
  serviceDesc = `Our PHP team has extensive experience in delivering exceptional custom PHP applications for a
  variety of industries.
  \n
  For over 20 years we have been helping clients develop PHP solutions ranging from simple portals to
  enterprise-grade applications uniquely tailored to the needs and requirements of each business.`
  servicesTitle = 'PHP Development Services'
  services = [
    'Custom PHP Application Development',
    'PHP Web Development',
    'PHP Backend Solutions',
    'PHP Framework Development',
    'Web Services Integration',
    'Migration to PHP and Integration Services',
    'Dynamic Website Development',
    'Portal Development',
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
