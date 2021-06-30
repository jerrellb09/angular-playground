import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Bill } from '../../pages/bills-management/bills-management.component';

@Component({
  selector: 'app-bills-list',
  templateUrl: './bills-list.component.html',
  styleUrls: ['./bills-list.component.css'],
})
export class BillsListComponent implements OnInit {
  @Input() bills: Bill[] = [];
  @Output() removeBill = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {}

  removeBillDue(event: Bill) {
    console.log('event emitted', event);
    this.removeBill.emit(event);
  }
}
