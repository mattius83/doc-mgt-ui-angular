import { ReactiveFormsModule } from '@angular/forms' ;
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DocMgtService } from './doc-mgt.service';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { UploadComponent } from './upload.component';
import { SearchComponent } from './search.component';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    UploadComponent
  ],
  imports: [
    AgGridModule.withComponents([]),
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [DocMgtService],
  bootstrap: [AppComponent]
})
export class AppModule { }
