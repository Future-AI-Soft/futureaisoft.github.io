import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamComponent } from './components/about-us/team/team.component';
import { WorkingWithFaiComponent } from './components/about-us/working-with-fai/working-with-fai.component';
import { TechnologyComponent } from './components/common/technology/technology.component';
import { LandingComponent } from './components/landing/landing.component';
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
