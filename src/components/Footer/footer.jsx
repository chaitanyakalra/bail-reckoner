import React from 'react';
import { X, Facebook, Youtube, Instagram, Send, Linkedin, Bitcoin, AlertTriangle, User, MessageCircle } from 'lucide-react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-links">
        <a href="#feedback">Feedback</a>
        <a href="#faq">FAQ</a>
        <a href="#contact">Contact Us</a>
        <a href="#policies">Website Policies</a>
        <a href="#privacy">Privacy Policy</a>
        <a href="#disclaimer">Disclaimer</a>
        </div>
      <div className="social-icons">
        <X size={20} /> <span>  |  </span>
        <Facebook size={20} /> <span>  |  </span>
        <Youtube size={20} color="red" /> <span>  |  </span>
        <Instagram size={20} color="#E1306C" /> <span>  |  </span>
        <Send size={20} color="#0088cc" /> <span>  |  </span>
        <Linkedin size={20} color="#0077b5" /> <span>  |  </span>
        <Bitcoin size={20} color="#f7931a" /> <span>  |  </span>
        <AlertTriangle size={20} color="orange" /> <span>  |  </span>
        <User size={20} color="#ff69b4" /> <span>  |  </span>
        <MessageCircle size={20} color="#25D366" />
      </div>
      <div className="footer-info">
        <p>Website Content Managed by Ministry of Home Affairs, Govt. of India. Best viewed in Mozilla Firefox, Google Chrome [A].</p></div>
        <div id="visitor-info" >
          <div>Visitor Count: 171458801</div>
          <div>Last Updated: 08/08/2024</div>
        </div>
    </footer>
  );
};

export default Footer;