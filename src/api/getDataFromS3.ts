export default async (url: string): Promise<any> => {
  return await fetch(url)
    .then(response => response.json())
    .then(data => data);
};
