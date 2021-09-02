// Temp
import questData1 from "@/mock-data/questData/fvtt-JournalEntry-cursed-cabin.json";
import questData2 from "@/mock-data/questData/fvtt-JournalEntry-end-auril's-endless-winter.json";
import questData3 from "@/mock-data/questData/fvtt-JournalEntry-sunblight.json";

import groomQuestData from "@/store/modules/questData/groomQuestData";

export default (): any => {
  const rawQuestData = [questData1, questData2, questData3];

  return groomQuestData(rawQuestData);
};
