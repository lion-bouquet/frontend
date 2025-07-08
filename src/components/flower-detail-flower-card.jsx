export default function FlowerDetailFlowerCard({ image, name }) {
  return (
    <div className="rounded-lg overflow-hidden shadow hover:shadow-md transition-shadow duration-200 text-center">
      <img src={image} alt={name} className="w-full h-40 object-cover" />
      <p className="text-sm font-bold text-gray-700 mt-2">{name}</p>
    </div>
  );
}
