import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EthicsComponent } from './components/government/ethics/ethics.component';
import { GovernmentComponent } from './components/government/government.component';
import { AuthorityComponent } from './components/government/authority/authority.component';

@NgModule({
  declarations: [AppComponent, EthicsComponent, GovernmentComponent, AuthorityComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
