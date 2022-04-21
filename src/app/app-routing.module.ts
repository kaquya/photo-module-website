import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotoPageComponent } from './components/pages/photo-page/photo-page.component';

const routes: Routes = [
  { path: 'photos', component: PhotoPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
