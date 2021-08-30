// Temp

import groomPlayerData from "@/helpers/playerData/groomPlayerData";
import { groomedPlayerDataSet } from "@/types/types";

export default async (): Promise<groomedPlayerDataSet> => {
  return await fetch(
    "https://commonwealthgiant.s3.us-east-2.amazonaws.com/character-json/hello-world-actors.json"
  )
    .then(response => response.json())
    .then(data => {
      return groomPlayerData(data);
    });
};
