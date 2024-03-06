import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountSettingsComponent } from './pages/account-settings/account-settings.component';
import { FavouritesComponent } from './pages/favourites/favourites.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ReservedAreaComponent } from './pages/reserved-area/reserved-area.component';
import { SearchComponent } from './pages/search/search.component';
import { SellerComponent } from './pages/seller/seller.component';
import { SellerAnnouncementComponent } from './pages/seller-announcement/seller-announcement.component';
import { BuyerAnnouncementComponent } from './pages/buyer-announcement/buyer-announcement.component';
const routes: Routes = [
  { path: 'home', component: HomepageComponent },
  { path: 'account-settings', component: AccountSettingsComponent },
  { path: 'favourites', component: FavouritesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'reserved-area', component: ReservedAreaComponent },
  { path: 'search', component: SearchComponent },
  { path: 'seller', component: SellerComponent },
  { path: 'seller-announcement', component: SellerAnnouncementComponent },
  { path: 'buyer-announcement', component: BuyerAnnouncementComponent},
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
