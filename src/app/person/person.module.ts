import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AddNewPersonComponent } from './add-new-person/add-new-person.component';
import { PersonRoutingModule } from './person-routing.module';
import { PersonService } from './person.service';

@NgModule({
  imports: [CommonModule, PersonRoutingModule ],
  declarations: [AddNewPersonComponent],
  providers: [PersonService],
})
export class PersonModule {}
