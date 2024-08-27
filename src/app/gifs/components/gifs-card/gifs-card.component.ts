import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interface/gifs.interface';

@Component({
  selector: 'gifs-card',
  templateUrl: './gifs-card.component.html',
})

export class GifsCardComponent implements OnInit {

  ngOnInit(): void {
    if(this.gif == undefined){
      throw new Error("No hay nada que mostrar");
    }
  }

  @Input()
  public gif!:Gif; // Recibe un objeto de tipo Gif





}
