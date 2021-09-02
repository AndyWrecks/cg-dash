import CONSTANTS from "@/data/CONSTANTS";

export default async (fildId: string): Promise<any> => {
  const s3Url = CONSTANTS.FOUNDRY_INSTANCE_S3_URL;

  return await fetch(`${s3Url}${fildId}.json`)
    .then(response => response.json())
    .then(data => data);
};
