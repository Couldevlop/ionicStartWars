import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-films',
  templateUrl: './films.page.html',
  styleUrls: ['./films.page.scss'],
})
export class FilmsPage implements OnInit {

  constructor(private navController: NavController, private router: Router) { }

  ngOnInit() {
  }

  openDetails(): void{
    this.router.navigateByUrl('/abs/films/42');
  }

  goToPlanets() {
    this.navController.navigateRoot(`/tabs/planets`)
  }

}
