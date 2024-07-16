/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: true,
  images: {
    domains: [
      "via.placeholder.com",
      "www.blendb2b.com",
      "www.searchenginejournal.com",
      "images.unsplash.com",
      "i.ibb.co",
      "pbs.twimg.com",
      "plus.unsplash.com",
    ],
  },
};

export default nextConfig;
