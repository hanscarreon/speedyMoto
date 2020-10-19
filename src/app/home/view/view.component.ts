import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
})
export class ViewComponent implements OnInit {

  constructor(
    private router : Router,
    private loadingController: LoadingController,
    private nav: NavController
  ) { }

  ngOnInit() {}

  navigationRoute(route){
    // this.nav.navigateForward([route])
    // this.router.navigate([route])
    this.nav.navigateForward([route])
  }
 
  async realoadData() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Fetching Data...',
      duration: 2000
    });
    await loading.present();
    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
    window.location.reload();
  }

}
