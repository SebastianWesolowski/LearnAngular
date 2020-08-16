import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PlaylistService } from './service/playlist.service';

import { PlaylistsComponent } from './playlists.component';
import { ContentCardComponent } from './content-card.component';
import { PlaylistFormComponent } from './playlist-form/playlist-form.component';
import { PlaylistListComponent } from './playlist-list/playlist-list.component';
import { PlaylistDetailsComponent } from './playlist-details/playlist-details.component';

@NgModule({
  declarations: [
    PlaylistsComponent,
    ContentCardComponent,
    PlaylistFormComponent,
    PlaylistListComponent,
    PlaylistDetailsComponent
  ],
  imports: [CommonModule, FormsModule],
  exports: [PlaylistsComponent],
  providers: [PlaylistService]
})
export class PlaylistModule {}
