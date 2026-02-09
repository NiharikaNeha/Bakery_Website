import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, MapPin, Clock } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      content: "+1 (555) 123-4567",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      content: "hello@sweetbakery.com",
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Address",
      content: "123 Bakery Lane, Sweet City, SC 12345",
      color: "from-orange-500 to-pink-500"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Hours",
      content: "Mon-Sat: 7AM-8PM, Sun: 8AM-6PM",
      color: "from-purple-500 to-purple-600"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-orange-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Get in <span className="bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We'd love to hear from you! Whether you have a question, special order, or just want to say hello.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h3>
              
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                    >
                      <label className="block text-gray-700 font-medium mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                        placeholder="John Doe"
                      />
                    </motion.div>

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                    >
                      <label className="block text-gray-700 font-medium mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                        placeholder="john@example.com"
                      />
                    </motion.div>
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                  >
                    <label className="block text-gray-700 font-medium mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                      placeholder="+1 (555) 123-4567"
                    />
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                  >
                    <label className="block text-gray-700 font-medium mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 resize-none"
                      placeholder="Tell us how we can help you..."
                    />
                  </motion.div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <Send className="h-5 w-5" />
                    <span>Send Message</span>
                  </motion.button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Message Sent!</h3>
                  <p className="text-gray-600">We'll get back to you within 24 hours.</p>
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-2xl shadow-lg p-6 flex items-start space-x-4"
              >
                <div className={`bg-gradient-to-r ${info.color} p-3 rounded-lg text-white flex-shrink-0`}>
                  {info.icon}
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-1">
                    {info.title}
                  </h4>
                  <p className="text-gray-600">
                    {info.content}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <div className="relative h-64 bg-gradient-to-br from-orange-100 to-pink-100">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-orange-600 mx-auto mb-2" />
                    <p className="text-gray-700 font-medium">Find us on the map</p>
                    <p className="text-gray-600 text-sm">123 Bakery Lane, Sweet City</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;