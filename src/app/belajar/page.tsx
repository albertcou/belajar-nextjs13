const Item = ({text}: {text: string}) => {
  return (
    <a className="btn btn-primary relative w-fit after:content-[''] after:absolute after:bg-red-400 after:h-1 after:w-0 after:left-0 after:-bottom-[1px] hover:after:w-full after:duration-500">
      {text}
    </a>
  );
};

function Belajar() {
  return (
    <div className="flex flex-col min-w-[150px] min-h-full gap-y-5 ">
      <Item text={"Item ke-1"} />
      <Item text={"Item ke-2"} />
      <Item text={"Item ke-3"} />
      <Item text={"Item ke-4"} />
    </div>
  );
}

export default Belajar;
