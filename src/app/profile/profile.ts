import { Component, signal } from "@angular/core";
import { Picture } from "./picture/picture";

@Component ({
    selector: 'app-profile',
    imports: [ Picture ],
    templateUrl: './profile.html',
    styleUrl: './profile.scss'
})
export class Profile {
    bio = signal('none')
    name = signal('n/a')
}