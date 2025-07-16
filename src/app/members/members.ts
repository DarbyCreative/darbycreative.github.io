import { Component } from '@angular/core';
import { Bio } from './bio/bio';

@Component({
  selector: 'app-members',
  imports: [Bio],
  templateUrl: './members.html',
  styleUrl: './members.scss'
})
export class Members {

}
