import { useEffect, useState } from "react";

import chapterServices from "../services/chapterServices";
import useChapter from "../hooks/useChapter";

const MainContent = () => {
  const { selectedChapter } = useChapter();
  const [chapterText, setChapterText] = useState<string | null>(null);

  useEffect(() => {
    async function getChapter() {
      if (selectedChapter === "") {
        return;
      }
      const text = await chapterServices.getChapter(selectedChapter);
      setChapterText(text);
    }
    getChapter();
  }, [selectedChapter]);

  return (
    <>
      <h1>{selectedChapter}</h1>
      {chapterText &&
        chapterText.split("\n\n").map((para, i) => <p key={i}>{para}</p>)}
    </>
  );
};

export default MainContent;
