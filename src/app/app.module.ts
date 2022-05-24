import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { AllsongsComponent } from './allsongs/allsongs.component';
import { SongComponent } from './song/song.component';
import { FavComponent } from './fav/fav.component';
import { GenreComponent } from './genre/genre.component';
import { AngularTypewriterEffectModule } from 'angular-typewriter-effect';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    AllsongsComponent,
    SongComponent,
    FavComponent,
    GenreComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularTypewriterEffectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
