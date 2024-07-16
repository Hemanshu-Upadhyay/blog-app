import Modal from "@/app/components/modal/Modal";
import photos, { Photo } from "../../../../../../public/photos";
import PhotoCard from "@/app/components/modal/PhotoCard";

export default function PhotoModal({
  params: { id },
}: {
  params: { id: string };
}) {
  const photo: Photo = photos.find((p) => p.id === id)!;

  return (
    <Modal>
      <PhotoCard photo={photo} />
    </Modal>
  );
}
