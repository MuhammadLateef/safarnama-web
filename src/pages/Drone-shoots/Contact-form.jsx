import { useState } from "react"
const videoOptions = [
  "Corporate Video",
  "Digital Video Commercial",
  "Video Animation",
  "Explainer Video",
  "T.V Commercial",
  "Arial Video Shoot",
  "360 Video Shoot",
]

function ContactForm({ onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    videoType: "Corporate Video",
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    const { name, phone, email, videoType, message } = formData;

    const whatsappMessage =
      `*Name:* ${name}%0A` +
      `*Phone:* ${phone}%0A` +
      `*Email:* ${email}%0A` +
      `*Subject:* ${videoType}%0A` +
      `*Message:* ${message}` +
      `_(This message was sent from your website's Drone Service form. Please provide more information!)_`;

    const whatsappUrl = `https://wa.me/923554713444?text=${encodeURI(whatsappMessage)}`;

    window.open(whatsappUrl, '_blank').focus();
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
      <div className="bg-white p-8 max-w-md w-full relative rounded-lg shadow-lg">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-500">
          CLOSE
        </button>
        <h2 className="text-3xl font-bold mb-6">Hire Us Now</h2>

        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name *"
                className="w-full p-3 rounded-sm bg-gray-100 text-black"
                required
              />
            </div>

            <div>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full p-3 rounded-sm bg-gray-100 text-black"
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email *"
                className="w-full p-3 rounded-sm bg-gray-100 text-black"
                required
              />
            </div>

            <div>
              <select
                name="videoType"
                value={formData.videoType}
                onChange={handleChange}
                className="w-full p-3 rounded-sm bg-gray-100 text-black appearance-none"
              >
                {videoOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message..."
                rows={5}
                className="w-full p-3 rounded-sm bg-gray-100 text-black"
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="bg-pink-600 text-white px-8 py-3 rounded-full hover:bg-pink-700 transition duration-300 flex items-center justify-center w-full"
              >
                Send Message
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        </form>

      </div>
    </div>
  )
}

export default ContactForm
