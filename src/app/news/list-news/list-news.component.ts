import { IonSlides } from '@ionic/angular';
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
    private dataApi : ApiService
  ) { }

  ngOnInit() {
    this.readNews();
  }

  readNews(){
    this.dataApi.getNews().subscribe((data)=>{
      this.newsData = data.news;
      console.log(data.news);
    })
  }
  slideChanged(slides: IonSlides){
    slides.getActiveIndex().then((index: number) => {
      console.log(index);
      this.activeIndex = index
     });
  }
  

}
