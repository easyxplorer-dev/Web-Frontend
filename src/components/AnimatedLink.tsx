import { ElementType, MouseEvent, ReactNode } from "react";
import { flushSync } from "react-dom";
import { useNavigate } from "react-router";

type Props = {
  to: string | number;
  children: ReactNode;
  tag: ElementType;
  extraClassName?: string;
  viewTransition?: boolean;
};

function AnimatedLink({
  to,
  children,
  tag: Tag,
  extraClassName,
  viewTransition = true,
}: Props) {
  const navigate = useNavigate();
  const toUrl = to === -1 ? document.referrer || "/packages" : (to as string);
  const handleTranstition = (e: MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    document.startViewTransition(() => {
      flushSync(() => navigate(toUrl));
    });
  };
  return (
    <Tag
      className={`${extraClassName}`}
      onClick={(e: MouseEvent<HTMLButtonElement, MouseEvent>) =>
        viewTransition ? handleTranstition(e) : navigate(toUrl)
      }
    >
      {children}
    </Tag>
  );
}

export default AnimatedLink;
