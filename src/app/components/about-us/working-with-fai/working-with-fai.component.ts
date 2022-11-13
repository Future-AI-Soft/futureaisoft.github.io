import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
@Component({
  selector: 'app-working-with-fai',
  templateUrl: './working-with-fai.component.html',
  styleUrls: ['./working-with-fai.component.scss']
})
export class WorkingWithFaiComponent implements OnInit {
  
  
  constructor(private meta: Meta, private pageTitle: Title) {
   this.meta.addTags([
    {name: 'description', content: 'FutureaAI Software deliver end-to-end software development, quality assurance and support solutions to clients ranging from Fortune 500 companies to startups in all stages of funding. '},
     {name: 'author', content: 'FutureAI Software Development Services Ltd.'},
     {name: 'keywords', content: 'best companies for software engineers,software design engineer,outsourcing developers,sw engineer,system development engineer,software developer cost,software development team,java software engineer,top software development companies,goals of software engineering,Asp dot net software engineer,offshore software development services,software engineering best practices,software engineering,jobs for software engineers,software services,programmer job	,agile process,software development process,software application development,system software engineer,software development firm,software development companies in usa,software development companies in bangladesh,software development companies in canada,software development companies in uk,software development companies in india,software development companies in Peru,software development companies in Oman,software development companies in North Korea,software development companies in Namibia,software development companies in Malaysia,software development companies in Japan,software development companies in usa,software development companies in Indonesia,software development companies in Hungary,software development companies in Germany,software development companies in Egypt,software development companies in Cambodia,software development companies in United Kingdom,software development companies in Turkey,software development companies in Taiwan,software development companies in Swaziland,software development companies in Sweden,software development companies in Sri Lanka,software development companies in South Africa,software development companies in Philippines,software development companies in pakistan,software development companies in norway,software development companies in new zealand,software development companies in Morocco,software development companies in Germany,software development companies in denmark,software development companies in china,software development companies in Australia,software development companies in Austria,software development companies in Finland,     '}
   ]);
   this.pageTitle.setTitle(' Working with FutureaAI Software || FutureaAI Software')
  }
  ngOnInit(): void {
  }

}
