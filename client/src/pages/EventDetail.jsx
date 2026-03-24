import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Users, Trophy, AlertCircle, ArrowLeft } from 'lucide-react';

const EventDetail = () => {
  const { eventName } = useParams();
  const navigate = useNavigate();

  // We should dynamically load event data here based on eventName in the future.
  // For now, this is a placeholder generic structure.
  
  useEffect(() => {
    // Scroll to top on load
    window.scrollTo(0, 0);
  }, []);

  const formattedName = eventName.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4">
        
        <button 
          onClick={() => navigate('/events')}
          className="flex items-center text-gray-500 hover:text-primary transition-colors mb-8 group"
        >
          <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Events
        </button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 relative overflow-hidden"
        >
          {/* Subtle Accent Line */}
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-500 to-red-600"></div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-red-50 text-primary font-semibold text-sm mb-4">
                Category / Tech
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">{formattedName}</h1>
            </div>
            
            <a 
              href="https://luma.com/tqtln2i2"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white font-bold py-3 px-8 rounded-full shadow-[0_4px_14px_rgba(255,0,0,0.39)] hover:shadow-[0_6px_20px_rgba(255,0,0,0.39)] hover:-translate-y-1 transition-all duration-200 whitespace-nowrap"
            >
              Register Now
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 py-6 border-y border-gray-100">
            <div className="flex items-center text-gray-700">
              <Calendar className="text-primary mr-3" size={24} />
              <div>
                <p className="text-sm text-gray-500">Date / Phase</p>
                <p className="font-semibold">April 10-12, 2026</p>
              </div>
            </div>
            <div className="flex items-center text-gray-700">
              <Users className="text-primary mr-3" size={24} />
              <div>
                <p className="text-sm text-gray-500">Eligibility</p>
                <p className="font-semibold">All College Students</p>
              </div>
            </div>
            <div className="flex items-center text-gray-700">
              <Trophy className="text-primary mr-3" size={24} />
              <div>
                <p className="text-sm text-gray-500">Prize Pool</p>
                <p className="font-semibold">₹50,000+</p>
              </div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none mb-10 text-gray-600">
            <h3 className="text-2xl font-bold text-foreground mb-4">About the Event</h3>
            <p className="mb-6">
              Welcome to {formattedName}! This is a thrilling competition that challenges participants 
              to showcase their skills, creativity, and problem-solving abilities. Join us for 
              an unforgettable experience filled with learning, networking, and intense competition.
            </p>

            <h3 className="text-2xl font-bold text-foreground mb-4">Rules & Guidelines</h3>
            <ul className="list-disc pl-5 space-y-2 mb-6">
              <li>Participants must carry their valid college ID cards.</li>
              <li>Teams must consist of 2-4 members.</li>
              <li>Plagiarism of any form will lead to immediate disqualification.</li>
              <li>The decision of the judges will be final and binding.</li>
            </ul>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-xl p-6 flex items-start">
            <AlertCircle className="text-primary mr-4 flex-shrink-0 mt-1" size={24} />
            <div>
              <h4 className="font-bold text-primary mb-1">Important Note</h4>
              <p className="text-red-800 text-sm">
                Requires Transaction File Pass to participate in this event. Make sure you have completed
                the payment and possess the valid pass before registering for the individual event.
              </p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <a 
              href="https://luma.com/tqtln2i2"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-white font-bold py-4 px-12 rounded-full shadow-[0_4px_14px_rgba(255,0,0,0.39)] hover:shadow-[0_6px_20px_rgba(255,0,0,0.39)] hover:-translate-y-1 transition-all duration-200 text-lg"
            >
              Register Now →
            </a>
          </div>

        </motion.div>
      </div>
    </div>
  );
};

export default EventDetail;
