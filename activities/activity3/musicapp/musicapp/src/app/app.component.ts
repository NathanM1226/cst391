import { Component } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'My Music Collection';
  version = '1.0';
  displayVersion(): void {
    alert(`Version: ${this.version}`);
  }
  displayArtistList(): void {
    alert(this.router.navigate(['list-artists'], { queryParams: { data: new Date()} }));
  }

  constructor(private router: Router){

  }
}
