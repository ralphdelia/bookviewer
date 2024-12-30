import { ChapterContext } from "../contexts/chapterContext";
import { useContext } from "react";

const useChapter = () => {
  const context = useContext(ChapterContext);

  if (!context) {
    throw new Error("useChapter must be used with a chapter provider");
  }
  return context;
};
export default useChapter;
