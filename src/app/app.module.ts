import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EthicsComponent } from './components/government/ethics/ethics.component';
import { GovernmentComponent } from './components/government/government.component';
import { AuthoritiesComponent } from './components/government/authorities/authorities.component';

@NgModule({
  declarations: [
    AppComponent,
    EthicsComponent,
    GovernmentComponent,
    AuthoritiesComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
