import { NgModule } from '@angular/core';
import { UiComponent } from './ui.component';
import { DropdownComponent } from './dropdown/dropdown.component';



@NgModule({
  declarations: [
    UiComponent,
    DropdownComponent
  ],
  imports: [
  ],
  exports: [
    UiComponent
  ]
})
export class UiModule { }
