/**
 * Created by User on 16/2/2019.
 */
import { NgModule } from '@angular/core';

import { FlexLayoutModule } from '@angular/flex-layout';

import {
  MatToolbarModule, MatCardModule,MatButtonModule,MatFormFieldModule,MatInputModule,MatDialogModule
} from '@angular/material';

const MODULES = [
  FlexLayoutModule,
  MatToolbarModule, MatCardModule,
  MatButtonModule,MatFormFieldModule,MatInputModule,MatDialogModule
]

@NgModule({
  imports: MODULES,
  exports: MODULES
})
export class MaterialModule { }
