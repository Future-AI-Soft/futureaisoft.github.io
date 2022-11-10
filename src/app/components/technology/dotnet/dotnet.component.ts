import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dotnet',
  templateUrl: './dotnet.component.html',
  styleUrls: ['./dotnet.component.scss']
})
export class DotnetComponent implements OnInit {
  breadcrumbTitle = '.NET Development'
  techTitle = '.NET Development Services'
  serviceDesc = `Since .NET inception in early 2000s, FutureAI Soft has been supporting businesses and startups build, upgrade,
  modernize and keep dependable and scalable multi-purpose, cross-platform, cross-device .NET
  solutions and functions for a wide vary of industries.
  .\n
  
  FutureAI Soft’s.NET top-notch full-stack software program builders are professional at turning in fast, complicated and
  reliable on-premise and cloud-based .NET internet and cellular applications, IoT and Big Data, and AI
  solutions uniquely tailor-made to our Clients’ commercial enterprise objectives, time constraints, and budgets.`
  servicesTitle = 'FutureAI Soft .NET Software Development Services'
  services = [
    '.NET WEB APPLICATION DEVELOPMENT',
    '.NET CLOUD APPLICATIONS DEVELOPMENT',
    '.NET-BASED MOBILE APPLICATION DEVELOPMENT',
    'MACHINE LEARNING AND AI SOLUTIONS',
    'BIG DATA AND PREDICTIVE ANALYTICS',
    'SERVER-SIDE .NET DEVELOPMENT AND BACK-END INTEGRATION'
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
