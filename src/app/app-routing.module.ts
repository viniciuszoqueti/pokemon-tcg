import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardsComponent } from './views/cards/cards.component';
import { CardDetailComponent } from './views/card-detail/card-detail.component'

const routes: Routes = [
  { path: '', component: CardsComponent },
  { path: 'detalhes/:id', component: CardDetailComponent },
  { path: 'cards', component: CardsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
