import { Link } from "react-router-dom";

const CustomTour = () => {
  return (
    <div className="p-10 text-center max-w-[90%] mx-auto bg-purple-100 rounded mb-16">
      <h1 className="text-4xl font-bold mb-6">Make Your Private Tour Package</h1>
      <p className="mb-6">We can arrange a tour according to your mood, feelings, number of days. Just click the button below and fill out the form to create your desired package.</p>
      <Link to="/form">
        <button className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition">
          Book Your Custom Tour
        </button>
      </Link>
    </div>
  );
};

export default CustomTour;
