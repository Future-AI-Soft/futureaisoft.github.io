import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  constructor(private meta: Meta, private title: Title) {
    this.meta.addTags([
      {name: 'description', content: ''},
      {name: 'author', content: 'Future AI Software Development Services Ltd.'},
      {name: 'keywords', content: 'Blog, Cloud migration,Data science, Software development,Software development company, DevOps'}
    ]);
    this.title.setTitle('Futureai Software:  blog is home to our posts on topics from software development, DevOps, Healthcare and Life Sciences to AI innovation. Explore more || FutureaAI Software')
   }

  ngOnInit(): void {
  }

}
