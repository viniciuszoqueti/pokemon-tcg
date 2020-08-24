import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input'
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from "@angular/material/card";
import { MatToolbarModule } from "@angular/material/toolbar";
import { FlexLayoutModule } from "@angular/flex-layout";


import { AppRoutingModule } from './app-routing.module';
import { CardsComponent } from './views/cards/cards.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardDetailComponent } from './views/card-detail/card-detail.component';
import { AppComponent } from './app.component';
@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    CardDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatGridListModule,
    FormsModule,
    MatCardModule,
    MatToolbarModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
