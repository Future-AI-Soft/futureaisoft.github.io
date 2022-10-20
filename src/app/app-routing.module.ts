import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamComponent } from './components/about-us/team/team.component';
import { WorkingWithFaiComponent } from './components/about-us/working-with-fai/working-with-fai.component';
import { LandingComponent } from './components/landing/landing.component';

const routes: Routes = [
  {path: '', component: LandingComponent},
  { path: 'working-with-fai', component: WorkingWithFaiComponent },
  { path: 'team', component: TeamComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
