import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PersonModule } from './person/person.module';
import { FilmsModule } from './films/films.module';
import { BillsDueModule } from './bills-due/bills-due.module';



const routes: Routes =
[
  {
    path: 'person',
    loadChildren: () => import('./person/person.module').then((m) => m.PersonModule),
  },
  {
    path: 'films',
    loadChildren: () => import('./films/films.module').then((m) => m.FilmsModule),
  },
  {
    path: 'bills-due',
    loadChildren: () => import('./bills-due/bills-due.module').then((m) => m.BillsDueModule),
  },
{ path: 'bills-due', loadChildren: () => import('./bills-due/bills-due.module').then(m => m.BillsDueModule) },
{ path: 'cart', loadChildren: () => import('./cart/cart.module').then(m => m.CartModule) },
{ path: 'films', loadChildren: () => import('./films/films.module').then(m => m.FilmsModule) },
{ path: 'person', loadChildren: () => import('./person/person.module').then(m => m.PersonModule) }


]

@NgModule({

  imports: [
    CommonModule,
    PersonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
