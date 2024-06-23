import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ArtistService } from "../../services";
import { ArtistBase } from "../../models";

@Component({
  selector: "artist-list",
  templateUrl: "./artist-list.component.html",
  styleUrls: ["./artist-list.component.scss"],
})
export class ArtistListComponent implements OnInit {
  constructor(
    private readonly _artistService: ArtistService,
    private readonly _router: Router
  ) {}
  artists: ArtistBase[] = [];
  ngOnInit() {
    this._artistService.getArtistList().subscribe((_artists) => {
      this.artists = _artists.data || [];
    });
  }

  imgClick(targetKey: string) {
    const target = document.getElementById(targetKey);
    target?.classList.add("active");
    setTimeout(() => {
      this._router.navigate([`/artist/${targetKey}`]);
    }, 350);
  }
}
