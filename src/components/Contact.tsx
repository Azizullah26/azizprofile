import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';

import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      setStatus('success');
      setForm({
        name: '',
        email: '',
        message: '',
      });
      
      // Reset status after 3 seconds
      setTimeout(() => setStatus('idle'), 3000);
    }, 2000);
  };

  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-sm p-8 rounded-2xl border border-cyan-400/20"
      >
        <p className="section-sub-text">Get in touch</p>
        <h3 className="section-head-text">Contact.</h3>

        {/* Contact Info */}
        <div className="mt-8 space-y-4">
          <div className="flex items-center gap-4 text-white-100">
            <div className="p-2 rounded-lg bg-cyan-400/20">
              <Mail className="w-5 h-5 text-cyan-400" />
            </div>
            <span>azizullah.dev@gmail.com</span>
          </div>
          <div className="flex items-center gap-4 text-white-100">
            <div className="p-2 rounded-lg bg-cyan-400/20">
              <Phone className="w-5 h-5 text-cyan-400" />
            </div>
            <span>+971 50 123 4567</span>
          </div>
          <div className="flex items-center gap-4 text-white-100">
            <div className="p-2 rounded-lg bg-cyan-400/20">
              <MapPin className="w-5 h-5 text-cyan-400" />
            </div>
            <span>Dubai, UAE</span>
          </div>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="contact-form"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className="contact-form-input"
              required
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className="contact-form-input"
              required
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What you want to say?"
              className="contact-form-input resize-none"
              required
            />
          </label>

          <button
            type="submit"
            disabled={loading}
            className="bg-gradient-to-r from-cyan-400 to-blue-500 py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            {loading ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                Send
              </>
            )}
          </button>

          {/* Status Messages */}
          {status === 'success' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 text-green-400 mt-4"
            >
              <CheckCircle className="w-5 h-5" />
              Thank you! Your message has been sent successfully.
            </motion.div>
          )}

          {status === 'error' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 text-red-400 mt-4"
            >
              <AlertCircle className="w-5 h-5" />
              Something went wrong. Please try again.
            </motion.div>
          )}
        </form>
      </motion.div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');