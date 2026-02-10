import React from "react";
import { motion } from "framer-motion";
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
  Clock,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/products" },
    { name: "Order", path: "/products" },
    { name: "Order History", path: "/products" },
  ];

  const socialLinks = [
    {
      icon: Instagram,
      href: "#",
      label: "Instagram",
      color: "bg-[#F56040]",
    },
    {
      icon: Facebook,
      href: "#",
      label: "Facebook",
      color: "bg-[#1877F2]",
    },
    {
      icon: Twitter,
      href: "#",
      label: "Twitter",
      color: "bg-[#1DA1F2]",
    },
  ];

  return (
    <footer className="bg-surface border-t border-border pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <h3 className="text-3xl font-heading font-bold text-primary">
              Maa Bakery
            </h3>
            <p className="text-text-secondary leading-relaxed font-body max-w-xs">
              Serving delicious, fresh food with passion. Experience the best
              flavors in Bhubaneswar.
            </p>
            <div className="flex gap-4 pt-2">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`${social.color} w-10 h-10 rounded-full flex items-center justify-center text-white shadow-soft transition-all`}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-lg font-heading font-bold text-text-primary mb-6">
              Quick Links
            </h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-text-muted hover:text-primary transition-colors font-body text-[15px]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-lg font-heading font-bold text-text-primary mb-6">
              Contact Us
            </h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1 shrink-0" />
                <div className="text-text-secondary font-body text-[15px] leading-snug">
                  <span className="font-bold text-text-primary block mb-1">
                    Maa Bakery
                  </span>
                  Nuagaon, Niali, Khulisa,
                  <br />
                  Odisha 754004
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a
                  href="tel:+918018306265"
                  className="text-text-secondary hover:text-primary transition-colors font-body text-[15px]"
                >
                  +91 80183 06265
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a
                  href="mailto:foodfantasy049@gmail.com"
                  className="text-text-secondary hover:text-primary transition-colors font-body text-[15px]"
                >
                  maabakery@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Opening Hours Column */}
          <div>
            <h4 className="text-lg font-heading font-bold text-text-primary mb-6">
              Opening Hours
            </h4>
            <div className="bg-surface border border-border rounded-2xl p-4 shadow-soft mb-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-primary">
                  <Clock className="w-4 h-4" />
                </div>
                <span className="font-bold text-text-primary text-sm">
                  Status
                </span>
              </div>
              <span className="bg-success/10 text-success text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                Open Now
              </span>
            </div>

            <div className="space-y-3 font-body text-sm">
              <div className="flex justify-between items-center text-text-secondary">
                <span>Mon - Fri</span>
                <span className="font-bold text-text-primary">
                  8:00 AM - 10:00 PM
                </span>
              </div>
              <div className="flex justify-between items-center text-text-secondary">
                <span>Sat - Sun</span>
                <span className="font-bold text-text-primary">
                  8:00 AM - 10:00 PM
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-muted text-sm font-body">
            © {new Date().getFullYear()} Maa Bakery. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-text-muted font-body">
            <Link
              to="#"
              className="hover:text-text-secondary transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="text-border">|</span>
            <Link
              to="#"
              className="hover:text-text-secondary transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
