import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { DeliveryComponent } from './components/delivery/delivery.component';
import { HeaderInfoComponent } from './components/header-info/header-info.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HeaderComponent,
    HeaderInfoComponent,
    CatalogComponent,
    DeliveryComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
