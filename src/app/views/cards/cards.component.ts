import { Component, OnInit } from '@angular/core';
import { PokemonTCG } from 'pokemon-tcg-sdk-typescript';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.sass']
})
export class CardsComponent implements OnInit {

  name: string;
  cardList: any[];

  constructor(private _router: Router) { }

  cardDetails(id: string) {

    this._router.navigate(['/detalhes', id]);

  }

  searchByName(name: string) {
    let params: PokemonTCG.IQuery[] = [{ name: 'name', value: name }];
    PokemonTCG.Card.where(params)
      .then(cards => {
        this.cardList = cards;
      })
      .catch(error => {
        alert(JSON.stringify(error));
      });
  }

  getCardsOrderByName() {
    PokemonTCG.Card.all()
      .then(cards => {
        this.cardList = cards.sort((a, b) => {
          if (a.name > b.name) {
            return 1;
          } else if (a.name < b.name) {
            return -1;
          }
          return 0;
        }
        );
      })
      .catch(error => {
        alert(JSON.stringify(error));
      });
  }

  ngOnInit() {
    this.getCardsOrderByName();
  }

}
