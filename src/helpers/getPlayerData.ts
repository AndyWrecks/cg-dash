// Temp
import playerData1 from "../mock-data/playerData/fvtt-Actor-grenwyrm.json";
import playerData2 from "../mock-data/playerData/fvtt-Actor-hafthor.json";

import groomPlayerData from "@/helpers/groomPlayerData";

export default () => {
  const rawPLayerData = [playerData1, playerData2];

  return groomPlayerData(rawPLayerData);
};
