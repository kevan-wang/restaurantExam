import { RootService } from "./root.service";
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//  import route components here.  EXAMPLE:
//  import { AlphaComponent } from './alpha/alpha.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllRestComponent } from './all-rest/all-rest.component';
import { NewRestComponent } from './new-rest/new-rest.component';
import { EditRestComponent } from './edit-rest/edit-rest.component';
import { ShowRestComponent } from './show-rest/show-rest.component';
import { NewReviewComponent } from './new-review/new-review.component';

@NgModule({
  declarations: [
    AppComponent,
    AllRestComponent,
    NewRestComponent,
    EditRestComponent,
    ShowRestComponent,
    NewReviewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [RootService],
  bootstrap: [AppComponent]
})
export class AppModule { }
