import { Component, Input, OnInit } from '@angular/core';
import { Album } from '../models/albums.model';
import { ActivatedRoute, Router } from '@angular/router';
import { MusicServiceService } from '../service/music-service.service';

@Component({
  selector: 'app-display-album',
  templateUrl: './display-album.component.html',
  styleUrl: './display-album.component.css'
})
export class DisplayAlbumComponent{
  @Input() album?: Album;

  currentRoute: string = '';

  constructor(private route: ActivatedRoute, private service: MusicServiceService) {
    // Access route parameters
    this.route.params.subscribe(params => {
      // Access the 'id' parameter
      let albumId = parseInt(params['id']);
      console.log("albumId: " + albumId)
      // this.album = this.service.getAlbumById(albumId);

      this.service.getAlbumById(albumId, (album: Album[])=>{
        album: album[0];
      });

      console.log(this.album);
    });
  }
}
