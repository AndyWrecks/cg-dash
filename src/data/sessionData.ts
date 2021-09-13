import { dashboardFoundryMappingDataSet } from "@/types/types";

const sessionData: dashboardFoundryMappingDataSet = {
  "sunday-rotfm": {
    worldId: "sunday-icewind-dale-rime-of-the-frostmaiden",
    name: "Sunday - Rime of the Frost Maiden"
  },
  "curse-of-strahd": {
    worldId: "curse-of-strahd",
    name: "Thursday - Curse of Strahd"
  }
};

export default (dashId: string) => {
  return sessionData[dashId];
};
