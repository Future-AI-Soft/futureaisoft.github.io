import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
@Component({
  selector: 'app-dotnet',
  templateUrl: './dotnet.component.html',
  styleUrls: ['./dotnet.component.scss']
})
export class DotnetComponent implements OnInit {
  breadcrumbTitle = '.NET Development'
  techTitle = '.NET Development Services'
  serviceDesc = `Since .NET inception in early 2000s, Future AI Soft has been supporting businesses and startups build, upgrade,
  modernize and keep dependable and scalable multi-purpose, cross-platform, cross-device .NET
  solutions and functions for a wide vary of industries.
  .\n
  
  Future AI Soft’s.NET top-notch full-stack software program builders are professional at turning in fast, complicated and
  reliable on-premise and cloud-based .NET internet and cellular applications, IoT and Big Data, and AI
  solutions uniquely tailor-made to our Clients’ commercial enterprise objectives, time constraints, and budgets.`
  servicesTitle = 'Future AI Soft .NET Software Development Services'
  services = [
    '.NET WEB APPLICATION DEVELOPMENT',
    '.NET CLOUD APPLICATIONS DEVELOPMENT',
    '.NET-BASED MOBILE APPLICATION DEVELOPMENT',
    'MACHINE LEARNING AND AI SOLUTIONS',
    'BIG DATA AND PREDICTIVE ANALYTICS',
    'SERVER-SIDE .NET DEVELOPMENT AND BACK-END INTEGRATION'
  ]

  
  
   constructor(private meta: Meta, private pageTitle: Title) {
    this.meta.addTags([
      {name: 'description', content: 'FutureaAI Software provides .NET Development Services.Since .NET inception in early 2000s, Future AI Soft has been supporting businesses and startups build, upgrade, modernize and keep dependable and scalable multi-purpose, cross-platform, cross-device .NET solutions and functions for a wide vary of industries. . Future AI Soft’s.NET top-notch full-stack software program builders are professional at turning in fast, complicated and reliable on-premise and cloud-based .NET internet and cellular applications, IoT and Big Data, and AI solutions uniquely tailor-made to our Clients’ commercial enterprise objectives, time constraints, and budgets. ' },
      {name: 'author', content: 'Future AI Software Development Services Ltd.'},
      {name: 'keywords', content: '.net development services,asp .net development services,microsoft .net development services,c# .net development services,.net development services india,.net development services bangladesh,.net development services usa,.net development services canada,.net development services america,.net development services finland,.net development services suijarland,.net development services pakisthan,.net development services Italy,.net development services Hungary,.net development services Guyana,.net development services Germany,.net development services France,.net development services Denmark,.net development services Costa Rica,.net development services China,.net development services Bahrain,.net development services Austria,.net development services Australia,.net development services Afghanistan, development technologies,software application development,software development firm,software application developer,learn software development,tools for software development,custom software company for .net,custom software company for c#,custom software company for asp.net core,custom software company for asp .net      '}
    ]);
    this.pageTitle.setTitle('.NET Development Services || FutureaAI Software')
   }

  ngOnInit(): void {
  }

}
