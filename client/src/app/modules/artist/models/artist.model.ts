export type ArtistBase = {
  artistKey: string;
  artistName: string;
  artistImg: string;
};

export type Artist = {
  story: string;
  artistSongs: Song[];
} & ArtistBase;

export type Song = {
  songName: string;
  songImage: string;
  artist: string;
  stream: string;
};
