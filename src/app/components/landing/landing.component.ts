import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit { 

  constructor(private meta: Meta, private title: Title) {
    this.meta.addTags([
      {name: 'description', content: 'Future AI Soft is an elementary Web Software Development Company that develops sophisticated and innovative solutions.'},
      {name: 'author', content: 'Future AI Software Development Services Ltd.'},
      {name: 'keywords', content: 'Software development,Software development company, DevOps,outsource programming,outsourcing developers,software services company,software engineering company,software developer i,outsourcing software development,outsourcing software development services,software outsourcing companies,software application developer,IT Firm,software development firm,software engineering consultancy,software development processes'}
    ]);
    this.title.setTitle('Futureai Software: Best Software Development Company')
   }
  

  ngOnInit(): void {
  }

}
