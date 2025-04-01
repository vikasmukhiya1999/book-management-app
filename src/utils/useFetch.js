import { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();

        const books = data.reading_log_entries.map((entry, index) => ({
          id: index + 1,
          title: entry.work.title,
          author: entry.work.author_names
            ? entry.work.author_names[0]
            : "Unknown",
          coverImage: entry.work.cover_id
            ? `https://covers.openlibrary.org/b/id/${entry.work.cover_id}-M.jpg`
            : "https://dummyimage.com/140x100.png/5fa2dd/ffffff",
          description: "No description available.",
        }));

        setData(books);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
}

export default useFetch;
