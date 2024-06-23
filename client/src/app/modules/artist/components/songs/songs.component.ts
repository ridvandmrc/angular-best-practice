import {
  Component,
  Input,
  TemplateRef,
  ViewChild,
  OnInit,
} from "@angular/core";
import { Song } from "../../models";
import { Cols, Rows } from "src/app/core/models";

import { LegendComponent } from "src/app/core/components";

type SongType = "img" | "song" | "name" | "stream";

@Component({
  selector: "app-songs",
  templateUrl: "./songs.component.html",
  styleUrls: ["./songs.component.scss"],
})
export class SongsComponent implements OnInit {
  @Input() songList: Song[] = [];
  @ViewChild("artistImage") artistImage!: TemplateRef<HTMLElement>;
  @ViewChild("legendSuccess") legendSuccess!: TemplateRef<HTMLElement>;
  @ViewChild("legendError") legendError!: TemplateRef<HTMLElement>;

  ngOnInit() {
    setTimeout(() => {
      this.rows = this.songList.map(({ artist, songName, stream }) => ({
        img: { render: this.artistImage },
        name: { value: artist },
        song: { value: songName },
        stream: { value: stream },
      }));
    }, 50);
  }

  cols: Cols<SongType>[] = [
    { key: "img", label: "Image" },
    { key: "song", label: "Song" },
    { key: "name", label: "Name" },
    { key: "stream", label: "Stream" },
  ];
  rows: Rows<SongType>[] = [];
}
