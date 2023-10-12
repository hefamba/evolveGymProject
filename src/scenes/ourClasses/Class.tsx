type Props = {
  name: string;
  description?: string;
  image: string;
};

const Class = ({ name, description = 'COMING SOON!', image }: Props) => {
  const overlayStyle = `p-5 absolute z-30 flex w-[450px] h-[380px] flex-col items-center justify-center
  whitespace-normal bg-primary-500 text-center text-white
  opacity-0 transition duration-500 hover:opacity-90`;
  return (
    <li className="mx-5 relative inline-block w-[450px] h-[350px]">
      <div className={overlayStyle}>
        <p className="text-2xl">{name}</p>
        <p className="mt-5">{description}</p>
      </div>
      <img src={image} alt="some image" />
    </li>
  );
};

export default Class;
