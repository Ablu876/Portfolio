import React from "react";
import {
  FaLinkedinIn,
  FaGithub,
  FaTelegramPlane,
  FaWhatsapp,
} from "react-icons/fa";
import { SiX } from "react-icons/si"; // Importing the 'X' icon from react-icons

function Footer() {
  return (
    <>
      <hr />
      <footer className="py-12">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className="flex flex-col items-center justify-center">
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/shaik-ablu-hussain-17b052189"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={24} />
              </a>
              <a
                href="https://github.com/Ablu876"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="hover:text-gray-700"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://t.me/Shaik143256/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
                className="hover:text-blue-500"
              >
                <FaTelegramPlane size={24} />
              </a>
              <a
                href="https://wa.me/+916300773422?text=Hi,%20I'm%20Shaik%20Ablu%20Hussain,%20a%20fresher%20looking%20for%20jobs%20or%20freelance%20projects%20in%20data%20science%20and%20web%20development.%20Let's%20connect!"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="hover:text-green-500"
              >
                <FaWhatsapp size={24} />
              </a>
            </div>
            <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center">
              <p className="text-sm">
                &copy; 2024 Your Company. All rights reserved.
              </p>
              <p className="text-sm">Supportive Partner ❤️ Shaik Ablu Hussain</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
