"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CardDetailComponent = void 0;
var core_1 = require("@angular/core");
var pokemon_tcg_sdk_typescript_1 = require("pokemon-tcg-sdk-typescript");
var CardDetailComponent = /** @class */ (function () {
    function CardDetailComponent(_route) {
        this._route = _route;
    }
    CardDetailComponent.prototype.ngOnInit = function () {
        this._findCardDetails(this._route.snapshot.paramMap.get('id'));
    };
    CardDetailComponent.prototype._findCardDetails = function (id) {
        var _this = this;
        pokemon_tcg_sdk_typescript_1.PokemonTCG.Card.find(id)
            .then(function (result) {
            _this.card = result;
            console.log(result);
        })["catch"](function (error) {
            alert(JSON.stringify(error));
        });
    };
    CardDetailComponent = __decorate([
        core_1.Component({
            selector: 'app-card-detail',
            templateUrl: './card-detail.component.html',
            styleUrls: ['./card-detail.component.sass']
        })
    ], CardDetailComponent);
    return CardDetailComponent;
}());
exports.CardDetailComponent = CardDetailComponent;
