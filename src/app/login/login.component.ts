import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  camStarted = false;
  selectedDevice;
  qrResult = '';
  availableDevices = [];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToRecord() {
    console.log('clicked');
    this.router.navigate(['/record']);
  }

  displayCameras(cams: any[]) {
    this.availableDevices = cams;
    if (cams && cams.length > 0) {
      this.selectedDevice = cams[0];
      this.camStarted = true;
    }
  }

  handleQrCodeResult(result: string) {
    this.qrResult = result;
  }

  onChange(selectedValue: string) {
    this.camStarted = false;
    this.selectedDevice = selectedValue;
    this.camStarted = true;
  }

}
