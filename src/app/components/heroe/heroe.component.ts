import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

import { HeroesService } from '../../services/heroes.service';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  ]
})
export class HeroeComponent implements OnInit {

  heroe:any= {};

  constructor(private activatedRouter: ActivatedRoute,
              private heroesService: HeroesService
              ) {
    this.activatedRouter.params.subscribe( params =>{
      console.log( params['id']);
      this.heroe = this.heroesService.getHeroe( params['id']);
      console.log( this.heroe);

    });
   }

  ngOnInit(): void {
  }

}
