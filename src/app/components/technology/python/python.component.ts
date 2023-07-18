import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
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
 
  
   constructor(private meta: Meta, private pageTitle: Title) {
    this.meta.addTags([
      {name: 'description', content: 'FutureaAI Software provides '},
      {name: 'author', content: 'Future AI Software Development Services Ltd.'},
      {name: 'keywords', content: 'development apps,software development company,python development,python development companies,software design using python,software design,software python,e python,python website,python application,learn software development,software engineering company,custom application development,python website development,python website template,python development companies,python development services,python development tools,top python development company,top python development companies,python development outsourcing,hire python development,setup python development environment windows,what is python development,python development services usa,best computer for python development,Python  development kit,Python  development companies,Python  development company,android Python  development,Python  development for android,Python  development software,Python  development services,outsourcing Python  development,outsource Python  development,visual studio for Python  development,Python  development outsource,custom Python  development,Python  development kit developer,Python  development certification,Python  development salary,ios Python  developmen,Python  development team,Python  development company india,Python  development company bangladesh,Python  development company usa,Python  development company canada,Python  development company UK,Python  development company pakisthan,Python  development company america,best ide for Python  development,best company for Python  development'}
    ]);
    this.pageTitle.setTitle('|| FutureaAI Software')
   }

  ngOnInit(): void {
  }

}
