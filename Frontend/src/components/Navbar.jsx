import { useState, useEffect } from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";

const categories = [
  "Finance",
  "World",
  "Education",
  "Research",
  "Travel",
  "Sports",
  "Business",
  "Entertainment",
  "Health",
  "Technology",
  "Science",
  "Politics",
  "Environment",
  "Lifestyle",
  "Food",
];

function Navbar({ setQuery }) {
  const [active, setActive] = useState("India");
  const [searchText, setSearchText] = useState("");
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleSearch = () => {
    if (!searchText.trim()) return;
    setQuery(searchText);
    setActive(null);
  };

  return (
    <>
  
      <div className="bg-gradient-to-r from-indigo-600 to-purple-700 p-3 flex items-center justify-between shadow-md">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <h1 className="text-2xl font-bold text-white tracking-wide">
            <span className="text-yellow-300">NEXUS</span>NEWS
          </h1>
        </div>

        <div className="flex items-center space-x-2 w-full max-w-xl mx-4">
          <div className="flex items-center w-full bg-white rounded-full overflow-hidden shadow">
            <input
              type="text"
              className="flex-grow px-5 py-2 text-sm text-gray-800 focus:outline-none"
              placeholder="e.g. INDIA"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <FiSearch className="text-gray-500 mr-4 cursor-pointer hover:text-indigo-600 transition" />
          </div>
          <button
            onClick={handleSearch}
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-5 py-2 rounded-full transition"
          >
            Search
          </button>
        </div>

      
        <div className="flex items-center space-x-5 text-white text-lg">
          <FaFacebookF className="hover:text-yellow-300 cursor-pointer transition" />
          <FaTwitter className="hover:text-yellow-300 cursor-pointer transition" />
          <FaInstagram className="hover:text-yellow-300 cursor-pointer transition" />
          <FaYoutube className="hover:text-yellow-300 cursor-pointer transition" />
        </div>

        <div className="ml-4 hidden md:block text-white text-sm font-mono">
          {currentDateTime.toString()}
        </div>
      </div>

   
      <div className="bg-neutral-800 flex flex-wrap px-4 py-2 text-white text-sm justify-center gap-y-1">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`cursor-pointer mx-2 px-2 py-1 hover:text-yellow-300 transition ${
              active === cat ? "text-yellow-400 font-bold underline" : ""
            }`}
            onClick={() => {
              setQuery(cat);
              setActive(cat);
            }}
          >
            {cat}
          </button>
        ))}
      </div>
    </>
  );
}

export default Navbar;
