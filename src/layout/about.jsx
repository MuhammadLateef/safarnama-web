import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  const team = [
    { name: 'Emran Ali', role: 'CEO' },
    { name: 'Muhammad Kazim', role: 'COO' },
    { name: 'Asghar Ali', role: 'Director Sales' },
    { name: 'Muhammad Yousuf', role: 'R&D Lead' },
  ];

  const values = [
    {
      icon: '⭐',
      title: 'Excellence',
      desc: 'We strive for excellence in every service we provide.',
    },
    {
      icon: '🛡️',
      title: 'Integrity',
      desc: 'We conduct our business with honesty and transparency.',
    },
    {
      icon: '💡',
      title: 'Innovation',
      desc: 'We continuously improve and adapt to changing needs.',
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Header */}
      <section className="bg-blue-50 py-16 text-center">
        <h1 className="text-4xl font-bold text-blue-900 mb-4">About RINOR</h1>
        <p className="text-lg text-blue-700 max-w-2xl mx-auto">
          Your trusted partner for travel, tourism, and visa services in Pakistan.
        </p>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 px-4 max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-all border">
          <h2 className="text-2xl font-semibold text-blue-900 mb-3">Our Vision</h2>
          <p>
            To be the leading travel and tourism company in Pakistan, known for excellence, innovation, and customer satisfaction.
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-all border">
          <h2 className="text-2xl font-semibold text-blue-900 mb-3">Our Mission</h2>
          <p>
            To provide exceptional travel experiences and visa services while promoting Pakistan's tourism and enabling seamless international travel.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-50 py-16 px-4">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-10">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {team.map((member, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-all text-center border">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-yellow-100 flex items-center justify-center text-2xl">
                👤
              </div>
              <h3 className="text-xl font-semibold text-blue-900">{member.name}</h3>
              <p className="text-blue-700">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-10">Our Core Values</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-all text-center border">
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-yellow-100 flex items-center justify-center text-xl">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold text-blue-900">{value.title}</h3>
              <p className="text-gray-700">{value.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-100 to-gray-200 py-20 text-center">
        <h2 className="text-4xl font-bold text-blue-900 mb-4">Ready to Start Your Journey?</h2>
        <p className="text-lg text-blue-800 max-w-xl mx-auto mb-8">
          Contact us today to plan your next adventure or get expert help with your visa application.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-3 rounded-lg transition-transform transform hover:scale-105"
        >
          Contact Us Now
        </Link>
      </section>
    </div>
  );
};

export default AboutPage;
