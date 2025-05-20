import NewsCard from "./NewsCard";

function NewsList({ articles }) {
  if (!articles.length) {
    return <p className="text-center mt-10 text-gray-600">No news found.</p>;
  }

  return (
    <div className="grid gap-6 px-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {articles.map((article, index) => (
        <NewsCard key={index} article={article} />
      ))}
    </div>
  );
}
export default NewsList;