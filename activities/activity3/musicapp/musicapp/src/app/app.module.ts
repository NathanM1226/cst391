import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CreateAlbumComponent } from './create-album/create-album.component';
import { ListArtistsComponent } from './list-artists/list-artists.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    CreateAlbumComponent,
    ListArtistsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    RouterModule, 
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
