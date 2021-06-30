import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Bill } from './pages/bills-management/bills-management.component';

@Injectable()
export class BillsDueService {
  public billsList = new BehaviorSubject<Bill[]>([]);

  constructor() {}
}
