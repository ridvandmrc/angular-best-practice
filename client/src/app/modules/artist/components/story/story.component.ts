import { Component, Input } from "@angular/core";

@Component({
  selector: "app-artist-story",
  templateUrl: "./story.component.html",
  styleUrls: ["./story.component.scss"],
})
export class ArtistStoryComponent {
  @Input() artistName!: string;
  @Input() desc!: string;
}
