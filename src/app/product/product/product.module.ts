import {NgModule} from '@angular/core';
import {IonicModule} from '@ionic/angular';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ProductComponent} from './product.component';
import {BrowserModule} from '@angular/platform-browser';


@NgModule({
    imports: [
        IonicModule.forRoot(),
        CommonModule,
        FormsModule,
    ],
    declarations: [ProductComponent],
    exports: [ProductComponent]
})
export class ProductModule {}
