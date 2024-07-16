"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Breadcrumb from "@/app/components/Breadcrumb/breadCrumb";
interface BlogPost {
  id: number;
  title: string;
  author: string;
  image: string;
  slug: string;
  createdDate: string;
  tags: string[];
  content: {
    type: string;
    text?: string;
    id?: string;
    src?: string;
    alt?: string;
  }[];
}

const BlogDetail = ({ post }: { post: BlogPost }) => {
  const [activeHeading, setActiveHeading] = useState<string>("");
  const [showGoToTop, setShowGoToTop] = useState<boolean>(false);
  const headingsRef = useRef<{ [key: string]: HTMLHeadingElement }>({});
  const [highlightedHeading, setHighlightedHeading] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const headingElements = Object.values(headingsRef.current);
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      let foundActiveHeading = false;
      for (let heading of headingElements) {
        const { offsetTop, id } = heading;
        if (scrollPosition >= offsetTop) {
          setActiveHeading(id);
          setHighlightedHeading(id);

          setTimeout(() => {
            setHighlightedHeading("");
          }, 1000);

          foundActiveHeading = true;
        }
      }

      if (!foundActiveHeading) {
        setActiveHeading("");
      }

      if (window.scrollY > window.innerHeight) {
        setShowGoToTop(true);
      } else {
        setShowGoToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleQuickLinkClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveHeading(id);
      setTimeout(() => {
        setActiveHeading("");
      }, 300);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderContent = (content: any[]) => {
    return content.map((block, index) => {
      if (block.type === "paragraph") {
        return <p key={index}>{block.text}</p>;
      } else if (block.type === "heading") {
        return (
          <h2
            className={`text-white text-2xl mt-5 font-extrabold `}
            key={index}
            id={block.id}
            ref={(el) => (headingsRef.current[block.id] = el)}
          >
            {block.text}
          </h2>
        );
      } else if (block.type === "image") {
        return (
          <div key={index} className="mb-4">
            <Image
              src={block.src}
              alt={block.alt}
              width={800}
              height={400}
              className="w-full"
            />
          </div>
        );
      }
      return null;
    });
  };

  if (!post) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        Loading...
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 flex relative">
      <div className="w-1/4 pr-8 hidden lg:block">
        <div className="sticky top-20">
          <h2 className="text-xl font-bold mb-4">Quick Links</h2>
          <ul>
            {post.content
              .filter((block: { type: string }) => block.type === "heading")
              .map((heading, index) => (
                <li key={index} className="mb-2 text-white">
                  <a
                    href={`#${heading.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleQuickLinkClick(heading.id);
                    }}
                    className={
                      activeHeading === heading.id
                        ? "font-bold text-fuchsia-100 underline"
                        : ""
                    }
                  >
                    {heading.text}
                  </a>
                </li>
              ))}
          </ul>
        </div>
      </div>
      <div className="w-full lg:w-3/4">
        <Breadcrumb />
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <p className="dark:text-gray-400 mb-2">
          By {post.author} on {post.createdDate}
        </p>
        <div className="mb-4">
          {post.tags.map((tag, index) => (
            <span key={index} className="text-blue-500 dark:text-blue-400 mr-2">
              #{tag}
            </span>
          ))}
        </div>
        <Image
          src={post.image}
          alt={post.title}
          width={800}
          height={400}
          className="w-full mb-4"
        />
        <div className="prose prose-lg text-white font-light">
          {renderContent(post.content)}
        </div>
      </div>
      {showGoToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md"
        >
          Go to Top
        </button>
      )}
    </div>
  );
};

export default BlogDetail;
