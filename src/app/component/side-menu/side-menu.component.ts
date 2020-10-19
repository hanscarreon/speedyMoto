import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent implements OnInit {

  constructor(
    private router : Router,
    private nav : NavController,
    private menu : MenuController

  ) { }

  ngOnInit() {}
  
  naviRoute(routes){
    // this.router.navigate([routes])
    this.nav.navigateForward([routes])
    this.menu.close('end');
  }

}
