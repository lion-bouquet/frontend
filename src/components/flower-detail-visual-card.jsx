export default function FlowerDetailVisualCard({ image, description }) {
  return (
    <div className="rounded-lg overflow-hidden shadow hover:shadow-md transition-shadow duration-200">
      <img src={image} alt={description} className="w-full h-48 object-cover" />
      <p className="text-xs text-center text-gray-600 p-3">{description}</p>
    </div>
  );
}
