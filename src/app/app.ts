import { Component } from '@angular/core';
import { Profile } from "./profile/profile";
import { Header } from "./header/header";

@Component({
  selector: 'app-root',
  imports: [Profile, Header],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'darby-creative-computing';
}
