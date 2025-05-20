import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-5 px-4 mt-12 shadow-inner">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-lg">
        
        <div>
          <h2 className="text-lg font-bold mb-3 text-yellow-300">NexusNews</h2>
          <p className="text-gray-100">
            Bringing you the latest updates from around the world in seconds , stay connected with us .
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-yellow-200 mb-3">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-yellow-300">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-300">
                Categories
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-300">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-300">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold text-yellow-200 mb-3">Legal</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-yellow-300">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-300">
                Terms of Use
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-300">
                Disclaimer
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold text-yellow-200 mb-3">Follow Us</h2>
          <div className="flex space-x-4 text-xl text-gray-200">
            <FaFacebookF className="hover:text-yellow-300 cursor-pointer" />
            <FaTwitter className="hover:text-yellow-300 cursor-pointer" />
            <FaInstagram className="hover:text-yellow-300 cursor-pointer" />
            <FaYoutube className="hover:text-yellow-300 cursor-pointer" />
          </div>
        </div>
      </div>

      <div className="text-center text-gray-300 mt-8 text-sm">
        &copy; {new Date().getFullYear()} NexusNews. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
