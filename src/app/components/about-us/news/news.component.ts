import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
  
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

 
  constructor(private meta: Meta, private pageTitle: Title) {
   this.meta.addTags([
     {name: 'description', content: 'Future AI Software and Solutions Ltd Ceased Operations in Bangladesh'},
     {name: 'author', content: 'Future AI Software and Solutions Ltd.'},
     {name: 'keywords', content: 'software news,software development,software services,software development company,software project,custom software development company,custom software,custom software,custom software developer,software all,software team,software developer news'}
   ]);
   this.pageTitle.setTitle('News  || FutureaAI Software')
  }
  ngOnInit(): void {
  }

}
