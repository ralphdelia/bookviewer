import styles from "../styles/Layout.module.css";

import ChapterLink from "./ChapterLink";

import useChapter from "../hooks/useChapter";

const SideNav = () => {
  const { chapters } = useChapter();

  return (
    <aside className={styles.sideNav}>
      <details open={true}>
        <summary>Chapters</summary>
        <ul>
          {chapters &&
            chapters.map((chapterTitle) => (
              <ChapterLink key={chapterTitle} title={chapterTitle} />
            ))}
        </ul>
      </details>
    </aside>
  );
};

export default SideNav;
