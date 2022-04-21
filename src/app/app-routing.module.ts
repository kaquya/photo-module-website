import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotoPageComponent } from './components/pages/photo-page/photo-page.component';
import { MetaPageComponent } from './components/pages/meta-page/meta-page.component';

const routes: Routes = [
  { path: 'photos', component: PhotoPageComponent },
  { path: 'metas', component: MetaPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
