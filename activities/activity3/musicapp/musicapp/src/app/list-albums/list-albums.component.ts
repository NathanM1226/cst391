import { Component, Input } from '@angular/core';
import { MusicServiceService } from '../service/music-service.service';
import { Artist } from '../models/artists.model';
import { Album } from '../models/albums.model';

@Component({
  selector: 'app-list-albums',
  standalone: true,
  imports: [],
  templateUrl: './list-albums.component.html',
  styleUrl: './list-albums.component.css'
})
export class ListAlbumsComponent {

  @Input() artist: Artist | undefined;

  albums: Album[] = [];
  selectedAlbum: Album | null = null;

  ngOnInit(){
    this.albums = this.service.getAlbumsOfArtist(this.artist!.artist);
  }

  public onSelectAlbum(album: Album)
  {
    	this.selectedAlbum = album;
  }

  constructor(private service: MusicServiceService) {}

  
}
