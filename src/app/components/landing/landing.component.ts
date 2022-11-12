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
      {name: 'description', content: 'Futureaisoft is an elementary Web Software Development Company that develops sophisticated and innovative solutions.'},
      {name: 'author', content: 'FutureAI Software Development Services Ltd.'},
      {name: 'keywords', content: 'Software development,Software development company, DevOps'}
    ]);
    this.title.setTitle('Futureai Software: Best Software Development Company')
   }
  

  ngOnInit(): void {
  }

}
