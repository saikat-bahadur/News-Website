import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import NewsList from "./components/NewsList";
import Footer from "./components/Footer";

function App() {
  const [articles, setArticles] = useState([]);
  const [query, setQuery] = useState("India");

  const fetchNews = async (searchQuery) => {
  
   const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/news?q=${searchQuery}`);
  const data = await res.json();
  setArticles(data.articles || []);
};


  useEffect(() => {
    fetchNews(query);
  }, [query]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar setQuery={setQuery} />
      <main className="flex-grow bg-gray-100 py-6">
        <NewsList articles={articles} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
