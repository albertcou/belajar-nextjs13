import Link from "next/link";
import Card from "../components/card";

async function getProfile(username: String) {
  const res = await fetch(`https://api.github.com/users/${username}`);
  return res.json();
}

async function getRepos(username: String) {
  const res = await fetch(`https://api.github.com/users/${username}/repos`);
  const tes = await res.json();
  let total_star = 0;

  tes.map((res: any) => (total_star += res["stargazers_count"]));
  return total_star;
}
export default async function Home() {
  const { name, avatar_url } = await getProfile("albertcou");
  const star = await getRepos("albertcou");
  return (
    <div className="flex flex-col gap-[36px]">
      <h1 className="text-3xl font-bold">{name}</h1>
      <p>
        Saya Albert, seorang{" "}
        <span className="font-semibold">
          Junior Software Developer
        </span>
        , dan saya senang dapat berbagi karya dan pengalaman saya dengan Anda
        disini.
      </p>
      <Card project={12} star={star} client={12} avatar={avatar_url} />
      <p>
        Sebagai seorang software engineer, saya telah mengembangkan berbagai
        aplikasi dan platform yang melibatkan teknologi canggih seperti Java sebagai android developer, , dan React. Saya selalu mencari cara untuk meningkatkan
        keterampilan saya dan mengeksplorasi teknologi baru yang dapat membantu
        saya menciptakan solusi yang lebih baik.
      </p>
      <div className="flex mt-5 gap-x-5">
        <Link className="font-semibold underline" href={"www.github.com"}>
          Github
        </Link>
        <Link className="font-semibold underline" href={"www.github.com"}>
          Youtube
        </Link>
      </div>
    </div>
  );
}
