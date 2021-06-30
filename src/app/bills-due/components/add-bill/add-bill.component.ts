import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Bill } from '../../pages/bills-management/bills-management.component';

@Component({
  selector: 'app-add-bill',
  templateUrl: './add-bill.component.html',
  styleUrls: ['./add-bill.component.css'],
})
export class AddBillComponent implements OnInit {
  @Input() bills: Bill[] = [];
  @Output() billAdded = new EventEmitter<any>();

  public form: FormGroup = this.fb.group({
    name: [undefined],
    dateDue: [undefined],
    deleted: [false],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

  onSubmit() {
    if (this.form) {
      // let bill = {
      //   name: this.form.get('name').value,
      //   dateDue: this.form.get('dateDue').value,
      //   deleted: false
      //   }
      //   console.log(this.form.value);
      //   this.billAdded.emit(bill);
    }
  }
}
