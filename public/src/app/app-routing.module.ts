import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AllRestComponent } from './all-rest/all-rest.component';
import { NewRestComponent } from './new-rest/new-rest.component';
import { EditRestComponent } from './edit-rest/edit-rest.component';
import { ShowRestComponent } from './show-rest/show-rest.component';
import { NewReviewComponent } from './new-review/new-review.component';

const routes: Routes = [
   { path: 'restaurants', component: AllRestComponent },
   { path: 'restaurants/new', component: NewRestComponent },
   { path: 'restaurants/:id', component: ShowRestComponent },
   { path: 'restaurants/:id/edit', component: EditRestComponent },
   { path: 'restaurants/:id/review', component: NewReviewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
