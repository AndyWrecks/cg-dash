// Temp
import playerData1 from "@/mock-data/playerData/fvtt-Actor-grenwyrm.json";
import playerData2 from "@/mock-data/playerData/fvtt-Actor-hafthor.json";

import groomPlayerData from "@/helpers/playerData/groomPlayerData";
import { groomedPlayerDataSet } from "@/types/types";

export default async (): groomedPlayerDataSet => {
  return await fetch(
    "https://commonwealthgiant.s3.us-east-2.amazonaws.com/character-json/test-user.json"
  )
    .then(response => response.json())
    .then(data => {
      return groomPlayerData([playerData1, playerData2, data]);
    });
};
