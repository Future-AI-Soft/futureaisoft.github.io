import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit {

  constructor(private meta: Meta, private pageTitle: Title) {
    this.meta.addTags([
      {name: 'description', content: 'To learn more about our innovative software development solutions, and our highly competitive pricing models, please contact us here. To send us an RFP, simply upload your document using the form below.'},
      {name: 'author', content: 'FutureAI Software Development Services Ltd.'},
      {name: 'keywords', content: 'Contact Us,Find Software Company, AZUR, DevOps,software development,software company,software services,outsourcing software development,software development is,software outsourcing companies,development programming,software development firm,software application developer,software engineering company,learn software development,software engineering consultancy,director of software development,outsource programming'}
    ]);
    this.pageTitle.setTitle('Contact Us || FutureaAI Software')
   }

  ngOnInit(): void {
  }

}
