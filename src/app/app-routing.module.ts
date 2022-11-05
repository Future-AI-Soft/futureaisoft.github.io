import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamComponent } from './components/about-us/team/team.component';
import { WorkingWithFaiComponent } from './components/about-us/working-with-fai/working-with-fai.component';
import { AwsComponent } from './components/cloud-partners/aws/aws.component';
import { AzureComponent } from './components/cloud-partners/azure/azure.component';
import { GoogleComponent } from './components/cloud-partners/google/google.component';
import { CloudPartnersComponent } from './components/common/cloud-partners/cloud-partners.component';
import { TechnologyComponent } from './components/common/technology/technology.component';
import { LandingComponent } from './components/landing/landing.component';
import { ApplicationMaintananceAndSupportComponent } from './components/services/application-maintanance-and-support/application-maintanance-and-support.component';
import { CustomSoftwareComponent } from './components/services/custom-software/custom-software.component';
import { DevopsServiceComponent } from './components/services/devops-service/devops-service.component';
import { FrontendUiUxComponent } from './components/services/frontend-ui-ux/frontend-ui-ux.component';
import { MobileApplicationComponent } from './components/services/mobile-application/mobile-application.component';
import { QaAndTestingServicesComponent } from './components/services/qa-and-testing-services/qa-and-testing-services.component';
import { DatascienceComponent } from './components/technology/datascience/datascience.component';
import { DotnetComponent } from './components/technology/dotnet/dotnet.component';
import { JavaComponent } from './components/technology/java/java.component';
import { PhpComponent } from './components/technology/php/php.component';
import { PythonComponent } from './components/technology/python/python.component';
import { SaasComponent } from './components/technology/saas/saas.component';

const routes: Routes = [
  {path: '', component: LandingComponent},
  { path: 'working-with-fai', component: WorkingWithFaiComponent },
  { path: 'team', component: TeamComponent },
  { path: 'saas-technology', component: SaasComponent },
  { path: 'java-technology', component: JavaComponent },
  { path: 'dotnet-technology', component: DotnetComponent },
  { path: 'php-technology', component: PhpComponent },
  { path: 'ds-technology', component: DatascienceComponent },
  { path: 'py-technology', component: PythonComponent },
  { path: 'custom-soft-dev-services', component: CustomSoftwareComponent },
  { path: 'mobile-app-dev-services', component: MobileApplicationComponent },
  { path: 'qa-testing-services', component: QaAndTestingServicesComponent },
  { path: 'app-maintanance-and-support', component: ApplicationMaintananceAndSupportComponent },
  { path: 'front-end-and-ux-design', component: FrontendUiUxComponent },
  { path: 'devops-service', component: DevopsServiceComponent },
  { path: 'cloud-aws-service', component: AwsComponent },
  { path: 'cloud-google-service', component: GoogleComponent },
  { path: 'cloud-azure-service', component: AzureComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
