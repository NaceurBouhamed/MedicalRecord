import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartsModule } from 'ng2-charts';


import { AppComponent } from './app.component';
import { RecordComponent } from './record/record.component';
import { LoginComponent } from './login/login.component';


const appRoutes: Routes = [
  { path: 'record', component: RecordComponent },
  { path: '**', component: LoginComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    RecordComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
