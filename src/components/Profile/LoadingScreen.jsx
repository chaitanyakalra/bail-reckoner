import React from 'react';
import { motion } from 'framer-motion';
import { Scale } from 'lucide-react';
import './profile.css';

const LoadingScreen = () => (
  <motion.div 
    className="loading-screen"
    initial={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.25 }}
  >
    <Scale size={48} className="animate-pulse" />
</motion.div>
);

export default LoadingScreen;