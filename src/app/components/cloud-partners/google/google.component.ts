import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
@Component({
  selector: 'app-google',
  templateUrl: './google.component.html',
  styleUrls: ['./google.component.scss']
})
export class GoogleComponent implements OnInit {
  partnerTitle: string = 'Google Cloud Platform Services & Solutionss';
  description: string = `As a depended on Google Cloud Platform Partner, FAISS affords end-to-end offerings and consulting for organizations creating and managing options on Google Cloud Platform. We have massive understanding imposing GCP options for our clients, each transferring current functions and constructing cloud-native solutions.`;

  partnerLogo = 'data:image/png;base64,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';

  broadDescription = `Google Cloud Platform is an innovation enabler for your enterprise with effective facts analytics options, future-proof infrastructure, and modern protection capabilities. FAISS skilled GCP engineers will consider your special enterprise needs, present improvement processes, and cloud targets to assist sketch and strengthen scalable and impervious applications, combine DevOps or make feel of Big Data. We’ll assist you take full benefit of GCP stellar merchandise to acquire larger enterprise agility and manage over your improvement and deployment tactics and monetize your data.`;

  serviceTitle: string = 'Google Cloud Services';
  services: any[] = [
    {title: 'GCP Application Development Services', services: ['GCP Application Development', 'Legacy Application Modernization', 'GCP Integration Services', 'GCP Optimization', 'Containerization']},
    {title: 'Cloud Migration', services: ['GCP Native CI/CD', 'Infrastructure as a Code', 'Automation, Orchestration and Testing', 'Software Release Automation on GCP']},
    {title: 'Cloud Managed Services', services: ['Infrastructure Modernization', '24x7 Managed Services']},
    {title: 'Business Intelligence and Analytics on GCP', services: ['Data Warehousing on GCP', 'Business Intelligence Solutions', 'Teradata Migration', 'Predictive Analytics', 'Marketing Analytics Platforms on GCP', 'Genomics Data Analytics']}
  ];
 
  
   constructor(private meta: Meta, private pageTitle: Title) {
    this.meta.addTags([
      {name: 'description', content: 'As a depended on Google Cloud Platform Partner, FAISS affords end-to-end offerings and consulting for organizations creating and managing options on Google Cloud Platform. We have massive understanding imposing GCP options for our clients, each transferring current functions and constructing cloud-native solutions.'},
      {name: 'author', content: 'Future AI Software and Solutions Ltd'},
      {name: 'keywords', content: 'software development,the google cloud,cloud company,google cloud platform,cloud services,google platform,google cloud server,google cloud computing,platform services,google cloud services,cloud platform,gcp google,gcp data analytics,google cloud security,google cloud gcp,cloud development,gcp compute,google compute platform,google cloud computing services,google cloud customer service,google cloud customer service,google cloud partner,cloud business,google cloud engineer,google cloud products,google cloud project,cloud application development,google cloud developer,google cloud migration,cloud it services,cloud services company,google cloud cloud,google cloud computing engine,google cloud coding,google cloud offerings,gcp cloud services,cloud application development company,cloud platform software,google google cloud'}
    ]);
    this.pageTitle.setTitle('Google Cloud Platform Services & Solutionss || FutureaAI Software')
   }

  ngOnInit(): void {
  }

}
