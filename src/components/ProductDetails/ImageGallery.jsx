export default function ImageGallery({ images, mainImage, setMainImage, title }) {
  return (
    <>
      <div className="flex flex-col gap-4 items-center">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            onClick={() => setMainImage(img)}
            className={`w-24 h-24 object-contain border-2 p-1 rounded cursor-pointer transition-all ${
              mainImage === img ? "border-[#35AFA0]" : "border-[#E7ECF0] hover:border-[#80D8C7]"}`
            }
            alt={`Thumbnail ${i + 1}`}
            loading="lazy"
          />
        ))}
      </div>

      <div className="flex justify-center items-center border rounded-md border-[#E7ECF0] h-[600px] px-6">
        <img src={mainImage} className="w-full h-full object-contain max-w-[400px] md:max-w-full p-5" alt={title}  loading="lazy"/>
      </div>
    </>
  );
}
