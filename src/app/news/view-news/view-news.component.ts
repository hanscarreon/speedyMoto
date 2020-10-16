import { ApiService } from './../../service/api.service';
import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-view-news',
  templateUrl: './view-news.component.html',
  styleUrls: ['./view-news.component.scss'],
})
export class ViewNewsComponent implements OnInit {

  constructor(
    private menu : MenuController,
    private api : ApiService
  ) { }

  ngOnInit() {}

  openMenu1(){
    this.api.openMenu();
  }

}
