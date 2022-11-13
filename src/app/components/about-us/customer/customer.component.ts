import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  
  constructor(private meta: Meta, private pageTitle: Title) {
    this.meta.addTags([
      {name: 'description', content: 'FutureaAI Software In over two decades Kanda has met the demanding needs for hundreds of clients – from one person with an idea to billion dollar enterprise with a key initiative, FutureaAI Software is Trusted by 350+ Companies'},
      {name: 'author', content: 'FutureAI Software Development Services Ltd.'},
      {name: 'keywords', content: 'software as a service,ai software,servicing software	,software and services,it service software,ais software,service to software,ltd software,service based software,ai based software,software ltd,ai based services,software servicing,as a service software,software with ai'}
    ]);
    this.pageTitle.setTitle('Custom Software Development Outsourcing Customers || FutureaAI Software')
   }

  ngOnInit(): void {
  }

}
