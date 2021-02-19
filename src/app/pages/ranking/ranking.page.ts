import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { AngularFirestore } from '@angular/fire/firestore';

export class Player {
  public name: string;
  public rank: string;
  public rating: string;
  public country: string;
  public article: string;
}

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.page.html',
  styleUrls: ['./ranking.page.scss'],
})
export class RankingPage implements OnInit {
  public ranking: Observable<Player[]>;

  private orderByRankAsc: boolean;
  private orderByNameAsc: boolean;
  private orderByCountryAsc: boolean;
  private orderByRatingAsc: boolean;

  constructor(private afs: AngularFirestore) {
    this.orderByRankAsc = true;
    this.orderByNameAsc = true;
    this.orderByCountryAsc = true;
    this.orderByRatingAsc = true;
  }

  ngOnInit() {
    this.ranking = this.afs
      .collection<Player>('ranking', (ref) => ref.orderBy('rank', 'asc'))
      .valueChanges();
  }

  orderByRank() {
    this.ranking = null;

    setTimeout(() => {
      this.ranking = this.afs
        .collection<Player>('ranking', (ref) =>
          ref.orderBy('rank', this.orderByRankAsc ? 'desc' : 'asc')
        )
        .valueChanges();

      this.orderByRankAsc = !this.orderByRankAsc;
    }, 300);
  }

  orderByName() {
    this.ranking = null;

    setTimeout(() => {
      this.ranking = this.afs
        .collection<Player>('ranking', (ref) =>
          ref.orderBy('name', this.orderByNameAsc ? 'desc' : 'asc')
        )
        .valueChanges();

      this.orderByNameAsc = !this.orderByNameAsc;
    }, 300);
  }

  orderByCountry() {
    this.ranking = null;

    setTimeout(() => {
      this.ranking = this.afs
        .collection<Player>('ranking', (ref) =>
          ref.orderBy('country', this.orderByCountryAsc ? 'desc' : 'asc')
        )
        .valueChanges();

      this.orderByCountryAsc = !this.orderByCountryAsc;
    }, 300);
  }

  orderByRating() {
    this.ranking = null;

    setTimeout(() => {
      this.ranking = this.afs
        .collection<Player>('ranking', (ref) =>
          ref.orderBy('rating', this.orderByRatingAsc ? 'desc' : 'asc')
        )
        .valueChanges();

      this.orderByRatingAsc = !this.orderByRatingAsc;
    }, 300);
  }
}
