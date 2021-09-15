import { groomedPlayerDataSet, groomedPlayerDataT } from "@/types/types";

export default (playerData: any[]): groomedPlayerDataSet => {
  const groomedDataSet: groomedPlayerDataSet = {
    playerData: [],
    navData: []
  };

  playerData.map(playerData => {
    const groomedPlayerData: groomedPlayerDataT = {
      name: playerData.name,
      img: playerData.img,
      data: {
        abilities: playerData.data.abilities
      },
      // Should I extract navData to its own object in the state?

      class: playerData.items.filter((item: any) => {
        return item.type === "class";
      })
    };

    const groomedNavData = {
      navID: `${playerData.name}-nav`,
      navTitle: playerData.name,
      imgURL: playerData.img
    };

    groomedDataSet.playerData.push(groomedPlayerData);
    groomedDataSet.navData.push(groomedNavData);
  });

  console.log(groomedDataSet);
  return groomedDataSet;
};
