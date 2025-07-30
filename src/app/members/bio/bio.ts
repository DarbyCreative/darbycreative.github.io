import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-bio',
  imports: [RouterLink],
  templateUrl: './bio.html',
  styleUrl: './bio.scss'
})
export class Bio {
  bioText = input<string>();
  bioPic = input<string>();
  id = input<string>();
}
