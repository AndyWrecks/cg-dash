import { dashboardFoundryMappingDataSet } from "@/types/types";

const sessionData: dashboardFoundryMappingDataSet = {
  "sunday-rotfm": {
    worldId: "sunday-icewind-dale-rime-of-the-frostmaiden",
    name: "Sunday - Rime of the Frost Maiden"
  }
};

export default (dashId: string) => {
  return sessionData[dashId];
};
