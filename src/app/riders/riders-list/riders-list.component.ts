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
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.readRiders();
  }
  

  readRiders(){
    this.dataApi.getRiders().subscribe((data)=>{
        this.riders = data.riders
        console.log(data.riders)
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

}
