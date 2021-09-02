// PC Data Types
export type groomedPlayerDataSet = groomedPlayerDataT[];

export type groomedPlayerDataT = {
  name: string;
  img: string;
  data: {
    abilities: {
      [key: string]: playerCharacterAbilityT;
    };
  };
  class: any[];
};

export type playerCharacterAbilityT = {
  value: number;
  proficient: 0 | 1;
};

// Quest Data Types
export type groomedQuestDataSet = groomedQuestDataT[];

export type groomedQuestDataT = {
  name: string;
};

// Component Data Types

export type appCompData = {
  sessionName: string;
};

export type characterInfoCompData = {
  characters: groomedPlayerDataSet;
};

export type questLogCompData = {
  quests: groomedQuestDataSet;
};

// Store
export type StoreT = {
  state: StateT;
};

export type StateT = {
  playerCharacters: {
    characters: groomedQuestDataSet;
  };
};

export type PlayerCharactersT = {
  characters: groomedQuestDataSet;
};

export type QuestStoreT = {
  data: groomedQuestDataSet;
};
