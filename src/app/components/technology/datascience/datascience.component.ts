import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datascience',
  templateUrl: './datascience.component.html',
  styleUrls: ['./datascience.component.scss']
})
export class DatascienceComponent implements OnInit {
  breadcrumbTitle = 'Data Science Development'
  techTitle = 'Data Science Development Service'
  serviceDesc = `With over 25 years of experience in Java Development and Dedication to Delivery excellence, Kanda
  has achieved the highest level of technology and domain expertise in developing, testing,
  and maintaining world-class Java Software Solutions customized uniquely to clients’ needs and budget.`;
  servicesTitle = 'Data Science Development Services'
  services = []
  constructor() { }

  ngOnInit(): void {
  }

}
