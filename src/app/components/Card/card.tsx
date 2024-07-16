import Link from "next/link";

const Card = ({ title, author, image, slug }) => {
  return (
    <div className=" shadow-white rounded-lg overflow-hidden transform transition duration-500 hover:scale-105">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">
          <Link href={`/blog/${slug}`} className="hover:underline text-white">
            {title}
          </Link>
        </h2>
        <p className="text-white-600">{author}</p>
      </div>
    </div>
  );
};

export default Card;
