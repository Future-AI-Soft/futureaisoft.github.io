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
      {name: 'description', content: 'FutureAI Soft is a premium Cloud Software Development Company specializing in the development of time-sensitive and innovative solutions.'},
      {name: 'author', content: 'FutureAI Software Development Services Ltd.'},
      {name: 'keywords', content: 'Web Application, Custom Software, Mobile Application, DevOps'}
    ]);
    this.title.setTitle('Home Page')
   }

  

  ngOnInit(): void {
  }

}
