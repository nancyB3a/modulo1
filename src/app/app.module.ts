import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { EjDirectivaDirective } from './directives/ejDirectiva/ej-directiva.directive';
import { EjPipePipe } from './pipes/ej-pipe/ej-pipe.pipe';

@NgModule({
  declarations: [AppComponent, EjDirectivaDirective, EjPipePipe],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
