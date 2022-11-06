import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-php',
  templateUrl: './php.component.html',
  styleUrls: ['./php.component.scss']
})
export class PhpComponent implements OnInit {
  breadcrumbTitle = 'PHP Development Services'
  techTitle = 'PHP Development Services'
  serviceDesc = `Our PHP group has vast journey in handing over superb customized PHP functions for a range of industries. \n
   For over 6 years we have been assisting consumers enhance PHP options ranging from easy portals to enterprise-grade functions uniquely tailor-made to the wants and necessities of every business.`
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
