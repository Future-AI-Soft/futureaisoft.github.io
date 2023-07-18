import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  
  
  constructor(private meta: Meta, private pageTitle: Title) {
   this.meta.addTags([
     {name: 'description', content: 'The Power of Our People'},
     {name: 'author', content: 'Future AI Software Development Services Ltd.'},
     {name: 'keywords', content: 'software development,software company,dev engineer,software engineering is,software engineer i,software project,software consultant,custom software development company,developer manager,computer software engineer,outsourcing software development,be in software engineering,software building,developer manager,software services,software programmer,software engineer levels,software outsourcing companies,development technologies,software engineering definition,software engineering projects,lead software engineer,offshore software development,learn software engineering'}
   ]);
   this.pageTitle.setTitle('The Power of Our People || FutureaAI Software')
  }
  ngOnInit(): void {
  }

}
