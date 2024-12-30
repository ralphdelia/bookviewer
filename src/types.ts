export type Theme = "light" | "dark";

export type Chapter = string;

export interface ChapterContextType {
  chapters: Chapter[];
  selectedChapter: Chapter;
  setSelectedChapter: React.Dispatch<React.SetStateAction<string>>;
}
