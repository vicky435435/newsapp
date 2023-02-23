import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsapiService {
  public apiKey:any='fdcf1ac8d3e64d99b0a1f7cf8e4bfab5';

  constructor(public http:HttpClient) { }

  getNews(topic: string){
    return this.http.get('https://newsapi.org/v2/everything?q='+topic+'&tesla&from2023-01-23&sortBy=publishedAt&apiKey='+this.apiKey)
  }
}
