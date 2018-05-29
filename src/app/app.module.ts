import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router'
import { HttpModule } from '@angular/http';
import { DataService } from './data.service'

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { PublishComponent } from './publish/publish.component';
import { VoteComponent } from './vote/vote.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const appRoutes: Routes = [

  {path:'', component:HomeComponent},

  {path:'publish', component:PublishComponent},

  {path:'register', component:RegisterComponent},

  {path:'vote', component:VoteComponent},

  {path:'login', component:LoginComponent}
  ];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    PublishComponent,
    VoteComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpModule
    
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
