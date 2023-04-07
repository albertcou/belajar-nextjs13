import Card from "../../components/card";

export default function Blog() {
  return (
    <div className="flex flex-col gap-y-5">
      <h1 className="text-3xl font-bold">Blog</h1>
      <Card.Blog judul={"Cara Jadi Orang Kaya!"} time={2} see={180} />
      <Card.Blog judul={"Cara Jadi Orang Kaya2!"} time={3} see={280} />
      <Card.Blog judul={"Cara Jadi Orang Kaya3!"} time={5} see={380} />
    </div>
  );
}
