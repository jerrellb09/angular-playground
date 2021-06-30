import { Component, OnChanges, OnInit } from '@angular/core';
import { BillsDueService } from '../../bills-due.service';

export interface Bill {
  name?: string;
  dateDue?: Date;
  deleted?: boolean;
  temporary?: string;
}

@Component({
  selector: 'app-bills-management',
  templateUrl: './bills-management.component.html',
  styleUrls: ['./bills-management.component.css'],
})
export class BillsManagementComponent implements OnInit, OnChanges {
  //@ViewChildren('bill') addBillComponents: QueryList<AddBillComponent>
  public bills: Bill[] = [];

  constructor(private billsService: BillsDueService) {}

  ngOnInit() {
    this.bills = [];
  }

  ngOnChanges() {
    this.billsService.billsList.subscribe(
      (bills) => (this.bills = bills ?? [])
    );
  }

  billAdded(event: Bill) {
    this.bills.push(event);
    this.billsService.billsList.next(this.bills);
    console.log('Here are your bills', this.bills);
  }

  removeBill(billRemoved: Bill) {
    const billToRemove = this.bills?.find((bill) => {
      bill.name == billRemoved.name;
    });

    //billToRemove.deleted = true;

    if (billToRemove) console.log('bill to remove', this.bills);
  }
}
