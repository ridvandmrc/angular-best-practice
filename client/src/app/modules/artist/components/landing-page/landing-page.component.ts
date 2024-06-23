import { Component, OnInit } from "@angular/core";
import { ArtistService } from "../../services";
import { Artist } from "../../models";

@Component({
  selector: "app-artist-landing-page",
  templateUrl: "./landing-page.component.html",
  styleUrls: ["./landing-page.component.scss"],
})
export class ArtistComponent implements OnInit {
  constructor(private readonly _artistService: ArtistService) {}
  artist: Artist | null = null;

  ngOnInit() {
    const pathList = window.location.pathname.split("/");
    const artistKey = pathList[pathList.length - 1];

    this._artistService.getArtist(artistKey).subscribe((artist) => {
      this.artist = artist.data;
    });
  }
}
