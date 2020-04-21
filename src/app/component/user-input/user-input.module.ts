import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {FormsModule} from '@angular/forms';
import {UserInputComponent} from './user-input.component';



@NgModule({
  declarations: [UserInputComponent],
  imports: [
    CommonModule,
    IonicModule.forRoot(),
    FormsModule
  ],
  exports:[
      UserInputComponent
  ]
})
export class UserInputModule { }
