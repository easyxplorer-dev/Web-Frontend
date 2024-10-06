import { ReactNode } from "react";

type Props = {
  title?: string;
  data: string[] | undefined;
  children?: ReactNode;
  showTitle?: boolean;
  showHover?: boolean;
};

function ListInfo({
  title,
  data,
  children,
  showTitle = true,
  showHover = true,
}: Props) {
  const buildTitle = title || children;
  return (
    <article
      className={`transition ${
        showHover ? "hover:bg-gray-700/50 hover:scale-105" : ""
      } p-4 rounded-lg`}
    >
      {showTitle && (
        <h4 className="text-white text-2xl text-center mb-2">{buildTitle}</h4>
      )}
      <ul className="list-disc list-inside">
        {data?.map((item, idx) => (
          <li key={idx} className="text-center">
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}

export default ListInfo;
