import { IonSlides, LoadingController } from '@ionic/angular';
import { ApiService } from './../../service/api.service';
import { Component, OnInit, ViewChild } from '@angular/core';
@Component({
  selector: 'app-list-news',
  templateUrl: './list-news.component.html',
  styleUrls: ['./list-news.component.scss'],
})
export class ListNewsComponent implements OnInit {
@ViewChild('slides',{static:false})slides:IonSlides;

newsData : any[];
sliderOne: any;
activeIndex;

sliderOpt = {
  initialSlide: 0,
  slidesPerView: 1,
  autoplay: true,
  speed:700
};

  constructor(
    private dataApi : ApiService,
    private loadingController :  LoadingController
  ) { }

  ngOnInit() {
    this.showLoader()
    this.readNews();
  }

  readNews(){
    this.dataApi.getNews().subscribe((data)=>{
      this.newsData = data.news;
      if(data){
        setTimeout(()=>{ this.showLoader() },1000)
      }
      console.log(data.news);
    })
  }
  slideChanged(slides: IonSlides){
    slides.getActiveIndex().then((index: number) => {
      console.log(index);
      this.activeIndex = index
     });
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
