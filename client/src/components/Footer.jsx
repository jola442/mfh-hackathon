import { FaFacebookF, FaInstagram, FaGlobe } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-6">
      <div className="max-container flex flex-col md:flex-row items-center justify-around space-y-4 md:space-y-0">
        {/* Logo and Copyright */}
        <div className="flex items-center space-x-4">
          <img
            src={"/src/assets/images/rccgLogo.png"}
            alt="RCCG Logo"
            width={50}
            height={50}
          />
          <span className="font-fjalla text-lg">
            © {new Date().getFullYear()} RCCG MFH. All Rights Reserved.
          </span>
        </div>

        {/* Social Links */}
        <div className="flex space-x-4">
          <a
            href="https://www.facebook.com/rccgmfh"
            target="_blank"
            rel="noreferrer"
            className="hover:text-gray-300 transition-colors"
          >
            <FaFacebookF size={20} />
          </a>
          <a
            href="https://www.rccgmfh.org"
            target="_blank"
            rel="noreferrer"
            className="hover:text-gray-300 transition-colors"
          >
            <FaGlobe size={20} />
          </a>
          <a
            href="https://www.instagram.com/mfhyoungadults/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-gray-300 transition-colors"
          >
            <FaInstagram size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
