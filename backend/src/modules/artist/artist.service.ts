import express from "express";
import { ArtistList } from "../../data";

import cors from "cors";

const router = express.Router();

router.use(cors({ origin: "*" }));

router
  .get("/:artistName", ({ params: { artistName } }, res) => {
    res.json({
      data:
        ArtistList.find(
          (item) => item.artistKey.toLowerCase() === artistName.toLowerCase()
        ) || null,
    });
  })
  .get("", (_, res) => {
    res.json({
      data: ArtistList.map(({ artistKey, artistImg, artistName }) => ({
        artistKey,
        artistName,
        artistImg,
      })),
    });
  });

export { router as artistRouter };
