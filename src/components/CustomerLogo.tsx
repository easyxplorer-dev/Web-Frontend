import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  url?: string | '#'
};

function CustomerLogo({ children, url }: Props) {
  return (
    <a href={url} target="_blank" className="flex justify-center items-center">
      {children}
    </a>
  );
}

export default CustomerLogo;
