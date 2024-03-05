import { Component, Input } from '@angular/core';
import { Album } from '../models/albums.model';

@Component({
  selector: 'app-display-album',
  standalone: true,
  imports: [],
  templateUrl: './display-album.component.html',
  styleUrl: './display-album.component.css'
})
export class DisplayAlbumComponent {
  @Input() album: Album | undefined;
}
