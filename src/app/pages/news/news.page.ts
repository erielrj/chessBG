import { Component, OnInit } from '@angular/core';

// 1. Importa
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  // 3. Atributos
  private apiKey = '0420c6b9c66e4a0eb5c045f951c792ec'; //--> newsapi.org
  private apiQuery = "xadrez" // --> noticias sobre...
  private apiItems = 10; // --> Exibir x noticias (máx. 20)
  private apiURL = `https://newsapi.org/v2/everything?apiKey=${this.apiKey}&source=google-news-br&language=pt&q=${this.apiQuery}`
  private newsList : any;
  constructor(
    // 2. Injeta
    private http: HttpClient
  ) { }

  ngOnInit() {
    // 4. Obtendo as noticias da API REST JSON usando HTTP
    this.http.get(this.apiURL).subscribe(
      (data: any) => {

        // 5. atribui a newsList
        this.newsList = data.articles.slice(0, this.apiItems);

      }
    );
  }

  readNews(url: string){
    window.open(url);
  }
}
