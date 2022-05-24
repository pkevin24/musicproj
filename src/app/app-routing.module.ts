import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllsongsComponent } from './allsongs/allsongs.component';
import { FavComponent } from './fav/fav.component';
import { FormComponent } from './form/form.component';
import { GenreComponent } from './genre/genre.component';
import { HomeComponent } from './home/home.component';
import { SongComponent } from './song/song.component';

const routes: Routes = [{path:'',redirectTo:'home',pathMatch:'full'},{path:'home',component:HomeComponent},{path:'songs',component:AllsongsComponent},{path:'explore',component:GenreComponent},{path:'song',component:SongComponent},{path:'favourite',component:FavComponent},{path:'form',component:FormComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
