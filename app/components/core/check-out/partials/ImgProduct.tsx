import Image from "next/image";

const ImgProduct = () => {
  return (
    <div className="space-y-4">
      <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-100">
        <Image
          src="/burger5.jpg"
          alt="Hamburguesa imagen"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default ImgProduct;
