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
    private dataApi : ApiService

  ) { }

  ngOnInit() {
    this.readResult();
  }

  readResult(){
    this.dataApi.getRsult().subscribe((data)=>{
     this.resultData = data.WorldStanding2020;
    })
  }

}
