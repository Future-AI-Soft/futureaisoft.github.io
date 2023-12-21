import { Component, EventEmitter, HostBinding, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss']
})
export class TechnologyComponent implements OnInit {

  @HostBinding('class') classes: string = '';
  @Input() bgImagePath: string = '/assets/about/sas-bg.png';
  @Input() breadcrumbTitle: string = 'SaaS Software Development';
  @Input() techTitle: string = 'Software-as-a-service (SaaS) Development Services';
  @Input() serviceDesc: string = 'By combining a broad range of technical expertise with an unparalleled commitment to customer satisfaction, FAISS has become an authoritative option for companies looking to develop SaaS applications of various levels of complexity.';
  @Input() servicesTitle: string = 'SaaS Development Services';
  @Input() services: any[] = ['Custom SaaS Software Development','SaaS Mobile App Development','Platform Design and Architecture','Front-end development and UX/UI Design','Third-Party Integrations','Custom APIs','Analytics and Data Management','Cloud Engineering Services for SaaS solutions'];
  @Output() valueChange = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
    const chunkSize = this.services.length>=4? 4: this.services.length;
    let newServices = this.services; 
    this.services = [];
    for (let i = 0; i < newServices.length; i += chunkSize) {
        this.services.push(newServices.slice(i, i + chunkSize));
    }
    console.log(this.services);
    
  }

}
