import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {StudentModule} from "./student/student.module";
import {ShareModule} from "./share/share.module";
import {StudentComponent} from "./student/student.component";

@NgModule({
  declarations: [
    AppComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShareModule,
    StudentModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
