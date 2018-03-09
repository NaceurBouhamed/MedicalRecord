import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { NgxSmartModalService } from 'ngx-smart-modal';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  camStarted = false;
  selectedDevice = undefined;
  qrResult = "";
  availableDevices = [];

  elementType: 'url' | 'canvas' | 'img' = 'url';
  value: string;

  constructor(private router: Router, public ngxSmartModalService: NgxSmartModalService) { }

  ngOnInit() {

  }


  goToRecord() {
    this.router.navigate(['/record']);
  }


  displayCameras(cams: any[]) {
    this.availableDevices = cams;
    console.log("Devices", cams);
    if (cams && cams.length > 0) {
      this.selectedDevice = cams[0];
      //this.camStarted = true;
    }
  }

  handleQrCodeResult(result: string) {
    this.qrResult = result;
    this.ngxSmartModalService.getModal("myModal").close();
    setTimeout(() => {

      this.router.navigate(['/record']);

    }, 3000);
  }

  onChange(selectedValue: string) {
    console.log("Selection changed", selectedValue);
    this.camStarted = false;
    this.selectedDevice = selectedValue;
    this.camStarted = true;
  }
  qr() {
    this.camStarted = true;
    setTimeout(this.ngxSmartModalService.getModal("myModal").open(), 3000);
  }
  closeCam() {
    this.ngxSmartModalService.getModal("myModal").close();
    this.camStarted = false;
  }





}
