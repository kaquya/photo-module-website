
/* Modules */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AppRoutingModule } from './app-routing.module';
import { MatButtonModule } from '@angular/material/button';
/* Components */
import { AppComponent } from './app.component';
import { PhotoPageComponent } from './components/pages/photo-page/photo-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { StartPageComponent } from './components/pages/start-page/start-page.component';
import { ScriptPageComponent } from './components/pages/script-page/script-page.component';
import { MoviePageComponent } from './components/pages/movie-page/movie-page.component';
import {PdfViewerModule} from "ng2-pdf-viewer";

@NgModule({
  declarations: [
    AppComponent,
    PhotoPageComponent,
    NavbarComponent,
    FooterComponent,
    StartPageComponent,
    ScriptPageComponent,
    MoviePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatTooltipModule,
    MatButtonModule,
    PdfViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
