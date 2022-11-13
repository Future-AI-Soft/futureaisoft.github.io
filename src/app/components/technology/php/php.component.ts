import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
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


 
  
  constructor(private meta: Meta, private pageTitle: Title) {
   this.meta.addTags([
     {name: 'description', content: 'FutureaAI Software provides Our PHP group has vast journey in handing over superb customized PHP functions for a range of industries. For over 6 years we have been assisting consumers enhance PHP options ranging from easy portals to enterprise-grade functions uniquely tailor-made to the wants and necessities of every business.' },
     {name: 'author', content: 'FutureAI Software Development Services Ltd.'},
     {name: 'keywords', content: 'development apps,software development company,php development,php development companies,software design using php software design,software php e php php website,php application,learn software development,software engineering company,custom application development,php website development,php website template,php development companies,php development services,php development tools,top php development company,top php development companies,php development outsourcing,hire php development,setup php development environment windows,what is php development,php development services usa,best computer for php development,php  development kit,php  development companies,php  development company,android php  development,php  development for android,php  development software,php  development services,outsourcing php  development,outsource php  development,visual studio for php  development,php  development outsource,custom php  development,php  development kit developer,php  development certification,php  development salary,ios php  developmen,php  development team,php  development company india,php  development company bangladesh,php  development company usa,php  development company canada,php  development company UK,php  development company pakisthan,php  development company america,best ide for php  development,best company for php  development'}
   ]);
   this.pageTitle.setTitle('PHP Development Services || FutureaAI Software')
  }

  ngOnInit(): void {
  }

}
