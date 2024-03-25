import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountSettingsComponent } from './pages/account-settings/account-settings.component';
import { FavouritesComponent } from './pages/favourites/favourites.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ReservedAreaComponent } from './pages/reserved-area/reserved-area.component';
import { SearchComponent } from './pages/search/search.component';
import { SellerComponent } from './pages/seller/seller.component';
import { SellerAnnouncementComponent } from './pages/seller-announcement/seller-announcement.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BuyerAnnouncementComponent } from './pages/buyer-announcement/buyer-announcement.component';
import { Error404Component } from './pages/error-404/error-404.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    AccountSettingsComponent,
    FavouritesComponent,
    HomepageComponent,
    LoginComponent,
    RegisterComponent,
    ReservedAreaComponent,
    SearchComponent,
    SellerComponent,
    SellerAnnouncementComponent,
    HeaderComponent,
    FooterComponent,
    BuyerAnnouncementComponent,
    Error404Component,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
