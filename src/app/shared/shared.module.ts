import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@NgModule({
  declarations: [],
  imports: [CommonModule, CardModule, ButtonModule],
  exports: [CardModule, ButtonModule],
})
export class SharedModule {}
