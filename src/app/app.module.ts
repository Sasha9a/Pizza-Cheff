import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { HeaderInfoComponent } from './components/header-info/header-info.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HeaderComponent, HeaderInfoComponent, CatalogComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
