import PackageCard from "@components/PackageCard";
import { Package } from "src/types/Package";

type Props = {
  data: Package[];
  extraClassName?: string;
};

function Container({ data, extraClassName }: Props) {
  return (
    <section className={`mx-4 md:mx-0 ${extraClassName}`}>
      <section className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 max-w-7xl mx-auto">
        {data.map((item) => (
          <PackageCard key={item.id} item={item} />
        ))}
      </section>
    </section>
  );
}

export default Container;
