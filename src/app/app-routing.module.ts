import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotoPageComponent } from './components/pages/photo-page/photo-page.component';
import { StartPageComponent } from './components/pages/start-page/start-page.component';
import { ScriptPageComponent } from "./components/pages/script-page/script-page.component";
import { MoviePageComponent } from "./components/pages/movie-page/movie-page.component";
import { LivestreamPageComponent } from "./components/pages/livestream-page/livestream-page.component";

const routes: Routes = [
  { path: 'photos', component: PhotoPageComponent },
  { path: 'movie', component: MoviePageComponent },
  { path: 'script', component: ScriptPageComponent },
  { path: 'livestream', component: LivestreamPageComponent },
  { path: '', component: StartPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
