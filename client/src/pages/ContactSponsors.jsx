import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactSponsors = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Sponsorship Team</h1>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            For sponsorships, partnerships, and collaborations, reach out to our team directly.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="bg-white p-8 rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:-translate-y-2 hover:shadow-[0_4px_32px_rgba(255,0,0,0.1)] transition-all duration-300 border border-gray-100 flex flex-col items-center"
            >
              <div className="w-12 h-12 bg-red-50 text-primary rounded-full flex items-center justify-center mb-6">
                <Mail size={24} />
              </div>
              <h3 className="text-lg font-bold mb-1">Aman Nehra</h3>
              <p className="text-primary text-xs font-bold uppercase tracking-widest mb-3">Sponsorship Lead</p>
              <a href="mailto:2025btechaidsaman20789@poornima.edu.in" className="text-gray-500 hover:text-primary transition-colors text-sm break-all font-medium">
                2025btechaidsaman20789<br/>@poornima.edu.in
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="bg-white p-8 rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:-translate-y-2 hover:shadow-[0_4px_32px_rgba(255,0,0,0.1)] transition-all duration-300 border border-gray-100 flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 bg-red-50 text-primary rounded-full flex items-center justify-center mb-6">
                <Phone size={24} />
              </div>
              <h3 className="text-lg font-bold mb-1">Direct Line</h3>
              <p className="text-primary text-xs font-bold uppercase tracking-widest mb-3">Call or WhatsApp</p>
              <a href="tel:+919079657236" className="text-gray-500 hover:text-primary transition-colors text-sm font-medium">
                +91 90796 57236
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="bg-white p-8 rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:-translate-y-2 hover:shadow-[0_4px_32px_rgba(255,0,0,0.1)] transition-all duration-300 border border-gray-100 flex flex-col items-center"
            >
              <div className="w-12 h-12 bg-red-50 text-primary rounded-full flex items-center justify-center mb-6">
                <MapPin size={24} />
              </div>
              <h3 className="text-lg font-bold mb-1">Address</h3>
              <p className="text-primary text-xs font-bold uppercase tracking-widest mb-3">Physical Office</p>
              <p className="text-gray-500 text-sm font-medium leading-relaxed">
                IS-2027–2031, Ramchandrapura,<br/>
                Sitapura Extension,<br/>
                Jaipur, Rajasthan
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <a 
              href="mailto:2025btechaidsaman20789@poornima.edu.in"
              className="block sm:inline-block w-full sm:w-auto bg-primary text-white font-bold py-4 px-10 rounded-full shadow-[0_4px_14px_rgba(255,0,0,0.39)] hover:shadow-[0_6px_20px_rgba(255,0,0,0.39)] hover:-translate-y-1 transition-all duration-200"
            >
              Reach Out Now
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactSponsors;
