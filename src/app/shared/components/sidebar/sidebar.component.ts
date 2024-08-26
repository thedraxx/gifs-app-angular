import { Component } from '@angular/core';
import { GifService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'share-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  constructor(private gifService: GifService) {}

  public get tags(): string[] {
    return this.gifService.tagHistory;
  }

  public searchTag(tag: string): void {
    this.gifService.searchTag(tag);
  }

}
