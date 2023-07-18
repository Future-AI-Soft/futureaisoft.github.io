import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
@Component({
  selector: 'app-datascience',
  templateUrl: './datascience.component.html',
  styleUrls: ['./datascience.component.scss']
})
export class DatascienceComponent implements OnInit {
  breadcrumbTitle = 'Data Science Development'
  techTitle = 'Data Science Development Service'
  serviceDesc = `With over 5 years of trip in Java Development and Dedication to Delivery excellence, Future AI Soft has performed the easiest stage of technological know-how and area information in developing, testing, and retaining world-class Java Software Solutions custom-made uniquely to clients’ wishes and budget. `;
  servicesTitle = 'Data Science Development Services'
  services = []
  

  
   constructor(private meta: Meta, private pageTitle: Title) {
    this.meta.addTags([
      {name: 'description', content: 'FutureaAI Software provides With over 5 years of trip in Java Development and Dedication to Delivery excellence, Future AI Soft has performed the easiest stage of technological know-how and area information in developing, testing, and retaining world-class Java Software Solutions custom-made uniquely to clients’ wishes and budget.' },
      {name: 'author', content: 'Future AI Software Development Services Ltd.'},
      {name: 'keywords', content: 'development apps,software development company,data science development,data science development companies,software design using data science software design,software data science e data science data science website,data science application,learn software development,software engineering company,custom application development,data science website development,data science website template,data science development companies,data science development services,data science development tools,top data science development company,top data science development companies,data science development outsourcing,hire data science development,setup data science development environment windows,what is data science development,data science development services usa,best computer for data science development,data science  development kit,data science  development companies,data science  development company,android data science  development,data science  development for android,data science  development software,data science  development services,outsourcing data science  development,outsource data science  development,visual studio for data science  development,data science  development outsource,custom data science  development,data science  development kit developer,data science  development certification,data science  development salary,ios data science  developmen,data science  development team,data science  development company india,data science  development company bangladesh,data science  development company usa,data science  development company canada,data science  development company UK,data science  development company pakisthan,data science  development company america,best ide for data science  development,best company for data science  development'}
    ]);
    this.pageTitle.setTitle('Data Science Development Servic|| FutureaAI Software')
   }

  ngOnInit(): void {
  }

}
