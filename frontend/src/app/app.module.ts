import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ShowcaseComponent } from './components/showcase/showcase.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { DetailComponent } from './components/detail/detail.component';

import { AuthService } from './services/auth.service';
import { ProdService } from './services/prod.service';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    ShowcaseComponent,
    CheckoutComponent,
    FilterPipe,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    FlashMessagesModule
  ],
  providers: [AuthService, ProdService],
  bootstrap: [AppComponent]
})
export class AppModule { }
