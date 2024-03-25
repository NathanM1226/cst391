import { Component, Input, OnInit } from '@angular/core';
import { MusicServiceService } from '../service/music-service.service';
import { Album } from '../models/albums.model';
import { Artist } from '../models/artists.model';

@Component({
  selector: 'app-list-albums',
  templateUrl: './list-albums.component.html',
  styleUrl: './list-albums.component.css'
})
export class ListAlbumsComponent implements OnInit{

  @Input() artist?:Artist;
  albums!:Album[];
  selectedAlbum:Album | null = null;

  constructor(private service: MusicServiceService) {}

  ngOnInit(){
    // this.service.getAlbumsOfArtist(this.artist!.artist);

    this.service.getAlbumsOfArtist((albums: Album[])=>{
      this.albums = albums;
    }, this.artist!.artist);
  }

  public onSelectAlbum(album:Album){
    this.selectedAlbum = album;
  }

}
