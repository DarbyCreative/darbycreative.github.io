import { Component, computed, signal } from '@angular/core';
import { Bio } from './bio/bio';

@Component({
  selector: 'app-members',
  imports: [Bio],
  templateUrl: './members.html',
  styleUrl: './members.scss'
})

export class Members {

  tempRoster= {
    currMembers: [
      {
        firstName: "Aidan",
        lastName: "Hwang",
        gradYear: 2026,
        bio: "stuff liksadjfhbaksdjbfkjasdb",
        ssid: "886477",
        bioPic: "assets/wojak.jpg",
      },
      {
        firstName: "Rosh",
        lastName: "longLastName",
        gradYear: 2025,
        bio: "stuff skljhfjskladhfb",
        ssid: "778877",
        bioPic: "assets/wojak.jpg",
      }
    ]
  }
  roster = signal(this.tempRoster.currMembers);

  bioText = signal("none");

  bioPic = signal("assets/wojak.jpg");

  id = signal("886477");
  
  updateBio(event: MouseEvent): void {
    const val = event.target as HTMLButtonElement;
    for(let member of this.roster()) {
      if(member.ssid === val.value) {
        this.bioText.set(member.bio);
        this.bioPic.set(member.bioPic);
        this.id.set(member.ssid)
        break;
      }
    }
  }
}
