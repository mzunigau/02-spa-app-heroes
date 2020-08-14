import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heore-tarjeta',
  templateUrl: './heore-tarjeta.component.html',
  styleUrls: ['./heore-tarjeta.component.css']
})
export class HeoreTarjetaComponent implements OnInit {

 @Input( ) heroe: any = {};
 @Input ( ) index: number;

 @Output( ) heroeSelecionado: EventEmitter<number>;

  constructor(private router: Router) { 
    this.heroeSelecionado = new EventEmitter();
  }

  ngOnInit(): void {
  }

  verHeroe( ){
    // console.log( this.index );
    this.router.navigate(['/heroe', this.index ]);

    // this. heroeSelecionado.emit( this.index );

  }

}
