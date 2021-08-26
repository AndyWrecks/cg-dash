// Temp
import playerData1 from "../mock-data/playerData/fvtt-Actor-grenwyrm.json";
import playerData2 from "../mock-data/playerData/fvtt-Actor-hafthor.json";

import groomPlayerData from "@/helpers/groomPlayerData";
import { groomedPlayerDataSet } from "@/types/types";

export default (): groomedPlayerDataSet => {
  const rawPLayerData = [playerData1, playerData2];

  return groomPlayerData(rawPLayerData);
};
