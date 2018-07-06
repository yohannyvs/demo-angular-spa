import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// Servicio
import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {

  heroe:any = {};

  constructor( private activateRoute:ActivatedRoute, private _heroesService:HeroesService  ) { 
   
    this.activateRoute.params.subscribe( params => { this.heroe = this._heroesService.getHeroe( params['id'] ); } );

  }

}
