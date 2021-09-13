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
  navData: PlayerNavigationT;
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

// Common Component Data
export type tileNavigationT = {
  navID: string;
  imgURL: string;
  navTitle: string;
};

// Static Data
export type dashboardFoundryMappingDataSet = {
  [key: string]: dashboardFoundryMappingT;
};

export type dashboardFoundryMappingT = {
  worldId: string;
  name: string;
};

// Store
export type StoreT = {
  state: StateT;
};

// State
export type StateT = {
  playerCharacters: {
    navigation: PlayerNavigationT;
    characters: groomedQuestDataSet;
  };
  quests: QuestStoreT;
  gameMetadata: gameMetadataT;
};

export type PlayerNavigationT = tileNavigationT;

export type PlayerCharactersT = {
  characters: groomedQuestDataSet;
};

export type QuestStoreT = {
  data: groomedQuestDataSet;
};

export type gameMetadataT = {
  name: string;
  urlSubstring: string;
};
