import { LoadingController } from '@ionic/angular';
import { ApiService } from './../../service/api.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-riders-list',
  templateUrl: './riders-list.component.html',
  styleUrls: ['./riders-list.component.scss'],
})
export class RidersListComponent implements OnInit {
  riders: any[];
  automaticClose = false;

  constructor(
    private dataApi : ApiService,
    private http: HttpClient,
    private loadingController: LoadingController

  ) { }

  ngOnInit() {
    this.showLoader()
    this.readRiders();
  }
  

  readRiders(){
    this.dataApi.getRiders().subscribe((data)=>{
        this.riders = data.riders
        console.log(data.riders)
        if(data){
          setTimeout(()=>{ this.hideLoader() },1000)
        }
    })
  }

  toggleSection(index) {
    this.riders[index].open = !this.riders[index].open;
    // console.log( this.riders[index].open)
    // console.log( index)

    // if (this.automaticClose && this.riders[index].open) {
    //   this.riders
    //   .filter((item, itemIndex) => itemIndex != index)
    //   .map(item => item.open = false);
    // }
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
