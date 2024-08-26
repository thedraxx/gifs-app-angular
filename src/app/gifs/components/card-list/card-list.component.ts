import { Component, Input } from '@angular/core';
import { Gif } from '../../interface/gifs.interface';

@Component({
  selector: 'gif-card-list',
  templateUrl: './card-list.component.html',
})
export class CardListComponent {


  @Input()
  public gifs: Gif[] = [];


}
