import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-800 ">
      <div className="bg-[#666DFF] h-[200px] py-8 px-6 grid grid-cols-2 items-center text-white container">
      
        <div className="container mx-auto text-center md:text-left">
          <h3 className="text-xl font-bold uppercase">Newsletter</h3>
          <p className="mt-2 text-sm">
            Subscribe to our newsletter to get the latest updates.
          </p>
        </div>

    
        <div className="container mx-auto flex justify-center md:justify-end">
          <input
            type="email"
            placeholder="Paresh@Pixeto.com"
            className="p-2 rounded-l-lg focus:outline-none text-gray-800"
          />
          <button className="p-2 bg-blue-700 text-white rounded-r-lg hover:bg-blue-800">
            Subscribe
          </button>
        </div>
      </div>

      {/* Footer Main Section */}
      <div className="container mx-auto py-10 px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* Left Section */}
          <div>
            <h4 className="text-xl font-semibold">
              Let's make something special
            </h4>
            <p className="mt-2">Let’s talk! 👍</p>
            <p className="mt-4">020 7993 2905</p>
            <p>hi@finsweet.com</p>
            <p className="mt-2">DLF Cybercity, Bhubaneswar, India, 652060</p>
          </div>

          {/* Middle Section */}
          <div className="flex flex-wrap gap-6">
            <div>
              <h5 className="font-medium">Home</h5>
              <ul className="mt-2 space-y-2 text-sm">
                <li>Service</li>
                <li>Company</li>
                <li>Career</li>
                <li>News</li>
              </ul>
            </div>
            <div>
              <h5 className="font-medium">Service</h5>
              <ul className="mt-2 space-y-2 text-sm">
                <li>Technical Support</li>
                <li>Testing</li>
                <li>Development</li>
                <li>AWS/Azure</li>
              </ul>
            </div>
          </div>

          {/* Right Section */}
          <div>
            <h5 className="font-medium">Resources</h5>
            <ul className="mt-2 space-y-2 text-sm">
              <li>About Us</li>
              <li>Privacy Policy</li>
              <li>Terms of Use</li>
              <li>Blog</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-gray-100 py-4 text-center">
        <div className="flex justify-between items-center max-w-screen-lg mx-auto">
          <p className="text-sm">© 2024 Finsweet</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-500">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="hover:text-blue-500">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-blue-500">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="hover:text-blue-500">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
