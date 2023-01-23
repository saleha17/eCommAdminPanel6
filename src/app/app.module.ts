import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {
  PreloadAllModules,
  RouteReuseStrategy,
  RouterModule,
  Routes,
} from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './public/login/login.component';
import { SignUpComponent } from './public/sign-up/sign-up.component';
import { DashboardComponent } from './app/dashboard/dashboard.component';
import { ProcessService } from './services/process.service';

const routes: Routes = [];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    IonicModule.forRoot(),
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    LoginComponent,
    SignUpComponent,
    DashboardComponent,
  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    ProcessService,
  ],
})
export class AppModule {}
