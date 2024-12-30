import { Chapter } from "../types";

const cachedChapters: { [k: string]: string } = {};

const getTOC = async (): Promise<Chapter[]> => {
  try {
    const res = await fetch("http://localhost:5173/api/toc");
    if (!res.ok) {
      throw new Error("Non 200 response fetching all chapters.");
    }

    const data = await res.json();
    return data.chapters;
  } catch (e: unknown) {
    console.error(e);
    return [];
  }
};

const getChapter = async (selectedChapter: string) => {
  if (!(selectedChapter in cachedChapters)) {
    const chapter = selectedChapter.toLowerCase().split(" ").join("-");
    const url = encodeURI(`http://localhost:5173/api/${chapter}`);

    try {
      const res = await fetch(url);

      if (!res.ok) {
        throw new Error(
          `Non 200 response fetching chapters ${selectedChapter}`,
        );
      }

      cachedChapters[selectedChapter] = await res.text();
    } catch (e: unknown) {
      console.error(e);
    }
  }
  return cachedChapters[selectedChapter];
};

export default { getChapter, getTOC };
