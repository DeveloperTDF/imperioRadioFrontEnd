import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FabComponent } from './fab/fab.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [FabComponent],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports:[
    FabComponent,
  ],
})
export class CompModuModule { }
