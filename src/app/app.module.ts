import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { LandingComponent } from './components/landing/landing.component';
import { WorkingWithFaiComponent } from './components/about-us/working-with-fai/working-with-fai.component';
import { TeamComponent } from './components/about-us/team/team.component';
import { TechnologyComponent } from './components/common/technology/technology.component';
import { SaasComponent } from './components/technology/saas/saas.component';
import { JavaComponent } from './components/technology/java/java.component';
import { DotnetComponent } from './components/technology/dotnet/dotnet.component';
import { PythonComponent } from './components/technology/python/python.component';
import { PhpComponent } from './components/technology/php/php.component';
import { DatascienceComponent } from './components/technology/datascience/datascience.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    LandingComponent,
    WorkingWithFaiComponent,
    TeamComponent,
    TechnologyComponent,
    SaasComponent,
    JavaComponent,
    DotnetComponent,
    PythonComponent,
    PhpComponent,
    DatascienceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
