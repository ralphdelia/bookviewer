import { createContext } from "react";
import { ChapterContextType } from "../types";

export const ChapterContext = createContext<ChapterContextType | null>(null);
