import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-picture',
  imports: [NgOptimizedImage],
  templateUrl: './picture.html',
  styleUrl: './picture.scss'
})
export class Picture {
  profilePic = 'assets/wojak.jpg'
}
