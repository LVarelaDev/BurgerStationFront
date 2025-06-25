import Link from "next/link";
import { Button } from "../../button";

interface ButtonMenuItemProps<T extends { name: string; path: string }> {
  index: number;
  item: T;
  active: string | null;
  setActive: (name: string) => void;
}

const ButtonMenuItem = <T extends { name: string; path: string }>({
  active,
  index,
  item,
  setActive,
}: ButtonMenuItemProps<T>) => {
  const resolverClassActive = "bg-gray-200";

  return (
    <Button
      variant="link"
      key={index}
      onClick={() => setActive(item.name)}
      className={`p-2 ${
        active === item.name ? resolverClassActive : ""
      } rounded-md hover:bg-gray-200 transition-colors duration-300 font-semibold`}
    >
      <Link href={item.path}>{item.name}</Link>
    </Button>
  );
};

export default ButtonMenuItem;
