export default function FlowerDetailPicture({ image, name, scientificName }) {
  return (
    <div className="relative rounded-xl overflow-hidden shadow">
      <img
        src={image}
        alt={name}
        className="w-full h-150 object-cover"
      />
      <div
        className="absolute bottom-0 left-0 w-full p-9 text-black"
        style={{
          height: "32%",
          background: `linear-gradient(
            to top,
            rgba(0, 0, 0, 0) 0%,
            rgba(0, 0, 0, 0.3) 50%,
            rgba(0, 0, 0, 0) 100%
          )`
        }}
      >
        <h2 className="text-5xl font-black mb-3">{name}</h2>
        <p className="text-xl text-gray-500 font-bold">{scientificName}</p>
      </div>
    </div>
  );
}
