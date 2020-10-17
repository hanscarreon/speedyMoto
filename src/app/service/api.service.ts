import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http : HttpClient,
    private menu : MenuController,
  ) { }

  getRiders(){
    return this.http.get<any>('http://speedymoto.tindahans.online/riders.json')
  }
  openMenu(){
  return   this.menu.open('end');
  }
  getNews(){
    return this.http.get<any>('assets/json/news.json')
  }
  getRsult(){
    return this.http.get<any>('assets/json/result.json')
  }
}
