import { LoadingController } from '@ionic/angular';
import { ApiService } from './../../service/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.scss'],
})
export class ResultListComponent implements OnInit {
resultData : any[]
  constructor(
    private dataApi : ApiService,
    private loadingController : LoadingController

  ) { }

  ngOnInit() {
    this.showLoader();
    this.readResult();
  }

  readResult(){
    this.dataApi.getRsult().subscribe((data)=>{
     this.resultData = data.WorldStanding2020;
     setTimeout(()=>{ this.hideLoader() },1000);
    })
  }

  showLoader() {
    this.loadingController.create({
      message: 'Please wait...'
    }).then((res) => {
      res.present();
    });

  }
  // Show the loader for infinite time

  hideLoader() {
    this.loadingController.dismiss().then((res) => {
      console.log('Loading dismissed!', res);
    }).catch((error) => {
      console.log('error', error);
    });
  }
  // Hide the loader if already created otherwise return error


}
