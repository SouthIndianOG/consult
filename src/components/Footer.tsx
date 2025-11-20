import React from 'react';
import { Instagram, Youtube, Linkedin, Facebook, Stethoscope } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-medical-900 border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">

          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img src="/logo.png" alt="SouthIndian OG" className="h-10 w-auto" />
              <span className="text-xl font-bold font-heading">SouthIndian OG</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-6">
              Bridging the gap between complex medical science and accessible healthcare.
              Empowering patients with knowledge and evidence-based care.
            </p>
            <div className="flex gap-4">
              <SocialLink href="https://www.instagram.com/southindianog/" icon={<Instagram className="w-5 h-5" />} />
              <SocialLink href="https://www.youtube.com/@RealSouthindianOG" icon={<Youtube className="w-5 h-5" />} />
              <SocialLink href="https://www.linkedin.com/in/southindianog/" icon={<Linkedin className="w-5 h-5" />} />
              <SocialLink href="https://www.facebook.com/OGSouthIndian/" icon={<Facebook className="w-5 h-5" />} />
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-heritage-gold transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-heritage-gold transition-colors">Second Opinion</a></li>
              <li><a href="#services" className="hover:text-heritage-gold transition-colors">Care Programs</a></li>
              <li><a href="https://calendar.app.google/eNwjgcKkDFwYdMKH8" className="hover:text-heritage-gold transition-colors">Book Consultation</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-6 text-white">Contact</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>Government Medical College</li>
              <li>Thiruvananthapuram, Kerala</li>
              <li>Prashanth459g@gmail.com</li>
              <li>+91 86600 30840</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} SouthIndian OG. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-heritage-gold hover:text-white transition-all duration-300"
  >
    {icon}
  </a>
);

export default Footer;