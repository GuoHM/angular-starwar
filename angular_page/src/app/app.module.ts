import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryComponent } from './category/category.component';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListComponent } from './list/list.component';
import { Service } from './service';
import { FormsModule } from '@angular/forms';
import { DetailComponent,SuccessPopup } from './detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    ListComponent,
    SuccessPopup,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    FormsModule
  ],
  entryComponents: [SuccessPopup],
  providers: [ Service ],
  bootstrap: [AppComponent]
})
export class AppModule { }
