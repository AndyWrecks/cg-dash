import { groomedPlayerDataSet } from "@/types/types";

export default (playerData: any[]): groomedPlayerDataSet => {
  return playerData.map(playerData => {
    return {
      name: playerData.name
    };
  });
};
