import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Meta, Title } from '@angular/platform-browser';
import { FaissService } from 'src/app/service/faiss.service';

import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit {
  
  constructor(private meta: Meta, private pageTitle: Title,private faisssService: FaissService,private http: HttpClient) {
    this.meta.addTags([
      {name: 'description', content: 'To learn more about our innovative software development solutions, and our highly competitive pricing models, please contact us here. To send us an RFP, simply upload your document using the form below.'},
      {name: 'author', content: 'Future AI Software Development Services Ltd.'},
      {name: 'keywords', content: 'Contact Us,Find Software Company, AZUR, DevOps,software development,software company,software services,outsourcing software development,software development is,software outsourcing companies,development programming,software development firm,software application developer,software engineering company,learn software development,software engineering consultancy,director of software development,outsource programming'}
    ]);
    this.pageTitle.setTitle('Contact Us || FutureaAI Software')
   }

   faissEmail='business@futureaisoft.com';
   contactForm = new FormGroup({ 
    first_name: new FormControl("", [Validators.required]),
    last_name: new FormControl("", [Validators.required]),
    phone: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required]),
    message: new FormControl([]),
    org_name: new FormControl([]),
  
  })


  scriptURL = 'https://script.google.com/macros/s/AKfycbxPlb-ekcIxnyIeTgVYzAKM591bQQrgpypGEzYStWglEubFtPsl0pcUd6MOFOVKOAr2/exec';

  

  
  ngOnInit(): void {
  }
  get first_name() {
    return this.contactForm.get('first_name')
  }
  get last_name() {
    return this.contactForm.get('last_name')
  }
  get phone() {
    return this.contactForm.get('phone')
  }
  get email() {
    return this.contactForm.get('email')
  }
  get message() {
    return this.contactForm.get('message')
  }
  get org_name() {
    return this.contactForm.get('org_name')
  }

 

  contactFormSubmit() {
    debugger;
    if (this.contactForm.valid) {
 
      this.faisssService.saveContact(this.contactForm.value)
      .then(res=>{
        debugger;
        alert("Thanks for your kind interest.")
        this.contactForm.reset();
      })
      .catch(err => {
        console.log(err);
        alert("Something went wrong, Please try again");
       // this.messageService.add({severity: 'error', summary: 'Unable to Save!', detail: err});
      
      })
      
     
    }else{
      alert("Something went wrong, Please try again");
    }
  }

  // onSubmit(): void {
  //   if (this.contactForm.valid) {
  //     // Handle form submission here
  //     this.http.post(this.scriptURL, this.contactForm.value)
  //       .subscribe(
  //         response => {
  //           alert('Thank you! Your form is submitted successfully.');
  //           this.contactForm.reset();
  //         },
  //        // error => console.error('Error!', error.message)
  //       );
  //   }
  // }

  onSubmit(): void {
    if (this.contactForm.valid) {
      const formData = new FormData();
     
      Object.keys(this.contactForm.value).forEach(key => {
        formData.append(key, this.contactForm.value[key]);
      });

    
      this.http.post(this.scriptURL, formData)
        .subscribe(
          () => {
            alert('Thank you! Your form is submitted successfully.');
            this.contactForm.reset();
          },
          error => {
            console.error('Error!', error);
            // Handle error as needed
          }
        );
    }
  }

}
