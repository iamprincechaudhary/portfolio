import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-dark-text">Get In Touch</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Have a project in mind? Let's work together to create something amazing.
          </p>
        </div>

        {/* Contact Information and Form */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="p-3 bg-purple-50 dark:bg-dark-card rounded-lg">
                <Mail className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-dark-text mb-1">Email</h3>
                <p className="text-gray-600 dark:text-gray-400">prince1905tech@gmail.com</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="p-3 bg-purple-50 dark:bg-dark-card rounded-lg">
                <Phone className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-dark-text mb-1">Phone</h3>
                <p className="text-gray-600 dark:text-gray-400">+977 9819621905</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start gap-4">
              <div className="p-3 bg-purple-50 dark:bg-dark-card rounded-lg">
                <MapPin className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-dark-text mb-1">Location</h3>
                <p className="text-gray-600 dark:text-gray-400">Kathmandu, Nepal</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-6 bg-white dark:bg-dark-card p-8 rounded-lg shadow-md">
            {/* Name Field */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent bg-gray-50 dark:bg-dark-bg text-gray-900 dark:text-gray-200"
              />
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent bg-gray-50 dark:bg-dark-bg text-gray-900 dark:text-gray-200"
              />
            </div>

            {/* Message Field */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Write your message"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent bg-gray-50 dark:bg-dark-bg text-gray-900 dark:text-gray-200"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full px-8 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
