import { groomedPlayerDataSet, groomedPlayerDataT } from "@/types/types";

export default (playerData: any[]): groomedPlayerDataSet => {
  return playerData.map(playerData => {
    const groomedPlayerData: groomedPlayerDataT = {
      name: playerData.name,
      img: playerData.img,
      data: {
        abilities: playerData.data.abilities
      },
      // Should I extract navData to its own object in the state?
      navData: {
        navID: `${playerData.name}-nav`,
        navTitle: playerData.name,
        imgURL: playerData.img
      },
      class: playerData.items.filter((item: any) => {
        return item.type === "class";
      })
    };

    return groomedPlayerData;
  });
};
