import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BillsDueComponent } from './bills-due.component';

const routes: Routes = [{ path: '', component: BillsDueComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BillsDueRoutingModule { }
