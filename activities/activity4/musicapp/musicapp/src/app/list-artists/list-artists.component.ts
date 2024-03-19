import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MusicServiceService } from '../service/music-service.service';
import { Artist } from '../models/artists.model';
import { Console } from 'console';

@Component({
  selector: 'app-list-artists',
  standalone: true,
  imports: [],
  templateUrl: './list-artists.component.html',
  styleUrl: './list-artists.component.css'
})
export class ListArtistsComponent {

  selectedArtist: Artist | null = null;
  artists: Artist[] = [];

  ngOnInit()
  {
    console.log("Getting data...");
    this.service.getArtists((artists: Artist[]) => {
      this.artists = artists;
      console.log('this.artists', this.artists);
    });
  }

  onSelectArtist(artist: Artist) {
    this.selectedArtist = artist;
}



  constructor(private route: ActivatedRoute, private service: MusicServiceService) {}
}
