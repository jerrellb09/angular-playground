import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BillsDueRoutingModule } from './bills-due-routing.module';
import { SharedModule } from '../shared/shared.module';
import { BillsManagementComponent } from './pages/bills-management/bills-management.component';
import { AddBillComponent } from './components/add-bill/add-bill.component';
import { BillsDueService } from './bills-due.service';
import { BillsListComponent } from './components/bills-list/bills-list.component';

@NgModule({
  imports: [
    CommonModule,BillsDueRoutingModule,SharedModule
  ],
  declarations: [BillsManagementComponent, AddBillComponent, BillsListComponent],
  providers: [BillsDueService]
})
export class BillsDueModule { }
