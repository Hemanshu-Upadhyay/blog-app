"use client";

import { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import BackgroundGradientCard from "../components/GradientCard/main";

// Defined blog post data
interface BlogPost {
  id: number;
  title: string;
  author: string;
  image: string;
  slug: string;
}

const randomeUniqueNumber = () => {
  return Math.floor(Math.random() * 1000000);
};

const BlogListing = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchInitialPosts();
  }, []);

  const fetchInitialPosts = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://server-rlsk.onrender.com/api/posts"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch initial posts");
      }
      const data: BlogPost[] = await response.json();
      setPosts(data.slice(0, 10)); // Fetch initial 10 posts
      setLoading(false);
    } catch (error) {
      console.error("Error fetching initial posts:", error);
      setError("Something went wrong. Please try again later.");
      setLoading(false);
    }
  };

  const fetchMorePosts = async () => {
    try {
      // Simulate network delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const currentLength = posts.length;
      // Manually set the limit as we know we have only 60 Posts
      if (currentLength >= 60) {
        setHasMore(false);
        return;
      }
      const response = await fetch(
        "https://server-rlsk.onrender.com/api/posts"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch more posts");
      }
      const data: BlogPost[] = await response.json();
      const newPosts = data.slice(currentLength, currentLength + 10);
      setPosts((prevPosts) => [...prevPosts, ...newPosts]);
    } catch (error) {
      console.error("Error fetching more posts:", error);
    }
  };

  const clearSearch = () => {
    setSearch("");
    fetchInitialPosts();
    setHasMore(true);
  };

  const filteredPosts = search
    ? posts.filter(
        (post) =>
          post.title.toLowerCase().includes(search.toLowerCase()) ||
          post.author.toLowerCase().includes(search.toLowerCase())
      )
    : posts;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="relative mb-4 bg-inherit">
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded  bg-inherit"
        />
        {search && (
          <button
            onClick={clearSearch}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        )}
      </div>

      {loading && <h4 className="mt-6 text-center">Loading...</h4>}

      {error && <p className="text-red-500 mt-6 text-center">{error}</p>}

      {loading === false && filteredPosts.length === 0 && search !== "" ? (
        <p className="mt-6 text-center">No results found for "{search}".</p>
      ) : null}

      <InfiniteScroll
        dataLength={filteredPosts.length}
        next={fetchMorePosts}
        hasMore={hasMore}
        loader={
          filteredPosts.length === 0 || error ? null : (
            <h4 className="mt-6 text-center">Loading...</h4>
          )
        }
        endMessage={
          search.length > 1 ? null : (
            <p className="text-center mt-6">No more posts to show</p>
          )
        }
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredPosts.map((post) => (
            <BackgroundGradientCard
              key={randomeUniqueNumber()}
              title={post.title}
              author={post.author}
              image={post.image}
              slug={post.slug}
            />
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default BlogListing;
