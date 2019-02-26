import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from 'selenium-webdriver/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.page.html',
  styleUrls: ['./film-details.page.scss'],
})
export class FilmDetailsPage implements OnInit {

  filmId = null;
  films: Observable<any>;

  constructor(private activatedRoute: ActivatedRoute, public http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.filmId = this.activatedRoute.snapshot.paramMap.get("id");
    this.films = this.http.get('https://swapi.co/api/films');
    this.films.subscribe(data => {
      console.log('my data:', data);
    });
  }

}
