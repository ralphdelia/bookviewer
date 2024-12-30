import ToggleThemeIcon from "./ToggleThemeIcon";

const TopNav = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <strong>The Adventures of Sherlock Holmes</strong>
          </li>
        </ul>
        <ul>
          <li>
            <ToggleThemeIcon />
          </li>
        </ul>
      </nav>
    </>
  );
};

export default TopNav;
