import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MusicServiceService } from '../service/music-service.service';
import { Artist } from '../models/artists.model';

@Component({
  selector: 'app-list-artists',
  templateUrl: './list-artists.component.html',
  styleUrl: './list-artists.component.css'
})
export class ListArtistsComponent implements OnInit{
  constructor(private route: ActivatedRoute, private service: MusicServiceService){}
  selectedArtist:Artist | null = null;
  artists: Artist[] = [];

  ngOnInit(){
    // this.route.queryParams.subscribe(params =>{
    //   this.artists = this.service.getArtists();
    //   console.log(this.artists);
    // });
    this.service.getArtists((artists: Artist[])=>{
      this.artists = artists;
      console.log("this.artists", this.artists);
    });
  }

  onSelectArtist(artist: Artist){
    this.selectedArtist = artist;
  }
}
