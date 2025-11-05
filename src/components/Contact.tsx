import { useState } from 'react';
import { Mail, Phone, Linkedin, Github, Send, MapPin, Calendar, Globe } from 'lucide-react';
import type { ContactFormData } from '../types';

/**
 * Contact form that posts JSON to a Formspree endpoint (VITE_CONTACT_FORM_ENDPOINT).
 * Includes lightweight anti-bot protections:
 * - Honeypot hidden field ("website")
 * - Minimum time-on-page check (3s)
 * - LocalStorage throttle (default 3 sends / hour)
 * - Submit button disabling while sending
 */

export default function Contact() {
  // Read Formspree endpoint from Vite env (VITE_ prefix required)
  const CONTACT_FORM_ENDPOINT = import.meta.env.VITE_CONTACT_FORM_ENDPOINT as string | undefined;

  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  // honeypot field state (bots often fill extra fields)
  const [website, setWebsite] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Record when the form was mounted so we can block instant submissions
  const [mountedAt] = useState(() => Date.now());

  // Throttle configuration: adjust as needed
  const ALLOWED_PER_HOUR = 3;
  const THROTTLE_KEY = 'contact_form_sends';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic configuration guard
    if (!CONTACT_FORM_ENDPOINT || CONTACT_FORM_ENDPOINT.includes('REPLACE_WITH')) {
      alert(
        'Contact endpoint not configured. Set VITE_CONTACT_FORM_ENDPOINT in your .env.local to your Formspree endpoint (see .env.example).'
      );
      return;
    }

    // Honeypot: if filled, likely a bot — silently drop
    if (website.trim() !== '') {
      // Optionally log or silently return
      console.warn('Honeypot triggered — likely bot submission ignored.');
      return;
    }

    // Minimum time-on-page check (prevent instant automated submits)
    const MIN_MILLIS = 3000; // 3 seconds
    if (Date.now() - mountedAt < MIN_MILLIS) {
      alert('Please take a moment to complete the form before submitting.');
      return;
    }

    // Local per-browser throttling (simple)
    try {
      const stored = JSON.parse(localStorage.getItem(THROTTLE_KEY) || '[]') as number[];
      const windowStart = Date.now() - 60 * 60 * 1000; // 1 hour
      const recent = stored.filter((t) => t > windowStart);

      if (recent.length >= ALLOWED_PER_HOUR) {
        alert(
          'Too many messages sent from this browser recently. Please try again later or email: alpatamer@gmail.com'
        );
        return;
      }
    } catch (err) {
      // If localStorage is unavailable or corrupt, continue — throttle is best-effort
      console.warn('Throttle check failed', err);
    }

    setIsSubmitting(true);

    const payload = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
      _subject: `Website contact: ${formData.subject || 'No subject'}`,
    };

    try {
      const res = await fetch(CONTACT_FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        // Record send timestamp for throttle
        try {
          const stored = JSON.parse(localStorage.getItem(THROTTLE_KEY) || '[]') as number[];
          const windowStart = Date.now() - 60 * 60 * 1000;
          const recent = stored.filter((t) => t > windowStart);
          const updated = [...recent, Date.now()];
          localStorage.setItem(THROTTLE_KEY, JSON.stringify(updated));
        } catch (err) {
          console.warn('Failed to record throttle timestamp', err);
        }

        alert('Thank you — your message was sent. I will get back to you soon.');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        // Try parse response for helpful message
        const data = await res.json().catch(() => null);
        const msg = data?.error || data?.message || 'Failed to send message.';
        console.error('Formspree error', data);

        // Rate limit detection
        if (res.status === 429) {
          alert(
            "You're sending messages too quickly — please try again later or email me directly at alpatamer@gmail.com."
          );
        } else {
          alert(`Error: ${msg}`);
        }
      }
    } catch (err) {
      console.error('Network error', err);
      alert('Network error — please try again later or email: alpatamer@gmail.com');
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
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              {/* Honeypot (visually hidden) */}
              <div
                style={{
                  position: 'absolute',
                  left: '-10000px',
                  top: 'auto',
                  width: '1px',
                  height: '1px',
                  overflow: 'hidden',
                }}
                aria-hidden="true"
              >
                <label htmlFor="website">Website</label>
                <input
                  id="website"
                  name="website"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

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
                  className="w-full px-4 py-2.5 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-colors"
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
                  className="w-full px-4 py-2.5 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-colors"
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
                  className="w-full px-4 py-2.5 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-colors"
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
                  className="w-full px-4 py-2.5 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-colors"
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
                    <span>Send Message</span>
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