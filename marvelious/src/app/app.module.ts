import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimelineLandingComponent } from './timeline-landing/timeline-landing.component';
import { MglTimelineModule } from 'angular-mgl-timeline';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TimelineComponent } from './timeline-landing/timeline/timeline.component';
import { HeroComponent } from './hero/hero.component';
import {MatDialogModule} from '@angular/material/dialog';
import { HeroDialogComponent } from './hero-dialog/hero-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    TimelineLandingComponent,
    TimelineComponent,
    HeroComponent,
    HeroDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MglTimelineModule,
    MatDialogModule
  ],
  providers: [],
  entryComponents: [HeroDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
