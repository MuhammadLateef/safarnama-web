import Image from "../assets/Container.png"; // Adjust the image path

const home = () => {
  return (
    <img
      src={Image}
      alt="Hero img"
      className="w-full h-full object-cover"
    />
  );
};

export default home;
