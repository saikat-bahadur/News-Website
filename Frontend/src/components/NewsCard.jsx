import { motion } from "framer-motion";

function NewsCard({ article }) {
  const { urlToImage, title, description, publishedAt, source, url } = article;

  if (!urlToImage) return null;

  const date = new Date(publishedAt).toLocaleString("en-US", {
    timeZone: "Asia/Jakarta",
  });

  return (
    <motion.div
      className="bg-white dark:bg-neutral-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition cursor-pointer border border-gray-200 dark:border-neutral-800"
      whileHover={{ scale: 1.03 }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <img
        src={urlToImage}
        alt="news"
        className="w-full h-48 object-cover rounded-t-lg shadow-sm"
      />
      <div className="p-5">
        <h2 className="font-semibold text-lg text-slate-900 dark:text-slate-100 mb-2 line-clamp-2">
          {title}
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-300 mb-3 line-clamp-3">
          {description}
        </p>
        <div className="text-xs text-slate-500 dark:text-slate-400 mb-2">
          {source.name} · {date}
        </div>
        <button
          className="cursor-pointer text-indigo-600 dark:text-indigo-400 font-medium hover:underline text-sm"
          onClick={() => window.open(url, "_blank")}
        >
          Read More →
        </button>
      </div>
    </motion.div>
  );
}

export default NewsCard;
