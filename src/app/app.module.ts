import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HeaderComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
