import React, { useState } from 'react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add logic to handle form submission (e.g., send the data to a backend)
    console.log('Form submitted:', formData);
    alert(
      'Thank you for contacting Clean Wheels! We will get back to you shortly.'
    );
  };

  return (
    <section className="bg-blue-700 text-white py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">Get in Touch</h2>
        <p className="text-center mb-12">
          We are here to assist you with all your car wash needs. Feel free to
          reach out to us!
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-lg mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-3 rounded-lg border-2 border-blue-500 text-black"
                placeholder="Your Full Name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-lg mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-3 rounded-lg border-2 border-blue-500 text-black"
                placeholder="Your Email Address"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="phone" className="block text-lg mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full p-3 rounded-lg border-2 border-blue-500 text-black"
              placeholder="Your Phone Number"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-lg mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full p-3 rounded-lg border-2 border-blue-500 text-black"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-3 bg-yellow-400 text-blue-700 font-bold text-lg rounded-lg shadow hover:bg-yellow-500 transition-colors"
            >
              Submit
            </button>
          </div>
        </form>

        <div className="mt-12 text-center">
          <p className="text-lg">
            Or you can reach us directly at:
            <span className="font-bold block mt-1">+123 456 7890</span>
            <span className="font-bold block mt-1">
              support@cleanwheels.com
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
