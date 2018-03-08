import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css']
})
export class RecordComponent implements OnInit {

  title = 'app';

  public lineChartData: Array<any> = [{ data: [0.8, 0.88, 0.9, 1.1, 1.2, 0.8, 0.85], label: 'Glucose' }];
  public lineChartData2: Array<any> = [{ data: [11, 12, 10, 11, 16, 16, 11], label: 'Blood Pressure' }];
  public lineChartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions: any = {
    responsive: true
  }; public lineChartColors: Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(214,50,21,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }];
  public lineChartLegend: boolean = true;
  public lineChartType: string = 'line';
  public randomize(): void {
    let _lineChartData: Array<any> = new Array(this.lineChartData.length);
    for (let i = 0; i < this.lineChartData.length; i++) {
      _lineChartData[i] = { data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label };
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
      }
    }
    this.lineChartData = _lineChartData;
  }

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }


  about: boolean;
  aboutAnimation: boolean;
  history: boolean;
  historyAnimation: boolean;
  comments: boolean;
  commentsAnimation: boolean;
  contact: boolean;
  contactAnimation: boolean;

  constructor() { }


  ngOnInit() {
    // --- Animation related vars begin
    this.about = true;
    this.history = false;
    this.comments = false;
    this.contact = false;
    this.aboutAnimation = true;
    this.historyAnimation = false;
    this.commentsAnimation = false;
    this.contactAnimation = false;
    // --- Animation related vars end 
  }


  // Animations
  showAbout() {
    this.historyAnimation = false;
    this.commentsAnimation = false;
    this.contactAnimation = false;
    setTimeout(() => {
      this.about = true;
      this.aboutAnimation = true;
      this.history = false;
      this.comments = false;
      this.contact = false;
    }, 650);


  }

  showHistory() {
    this.aboutAnimation = false;
    this.commentsAnimation = false;
    this.contactAnimation = false;
    setTimeout(() => {
      this.about = false;
      this.history = true;
      this.historyAnimation = true;
      this.comments = false;
      this.contact = false;
    }, 650);

  }

  showComments() {
    this.aboutAnimation = false;
    this.historyAnimation = false;
    this.contactAnimation = false;
    setTimeout(() => {
      console.log('comments');
      this.about = false;
      this.history = false;
      this.comments = true;
      this.commentsAnimation = true;
      this.contact = false;
    }, 650);

  }
  showContact() {
    this.aboutAnimation = false;
    this.historyAnimation = false;
    this.commentsAnimation = false;
    setTimeout(() => {
      console.log('contact');
      this.about = false;
      this.history = false;
      this.comments = false;
      this.contact = true;
      this.contactAnimation = true;

    }, 650);

  }

}
