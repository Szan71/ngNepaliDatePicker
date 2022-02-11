import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { appDatePickerDirective } from './directives/date-picker2/date-picker.directive';



@NgModule({
  declarations: [
    appDatePickerDirective
  ],
  imports: [
    CommonModule, 
  ], 
  exports :[appDatePickerDirective]
})
export class SharedModule { }
