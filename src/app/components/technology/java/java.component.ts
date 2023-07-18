import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
@Component({
  selector: 'app-java',
  templateUrl: './java.component.html',
  styleUrls: ['./java.component.scss']
})
export class JavaComponent implements OnInit {
  breadcrumbTitle = 'Java Development'
  techTitle = 'Java Software Development Services'
  serviceDesc = `With over 25 years of trip in Java Development and Dedication to Delivery excellence, Futureraisoft
  has carried out the perfect degree of technological know-how and area knowledge in developing, testing,
  and keeping world-class Java Software Solutions custom-made uniquely to clients’ wants and budget.`;
  servicesTitle = 'Future AI Soft’s Custom Java Development Services include:'
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

 
  
   constructor(private meta: Meta, private pageTitle: Title) {
    this.meta.addTags([
      {name: 'description', content: 'FutureaAI Software provides '},
      {name: 'author', content: 'Future AI Software Development Services Ltd.'},
      {name: 'keywords', content: 'java development kit,java development companies,java development company,android java development,java development for android,java development software,java development services,outsourcing java development,outsource java development,visual studio for java development,java development outsource,custom java development,java development kit developer,java development certification,java development salary,ios java developmen,java development team,java development company india,java development company bangladesh,java development company usa,java development company canada,java development company UK,java development company pakisthan,java development company america,best ide for java development,best company for java development'}
    ]);
    this.pageTitle.setTitle(' || FutureaAI Software')
   }
  ngOnInit(): void {
  }

}
