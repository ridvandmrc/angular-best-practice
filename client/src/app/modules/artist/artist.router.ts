import { Route, Routes } from "@angular/router";
import { ArtistComponent, ArtistListComponent } from "./components";

export const artistRouter: Routes = [
  {
    path: "artist",
    children: [
      { path: ":name", component: ArtistComponent },
      { path: "", component: ArtistListComponent },
    ],
  },
];
