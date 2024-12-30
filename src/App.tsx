import { useEffect, useState } from "react";

import SideNav from "./components/SideNav";
import TopNav from "./components/TopNav";
import Container from "./components/Container";
import MainContent from "./components/MainContent";

import { ChapterContext } from "./contexts/chapterContext";
import chapterServices from "./services/chapterServices";
import { Chapter } from "./types";

const App = () => {
  const [selectedChapter, setSelectedChapter] = useState<string>("");
  const [chapters, setChapters] = useState<Chapter[]>([]);

  useEffect(() => {
    async function getToc() {
      const chaptersList = await chapterServices.getTOC();
      setChapters(chaptersList);

      // on mount set selectedChapter to first chapter
      if (selectedChapter === "") {
        setSelectedChapter(chaptersList[0]);
      }
    }
    getToc();
  }, []);

  return (
    <>
      <ChapterContext.Provider
        value={{ chapters, selectedChapter, setSelectedChapter }}
      >
        <div style={{ display: "flex" }}>
          <SideNav />
          <Container>
            <TopNav />
            <MainContent />
          </Container>
        </div>
      </ChapterContext.Provider>
    </>
  );
};

export default App;
