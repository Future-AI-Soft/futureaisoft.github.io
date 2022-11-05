import { Component, EventEmitter, HostBinding, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  @HostBinding('class') classes: string = '';
  @Input() breadcrumbTitle: string = 'Custom Software Development';
  @Input() title: string = 'Custom Software Development';
  @Input() description: string = `FutureAI Soft is a premier full-service Custom Software Development, Cloud Engineering, QA and DevOps
  company, specializing in the development of time-sensitive and innovative solutions. To every
  project, FutureAI Soft brings a combination of domain expertise, exceptional engineering talent, rigorous
  Agile development processes, commitment to protection of client’s IP and accountability of a US
  company with over two decades of impeccable reputation.`;
  @Input() serviceTitle: string = 'Custom Software Development Services';
  @Input() services: any[] = [
    'Discovery and Analysis',
    'Architecture and UX/UI design',
    'POC and MVP development',
    'Custom Software Development',
    'QA Testing and Automation',
    'DevOps Implementation',
    'Cloud Migration, Optimization and Maintenance',
    'Support and Maintenance',
  ];
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
