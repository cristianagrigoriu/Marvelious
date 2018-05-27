import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimelineLandingComponent } from './timeline-landing/timeline-landing.component';
import { MglTimelineModule } from 'angular-mgl-timeline';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TimelineComponent } from './timeline-landing/timeline/timeline.component';
import { HeroComponent } from './hero/hero.component';

@NgModule({
  declarations: [
    AppComponent,
    TimelineLandingComponent,
    TimelineComponent,
    HeroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MglTimelineModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
