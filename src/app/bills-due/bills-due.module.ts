import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BillsDueRoutingModule } from './bills-due-routing.module';
import { BillsDueService } from './bills-due.service';
import { AddBillComponent } from './components/add-bill/add-bill.component';
import { BillsListComponent } from './components/bills-list/bills-list.component';
import { BillsManagementComponent } from './pages/bills-management/bills-management.component';

@NgModule({
  imports: [CommonModule, BillsDueRoutingModule],
  declarations: [
    BillsManagementComponent,
    AddBillComponent,
    BillsListComponent,
  ],
  providers: [BillsDueService],
})
export class BillsDueModule {}
