import type { ReactNode, ReactElement } from "react";

type Props = {
  children: ReactNode | (() => ReactElement);
  isRow: boolean;
};

function Toolbar({ children, isRow = false }: Props) {
  const content = typeof children === "function" ? children() : children;
  const isRowClass = isRow ? "c-toolbar--row" : "";

  return <div className={`c-toolbar ${isRowClass}`}>{content}</div>;
}
export default Toolbar;
