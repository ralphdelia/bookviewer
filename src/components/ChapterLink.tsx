import useChapter from "../hooks/useChapter";
import { Chapter } from "../types";

const ChapterLink = ({ title }: { title: Chapter }) => {
  const { selectedChapter, setSelectedChapter } = useChapter();

  if (title === selectedChapter) {
    return (
      <li>
        <small>
          <a
            href="#"
            onClick={() => {
              setSelectedChapter(title);
            }}
          >
            <mark>{title}</mark>
          </a>
        </small>
      </li>
    );
  }

  return (
    <li>
      <small>
        <a
          href="#"
          onClick={() => {
            setSelectedChapter(title);
          }}
        >
          {title}
        </a>
      </small>
    </li>
  );
};

export default ChapterLink;
