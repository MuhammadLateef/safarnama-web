import avatarImage from "../assets/avatarImage.jpg";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Priyanka",
      role: "Fresher-Full stack developer",
      feedback:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate asperiores eaque.",
      image: avatarImage,
    },
    {
      name: "Priyanka",
      role: "Fresher-Full stack developer",
      feedback:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate asperiores eaque.",
      image: avatarImage,
    },
    {
      name: "Priyanka",
      role: "Fresher-Full stack developer",
      feedback:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate asperiores eaque.",
      image: avatarImage,
    },
  ];

  return (
    <section className="my-20  max-w-[90%] mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-semibold">Happy Customers</h2>
      </div>
      <div className="flex flex-col md:flex-row justify-center gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-blue-100 p-8 rounded-lg shadow-lg transition-transform transform hover:translate-x-1 hover:-translate-y-2 hover:shadow-xl"
          >
            <p className="text-gray-700 mb-6">{testimonial.feedback}</p>
            <div className="flex flex-col items-center gap-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full"
              />
              <div className="text-center">
                <h4 className="font-bold">{testimonial.name}</h4>
                <span className="text-sm text-gray-500">{testimonial.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
