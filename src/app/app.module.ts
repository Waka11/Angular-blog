import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HeadComponent } from './main/head/head.component';
import { AddpostComponent } from './main/addpost/addpost.component';
import { AuthorComponent } from './author/author.component';
import { LoginFormComponent } from './author/login-form/login-form.component';
import { LoginListComponent } from './author/login-list/login-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeadComponent,
    AddpostComponent,
    AuthorComponent,
    LoginFormComponent,
    LoginListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
