import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartsModule } from 'ng2-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { RecordComponent } from './record/record.component';
import { LoginComponent } from './login/login.component';

import { NgxQRCodeModule } from 'ngx-qrcode2';

import { NgxSmartModalModule, NgxSmartModalService } from 'ngx-smart-modal';
import { NgxZxingModule } from 'ngx-zxing';


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
    BrowserAnimationsModule,
    NgxQRCodeModule,
    NgxSmartModalModule.forRoot(),
    NgxZxingModule.forRoot(),
    ChartsModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [NgxSmartModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
