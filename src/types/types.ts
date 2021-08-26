export type groomedPlayerDataSet = groomedPlayerDataT[];

export type groomedPlayerDataT = {
  name: string;
  data: {
    abilities: {
      [key: string]: playerCharacterAbilityT;
    };
  };
};

export type playerCharacterAbilityT = {
  value: number;
  proficient: 0 | 1;
};

// Component Data

export type appCompData = {
  sessionName: string;
};

export type characterInfoCompData = {
  characters: groomedPlayerDataSet;
};
