import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datascience',
  templateUrl: './datascience.component.html',
  styleUrls: ['./datascience.component.scss']
})
export class DatascienceComponent implements OnInit {
  breadcrumbTitle = 'Data Science Development'
  techTitle = 'Data Science Development Service'
  serviceDesc = `With over 5 years of trip in Java Development and Dedication to Delivery excellence, Kanda has performed the easiest stage of technological know-how and area information in developing, testing, and retaining world-class Java Software Solutions custom-made uniquely to clients’ wishes and budget. `;
  servicesTitle = 'Data Science Development Services'
  services = []
  constructor() { }

  ngOnInit(): void {
  }

}
