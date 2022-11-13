import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
@Component({
  selector: 'app-rfp-submission',
  templateUrl: './rfp-submission.component.html',
  styleUrls: ['./rfp-submission.component.scss']
})
export class RFPSubmissionComponent implements OnInit {

  
  
  constructor(private meta: Meta, private pageTitle: Title) {
   this.meta.addTags([
     {name: 'description', content: 'Submit Your Software Development RFP'},
     {name: 'author', content: 'FutureAI Software Development Services Ltd.'},
     {name: 'keywords', content: 'software development,software services,software design,software development services,software rfp,rfp,saas development,cloud software engineer,mobile software development,front end development services,healthcare software development company,software development in healthcare,building custom software,front end development services'}
   ]);
   this.pageTitle.setTitle('Software Development Services | Submit An RFP || FutureaAI Software')
  }

  ngOnInit(): void {
  }

}
