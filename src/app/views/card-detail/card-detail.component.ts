import { Component, OnInit } from '@angular/core';
import { PokemonTCG } from 'pokemon-tcg-sdk-typescript';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.sass']
})
export class CardDetailComponent implements OnInit {

  card: any;

  constructor(private _route: ActivatedRoute) { }

  ngOnInit() {
    this._findCardDetails(this._route.snapshot.paramMap.get('id'));
  }

  private _findCardDetails(id) {
    PokemonTCG.Card.find(id)
      .then(result => {
        this.card = result;
        console.log(result);
      })
      .catch(error => {
        alert(JSON.stringify(error));
      });
  }

}
