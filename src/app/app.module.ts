import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlaylistsComponent } from './playlists/playlists.component';
import { ContentCardComponent } from './playlists/content-card.component';
import { PlaylistFormComponent } from './playlists/playlist-form/playlist-form.component';
import { PlaylistListComponent } from './playlists/playlist-list/playlist-list.component';
import { PlaylistDetailsComponent } from './playlists/playlist-details/playlist-details.component';

@NgModule({
  declarations: [
    AppComponent,
    PlaylistsComponent,
    ContentCardComponent,
    PlaylistFormComponent,
    PlaylistListComponent,
    PlaylistDetailsComponent
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
