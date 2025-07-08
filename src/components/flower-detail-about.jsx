export default function FlowerDetailAbout({ name, description }) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">About the {name}</h2>
      <p className="text-md text-gray-400 leading-relaxed mb-4">{description}</p>
    </div>
  );
}
