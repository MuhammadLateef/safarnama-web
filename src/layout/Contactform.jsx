import React, { useState } from "react";
import { Facebook, Instagram, Youtube } from "lucide-react";
export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;

    const whatsappMessage =
      `*Name:* ${name}%0A` +
      `*Email:* ${email}%0A` +
      `*Subject:* ${subject}%0A` +
      `*Message:* ${message}` +
      `_(This message was sent from your website contact form)_`;

    const whatsappUrl = `https://wa.me/923554713444?text=${encodeURI(whatsappMessage)}`;

    window.open(whatsappUrl, '_blank').focus();
  };
  return (
    <div className="min-h-screen  bg-gray-100 hover:bg-gray-200 text-gray-900 transition-all duration-300">
      <div className="container max-w-[90%] mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-3">Get in Touch</h1>
          <p className="text-gray-600">We're here to help! Reach out to us through any of our contact channels.</p>
        </div>
        {/* Contact Info Cards */}
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Connect with Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            {
              title: "Head Office",
              content: [
                "SAFARNAMA TOURS SMC PVT LTD",
                "safarnama tours, airport road skardu",
                "airport Rd, Skardu",
                "Gilgit Baltistan, Pakistan"
              ]
            },
            {
              title: "Email Addresses",
              content: [
                "info@safarnama.com (General Inquiries)",
                "executive@safarnama.com (Executive Office)",
              ]
            },
            {
              title: "WhatsApp Business",
              content: [
                "Executive Office: +92 35547134441",
                "Tourism Department: +92 340 1557615"
              ]
            }
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl border border-gray-200 transition-all duration-300"
            >
              <h3 className="text-lg font-semibold mb-4">{item.title}</h3>
              <div className="text-gray-700 space-y-2">
                {item.content.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
              <a href="#" className="inline-block text-blue-600 mt-4 hover:underline transition">
                Contact Now →
              </a>
            </div>
          ))}
        </div>


        {/* Contact Form */}
        <div className="max-w-2xl mx-auto bg-white p-8 m-8 rounded-lg shadow-md border border-gray-200 transition-all duration-300">
          <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700">Your Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 rounded bg-gray-100 border border-gray-300"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 rounded bg-gray-100 border border-gray-300"
                placeholder="Email Address"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full p-3 rounded bg-gray-100 border border-gray-300"
                placeholder="Subject"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full p-3 rounded bg-gray-100 border border-gray-300"
                placeholder="Write your message here..."
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#FAB12F] hover:bg-[#d9bd8c] text-white font-semibold py-3 rounded-md transition"
            >
              Send Message
            </button>
          </form>
        </div>
        <div className="max-w-4xl mx-auto mt-12">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Follow us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <Facebook className="w-5 h-5 text-white" />,
                label: "Facebook",
                handle: "@Emran Safarnama",
                href: "https://www.facebook.com/share/12JSSLg8pjQ/?mibextid=wwXIfr",
              },
              {
                icon: <Instagram className="w-5 h-5 text-white" />,
                label: "Instagram",
                handle: "@emran_safarnama",
                href: "https://www.instagram.com/emran_safarnama?igsh=dDl4NXkzejlleTNv",
              },
              {
                icon: <Youtube className="w-5 h-5 text-white" />,
                label: "Youtube",
                handle: "@safarnamaa",
                href: "https://www.youtube.com/@emransafarnama",
              }
            ].map((item, index) => (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-white border border-gray-200 p-4 rounded-lg hover:shadow-md transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center mr-3 shadow-sm">
                  {item.icon}
                </div>
                <div>
                  <p className="font-semibold text-gray-800">{item.label}</p>
                  <p className="text-sm text-gray-500">{item.handle}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
