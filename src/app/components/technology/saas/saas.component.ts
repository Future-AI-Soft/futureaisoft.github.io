import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
@Component({
  selector: 'app-saas',
  templateUrl: './saas.component.html',
  styleUrls: ['./saas.component.scss']
})
export class SaasComponent implements OnInit {

 
  
  constructor(private meta: Meta, private pageTitle: Title) {
   this.meta.addTags([
     {name: 'description', content: 'FutureaAI Software provides By combining a broad range of technical expertise with an unparalleled commitment to customer satisfaction, Future AI Soft has become an authoritative option for companies looking to develop SaaS applications of various levels of complexity.'},
     {name: 'author', content: 'Future AI Software Development Services Ltd.'},
     {name: 'keywords', content: 'software-as-a-service,software-as-a-service (saas),software-as-a-service definition,software-as-a-service company,software-as-a-service security,software as a service aasb,software as a service agreement checklist,software as a service amazon,software as a service benefits,b s and a software,software as a service diagram,software as a service erp,software as a service for healthcare,software as a service historysoftware as a service hosting,domain,hosting,define service software'}
   ]);
   this.pageTitle.setTitle('Software-as-a-service (SaaS) Development Services || FutureaAI Software')
  }
  ngOnInit(): void {
  }

}
