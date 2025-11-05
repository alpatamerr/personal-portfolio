import { useState } from 'react';
import { Mail, Phone, Linkedin, Github, Send, MapPin, Calendar, Globe } from 'lucide-react';
import type { ContactFormData } from '../types';

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/contact-form`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
          },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit form');
      }

      alert('Thank you for your message! I will get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your message. Please try again or email me directly at alpatamer@gmail.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-16 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 text-gray-900 dark:text-white">
          Contact
        </h2>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
          <span className="inline-flex items-center gap-2 px-3 py-2 bg-gray-100 dark:bg-gray-900 rounded-full text-sm text-gray-600 dark:text-gray-300">
            <MapPin size={16} className="text-cyan-600" />
            Based in the UK
          </span>

          <span className="inline-flex items-center gap-2 px-3 py-2 bg-gray-100 dark:bg-gray-900 rounded-full text-sm text-gray-600 dark:text-gray-300">
            <Calendar size={16} className="text-cyan-600" />
            Available for immediate start
          </span>

          <span className="inline-flex items-center gap-2 px-3 py-2 bg-gray-100 dark:bg-gray-900 rounded-full text-sm text-gray-600 dark:text-gray-300">
            <Globe size={16} className="text-cyan-600" />
            Open to remote opportunities
          </span>
        </div>

        <div className="max-w-3xl mx-auto grid grid-cols-1 gap-6">
          <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Get In Touch
            </h3>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                  <div className="bg-cyan-100 dark:bg-cyan-900 p-3 rounded-lg">
                    <Mail className="text-cyan-600 dark:text-cyan-400" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Email</p>
                    <a
                      href="mailto:alpatamer@gmail.com"
                      className="text-gray-900 dark:text-white font-medium hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                    >
                      alpatamer@gmail.com
                    </a>
                  </div>
                </div>

              <div className="flex items-start gap-4">
                  <div className="bg-cyan-100 dark:bg-cyan-900 p-3 rounded-lg">
                    <Phone className="text-cyan-600 dark:text-cyan-400" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Phone</p>
                    <a
                      href="tel:+447832954393"
                      className="text-gray-900 dark:text-white font-medium hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                    >
                      +44 7832 954 393
                    </a>
                  </div>
                </div>

              <div className="flex items-start gap-4">
                  <div className="bg-cyan-100 dark:bg-cyan-900 p-3 rounded-lg">
                    <Linkedin className="text-cyan-600 dark:text-cyan-400" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">LinkedIn</p>
                    <a
                      href="https://www.linkedin.com/in/alpatamer/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-900 dark:text-white font-medium hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                    >
                      View Profile
                    </a>
                  </div>
                </div>

              <div className="flex items-start gap-4">
                  <div className="bg-cyan-100 dark:bg-cyan-900 p-3 rounded-lg">
                    <Github className="text-cyan-600 dark:text-cyan-400" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">GitHub</p>
                    <a
                      href="https://github.com/alpatamerr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-900 dark:text-white font-medium hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                    >
                      View Projects
                    </a>
                  </div>
                </div>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-900 dark:text-white mb-2"
                >
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all text-gray-900 dark:text-white"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-900 dark:text-white mb-2"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all text-gray-900 dark:text-white"
                  placeholder="Your email"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-semibold text-gray-900 dark:text-white mb-2"
                >
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all text-gray-900 dark:text-white"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-900 dark:text-white mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2.5 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all resize-none text-gray-900 dark:text-white"
                  placeholder="Your message..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white py-2.5 rounded-lg font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>Sending...</>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
