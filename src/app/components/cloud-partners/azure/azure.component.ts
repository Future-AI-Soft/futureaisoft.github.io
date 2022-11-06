import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-azure',
  templateUrl: './azure.component.html',
  styleUrls: ['./azure.component.scss']
})
export class AzureComponent implements OnInit {
  
  partnerTitle: string = 'Microsoft Azure Services';
  description: string = `Kanda provides end-to-end custom software development, cloud migration, engineering, and
  DevOps services for companies developing and managing applications on Microsoft Azure. We help
  clients take full advantage of Microsoft Azure platform whether they are looking to migrate existing
  applications, modernize legacy systems or develop cloud-native solutions.`;

  partnerLogo = 'data:image/png;base64,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';

  broadDescription = `Microsoft Azure has revolutionized the way companies develop and deploy applications by significantly reducing
  infrastructure costs, enabling on-demand scalability, ease of use, cost-efficiency and flexibility. With an extensive array of
  on-demand global storage, database, analytics, and deployment products and services Microsoft Azure allows to build
  high-performance solutions tailored to unique business objectives, budgets and needs.
  
  Microsoft Azure Services enables businesses to bring innovative solutions to the market fast and stay ahead of the
  competition.`;

  serviceTitle: string = 'Microsoft Azure Services';
  services: any[] = [
    {title: 'Azure Application Development Services', services: ['Microsoft Azure Application Development', 'Legacy Application Modernization', 'Azure Integration Services', 'Cloud Optimization', 'Application Containerization']},
    {title: 'Cloud Migration', services: ['On-Premises, AWS, Azure migration to Microsoft Azure Platform', 'Hybrid Cloud with Kubernetes']},
    {title: 'Microsoft Azure DevOps Services', services: ['CI/CD Implementation', 'Infrastructure as a Code', 'Quality Assurance, Automation, Orchestration and Testing', 'Software Release Automation on Microsoft Azure Platform']},
    {title: 'Business Intelligence and Analytics on Azure', services: ['Microsoft Azure Data Warehousing', 'Business Intelligence Solutions', 'Predictive Analytics']}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
