"use client";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface ItemProps {
  href?: string;
  text?: string;
}

const Item = ({ href = "/", text = "Link" }: ItemProps) => {
  const pathName = usePathname();
  return (
    <div>
      <Link
        href={href}
        className={clsx(
          "text-sm px-4 py-2 text-zinc-900 hover:bg-zinc-100 rounded-md font-bold",
          pathName === href && "bg-zinc-100"
        )}
      >
        {text}
      </Link>
    </div>
  );
};

export default function Sidebar() {
  return (
    <div className="flex flex-col min-w-fit gap-y-5">
      <div className="mx-4">
        <Image src={"./logo.svg"} alt={"Logo"} height={54} width={54} />
      </div>
      <Item href={"/"} text={"Home"} />
      <Item href={"/about"} text={"About"} />
      <Item href={"/blog"} text={"Blog"} />
      <Item href={"/guestbook"} text={"Guest Book"} />
    </div>
  );
}
