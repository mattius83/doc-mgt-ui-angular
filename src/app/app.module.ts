import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MockDocMgtService } from './mock-doc-mgt.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridModule.withComponents([])
  ],
  providers: [MockDocMgtService],
  bootstrap: [AppComponent]
})
export class AppModule { }
