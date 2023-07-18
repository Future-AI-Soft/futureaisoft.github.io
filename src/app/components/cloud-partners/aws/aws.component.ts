import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
  
@Component({
  selector: 'app-aws',
  templateUrl: './aws.component.html',
  styleUrls: ['./aws.component.scss']
})
export class AwsComponent implements OnInit {

  
   constructor(private meta: Meta, private pageTitle: Title) {
    this.meta.addTags([
      {name: 'description', content: 'FutureaAI Software provides AWS Development Services & Solutions FUEL YOUR BUSINESS GROWTH WITH SECURE, ROBUST AND SCALABLE SOLUTIONS ON AWS'},
      {name: 'author', content: 'Future AI Software Development Services Ltd.'},
      {name: 'keywords', content: 'software development,application development,software project,aws developer,saas development,Drive more traffic to product listings,AWS High or low price,Amazon sales rank,aws scale,aws architecture,aws account,aws advanced networking,aws book,aws cloud,aws certified developer associate,aws courses,aws digital scale,aws devops,aws developer associate,aws developer associate,aws in action,aws java,aws advanced networking,aws account'}
    ]);
    this.pageTitle.setTitle('AWS Development Company || FutureaAI Software')
   }

  ngOnInit(): void {
  }

}
