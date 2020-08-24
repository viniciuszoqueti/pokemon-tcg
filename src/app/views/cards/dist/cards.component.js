"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CardsComponent = void 0;
var core_1 = require("@angular/core");
var pokemon_tcg_sdk_typescript_1 = require("pokemon-tcg-sdk-typescript");
var CardsComponent = /** @class */ (function () {
    function CardsComponent(_router) {
        this._router = _router;
    }
    CardsComponent.prototype.cardDetails = function (id) {
        this._router.navigate(['/detalhes', id]);
    };
    CardsComponent.prototype.searchByName = function (name) {
        var _this = this;
        var params = [{ name: 'name', value: name }];
        pokemon_tcg_sdk_typescript_1.PokemonTCG.Card.where(params)
            .then(function (cards) {
            _this.cardList = cards;
        })["catch"](function (error) {
            alert(JSON.stringify(error));
        });
    };
    CardsComponent.prototype.getCardsOrderByName = function () {
        var _this = this;
        pokemon_tcg_sdk_typescript_1.PokemonTCG.Card.all()
            .then(function (cards) {
            _this.cardList = cards.sort(function (a, b) {
                if (a.name > b.name) {
                    return 1;
                }
                else if (a.name < b.name) {
                    return -1;
                }
                return 0;
            });
        })["catch"](function (error) {
            alert(JSON.stringify(error));
        });
    };
    CardsComponent.prototype.ngOnInit = function () {
        this.getCardsOrderByName();
    };
    CardsComponent = __decorate([
        core_1.Component({
            selector: 'app-cards',
            templateUrl: './cards.component.html',
            styleUrls: ['./cards.component.sass']
        })
    ], CardsComponent);
    return CardsComponent;
}());
exports.CardsComponent = CardsComponent;
