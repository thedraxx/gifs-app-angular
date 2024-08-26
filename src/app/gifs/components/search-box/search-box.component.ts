import { Component,ElementRef,ViewChild } from '@angular/core';
import { GifService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent {




  @ViewChild("txtBuscar")
  public tagInput!:ElementRef<HTMLInputElement>;

  constructor(private gifService: GifService) {}

    public searchTag(): void {
      const newTag = this.tagInput.nativeElement.value;

      this.gifService.searchTag(newTag);

      this.tagInput.nativeElement.value = '';

    }
}
