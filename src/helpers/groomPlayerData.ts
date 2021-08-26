import { groomedPlayerDataSet, groomedPlayerDataT } from "@/types/types";

export default (playerData: any[]): groomedPlayerDataSet => {
  return playerData.map(playerData => {
    const groomedPlayerData: groomedPlayerDataT = {
      name: playerData.name,
      data: {
        abilities: playerData.data.abilities
      }
    };

    return groomedPlayerData;
  });
};
