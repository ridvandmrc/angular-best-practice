import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { baseUrl } from "src/app/env";
import { Artist, ArtistBase } from "../models";
import { ResponseData } from "src/app/core/models";

@Injectable({ providedIn: "root" })
export class ArtistService {
  constructor(private readonly _http: HttpClient) {}
  getArtistList() {
    return this._http.get<ResponseData<ArtistBase[]>>(`${baseUrl}artist`);
  }

  getArtist(key: string) {
    return this._http.get<ResponseData<Artist>>(`${baseUrl}artist/${key}`);
  }
}
