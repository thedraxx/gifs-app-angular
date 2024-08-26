import { Component } from '@angular/core';
import { GifService } from '../../services/gifs.service';
import { Gif } from '../../interface/gifs.interface';

@Component({
  selector: 'gifs-home-page',
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {

  constructor(private gifService:GifService) { }


  get gifs(): Gif[] {
    return this.gifService.gifsList;
  }

}
