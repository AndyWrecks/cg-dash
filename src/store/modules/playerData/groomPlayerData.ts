import {
  groomedPlayerDataSet,
  groomedPlayerDataT,
  tileNavigationT
} from "@/types/types";

export default (playerData: any[]): groomedPlayerDataSet => {
  const groomedDataSet: groomedPlayerDataSet = {
    playerData: [],
    navData: []
  };

  playerData.map(playerData => {
    const playerId = `player-${playerData.name}`;

    const groomedPlayerData: groomedPlayerDataT = {
      playerId,
      name: playerData.name,
      img: playerData.img,
      data: {
        abilities: playerData.data.abilities
      },
      class: playerData.items.filter((item: any) => {
        return item.type === "class";
      })
    };

    const groomedNavData: tileNavigationT = {
      navID: playerId,
      imgURL: playerData.img,
      navTitle: playerData.name
    };

    groomedDataSet.playerData.push(groomedPlayerData);
    groomedDataSet.navData.push(groomedNavData);
  });

  console.log(groomedDataSet);
  return groomedDataSet;
};
