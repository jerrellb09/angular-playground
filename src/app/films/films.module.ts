import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { FilmsListComponent } from './films-list/films-list.component';
import { FilmsRoutingModule } from './films-routing.module';

@NgModule({
  imports: [CommonModule, FilmsRoutingModule ],
  declarations: [FilmsListComponent],
})
export class FilmsModule {}
