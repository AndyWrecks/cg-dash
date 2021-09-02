import { groomedQuestDataSet } from "@/types/types";

export default (rawQuestData: any[]): groomedQuestDataSet => {
  return rawQuestData.map(rawData => {
    return {
      name: rawData.name
    };
  });
};
