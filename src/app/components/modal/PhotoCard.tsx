import Image from "next/image";
import { Photo } from "../../../../public/photos";

export default function PhotoCard({ photo }: { photo: Photo }) {
  return (
    <>
      <Image
        alt=""
        src={photo.imageSrc}
        height={600}
        width={600}
        className="col-span-1 aspect-square w-full object-cover"
      />

      <div className="  bg-slate-500 p-2 px-4">
        <h3 className="font-serif text-xl font-medium">{photo.name}</h3>
        <p className="text-sm text-white"> {photo.role}</p>
      </div>
    </>
  );
}
