import Image from "next/image";

interface CardProps {
  project: number;
  star: number;
  client: number;
  avatar: string;
}

interface CardBlogProps {
  judul: string;
  time: number;
  see: number;
}

interface CardGuestProps {
  nama: string;
  pesan: string;
}

export default function Card({ project, star, client, avatar }: CardProps) {
  return (
    <div className="container rounded-lg py-3 px-7 flex justify-center gap-x-6 outline outline-2 outline-slate-400 max-w-fit">
      <Image
        className="rounded-full"
        src={String(avatar)}
        height={80}
        width={80}
        alt={"profile_image"}
      />
      <div className="flex flex-col my-auto gap-y-1 text-xs">
        <div className="flex gap-x-1">
          <Image
            className="rounded-2xl"
            src={"project.svg"}
            height={14}
            width={14}
            alt={"project_logo"}
          />
          <p>
            <span className="font-bold">{String(project)}</span> Project selesai
          </p>
        </div>
        <div className="flex gap-x-1">
          <Image
            className="rounded-full"
            src={"star.svg"}
            height={14}
            width={14}
            alt={"star_logo"}
          />
          <p>
            <span className="font-bold">{String(star)}</span> Stars di repo ini
          </p>
        </div>
        <div className="flex gap-x-1">
          <Image
            className="rounded-2xl"
            src={"client.svg"}
            height={14}
            width={14}
            alt={"client_logo"}
          />
          <p>
            <span className="font-bold">{String(client)}</span> Clients
          </p>
        </div>
      </div>
    </div>
  );
}

function Blog({ judul, time, see }: CardBlogProps) {
  return (
    <div className="flex gap-x-5">
      <Image src={"./logo_blog.svg"} alt={"Logo"} height={80} width={80} />
      <div className="flex flex-col gap-y-3">
        <h2 className="text-lg font-bold">{judul}</h2>
        <div className="flex gap-x-10">
          <p>{String(time)} Hari yang lalu</p>
          <p>{String(see)}x Dilihat</p>
        </div>
      </div>
    </div>
  );
}

function GuestBook({ nama, pesan }: CardGuestProps) {
  return (
    <div className="flex gap-x-3">
      <Image
        className="rounded-full"
        src={"logo.svg"}
        width={40}
        height={40}
        alt={"profile_image"}
      />
      <p className="my-auto">
        <span className="font-semibold">{nama}</span> : {pesan}
      </p>
    </div>
  );
}

Card.Blog = Blog;
Card.GuestBook = GuestBook;
