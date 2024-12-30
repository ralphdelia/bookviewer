import styles from "../styles/Layout.module.css";

const Container = ({ children }: { children: React.ReactNode }) => {
  return <div className={"container " + styles.container}>{children}</div>;
};

export default Container;
