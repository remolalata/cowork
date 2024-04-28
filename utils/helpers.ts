import fs from "fs/promises";
import path from "path";

export const fetchMockData = async (fileName: string): Promise<any> => {
  const filePath = path.join(process.cwd(), "mockData", fileName);

  try {
    const jsonData = await fs.readFile(filePath, "utf8");
    const data = JSON.parse(jsonData);

    return data;
  } 
  catch (error) {
    console.error(`Error reading mock data from ${fileName}:`, error);
    return null;
  }
}