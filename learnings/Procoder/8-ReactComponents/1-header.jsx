// Import React to enable JSX
import React from "react";

/*
 * Header Component
 * ----------------
 * This component represents the top navigation bar of the website.
 * Uses semantic HTML and Tailwind CSS for styling.
 */
const Header = () => {
  return (
    // Semantic header tag (best practice)
    <header className="w-full bg-blue-600 text-white">
      
      {/* Navigation container */}
      <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo / Brand Name */}
        <h1 className="text-xl font-bold">
          MyWebsite
        </h1>

        {/* Navigation links */}
        <ul className="flex gap-6 text-lg">
          
          {/* Each link is inside <li> and <a> */}
          <li>
            <a href="/" className="hover:text-gray-200">
              Home
            </a>
          </li>

          <li>
            <a href="/about" className="hover:text-gray-200">
              About
            </a>
          </li>

          <li>
            <a href="/contact" className="hover:text-gray-200">
              Contact
            </a>
          </li>

        </ul>
      </nav>
    </header>
  );
};

export default Header;
