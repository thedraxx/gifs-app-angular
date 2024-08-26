import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, Gifs } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})

export class GifService {

  public gifsList : Gif[] = [];


  private apiKey = 'hpMjvx4h7pistAIxh9W0esQUn6V2cIYh'

  private serviceURL = "https://api.giphy.com/v1/gifs"


  private tagsHistory: string[] = [];

  constructor(private http: HttpClient) {

    this.readLocalStorage();

    if (localStorage.getItem('lastSearch')) {
      this.gifsList = JSON.parse(localStorage.getItem('lastSearch')!);
    }


    if (this.tagsHistory.length > 0) {
      this.searchTag(this.tagsHistory[0]);
    }
  }

  get tagHistory(): string[] {
    return [...this.tagsHistory];
  }


  private organizeHistory(tag:string): void {
    tag = tag.toLowerCase();

    if (this.tagsHistory.includes(tag)) {
      this.tagsHistory = this.tagsHistory.filter(tagHistory => tagHistory !== tag);
    }
    this.tagsHistory.unshift(tag);
    this.tagsHistory = this.tagsHistory.splice(0, 10);

    this.saveLocalStorage();
  }


  private saveLocalStorage(): void {
    localStorage.setItem('tags', JSON.stringify(this.tagsHistory));
  }

  private readLocalStorage(): void {
    if (localStorage.getItem('tags')) {
      this.tagsHistory = JSON.parse(localStorage.getItem('tags')!);
    }
  }

  searchTag(tag:string): void {

    console.log(tag);

    if (tag.length === 0) return;

    this.organizeHistory(tag);

    const params = new HttpParams()
    .set('api_key', this.apiKey)
    .set('q', tag)
    .set('limit', '10')
    .set('offset', '0')


    this.http.get<Gifs>(`${this.serviceURL}/search`, {params})
    .subscribe((response) => {
      console.log(response);
      this.gifsList = response.data;

      // console.log(this.gifsList);
    });




    console.log(this.tagsHistory);

  }

}
