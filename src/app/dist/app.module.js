"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var input_1 = require("@angular/material/input");
var icon_1 = require("@angular/material/icon");
var button_1 = require("@angular/material/button");
var grid_list_1 = require("@angular/material/grid-list");
var card_1 = require("@angular/material/card");
var toolbar_1 = require("@angular/material/toolbar");
var flex_layout_1 = require("@angular/flex-layout");
var app_routing_module_1 = require("./app-routing.module");
var cards_component_1 = require("./views/cards/cards.component");
var animations_1 = require("@angular/platform-browser/animations");
var card_detail_component_1 = require("./views/card-detail/card-detail.component");
var app_component_1 = require("./app.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                cards_component_1.CardsComponent,
                card_detail_component_1.CardDetailComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                animations_1.BrowserAnimationsModule,
                input_1.MatInputModule,
                icon_1.MatIconModule,
                button_1.MatButtonModule,
                grid_list_1.MatGridListModule,
                forms_1.FormsModule,
                card_1.MatCardModule,
                toolbar_1.MatToolbarModule,
                flex_layout_1.FlexLayoutModule
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
