import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TimelineLandingComponent } from './timeline-landing/timeline-landing.component';

const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  component: TimelineLandingComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
