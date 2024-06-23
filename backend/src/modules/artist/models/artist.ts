export type Artist = {
  artistKey: string;
  artistName: string;
  artistImg: string;
  story: string;
  artistSongs: Song[];
};

type Song = {
  songName: string;
  songImage: string;
  artist: string;
  stream: string;
};
