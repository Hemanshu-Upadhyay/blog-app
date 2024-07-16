export type Photo = {
  id: string;
  name: string;
  role: string;
  imageSrc: string;
};

const photos: Photo[] = [
  {
    id: "1",
    name: "Hemanshu Upadhyay",
    role: "Product Manager",
    imageSrc: "/assets/hemanshu.jpg",
  },
  {
    id: "2",
    name: "Vaibhav Sharma",
    role: "Head Writer",
    imageSrc: "/assets/vaibhav.png",
  },
  {
    id: "3",
    name: "Piyuesh Kumar",
    role: "Marketing Head",
    imageSrc: "/assets/piyuesh.png",
  },
  {
    id: "4",
    name: "Niket",
    role: "Lead Writer",
    imageSrc: "/assets/niket.png",
  },
  {
    id: "5",
    name: "Archana Agivale",
    role: "Content Reviewer",
    imageSrc: "/assets/archna.png",
  },
  {
    id: "7",
    name: "Aman",
    role: "SEO Engineer",
    imageSrc: "/assets/Aman.png",
  },
];

export default photos;
