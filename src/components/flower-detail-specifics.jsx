export default function FlowerDetailSpecifics({ specifics }) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Flower Specifics</h2>
      <div className="grid grid-cols-2 gap-x-6 gap-y-4 text-md">
        <div className="border-b border-gray-200 pb-1">
          <p className="font-bold text-gray-900">Species</p>
          <p className="text-gray-500">{specifics.species}</p>
        </div>
        <div className="border-b border-gray-200 pb-1">
          <p className="font-bold text-gray-900">Family</p>
          <p className="text-gray-500">{specifics.family}</p>
        </div>
        <div className="border-b border-gray-200 pb-1">
          <p className="font-bold text-gray-900">Origin</p>
          <p className="text-gray-500">{specifics.origin}</p>
        </div>
        <div className="border-b border-gray-200 pb-1">
          <p className="font-bold text-gray-900">Bloom Time</p>
          <p className="text-gray-500">{specifics.bloomTime}</p>
        </div>
        <div className="border-b border-gray-200 pb-1">
          <p className="font-bold text-gray-900">Fragrance</p>
          <p className="text-gray-500">{specifics.fragrance}</p>
        </div>
        <div className="border-b border-gray-200 pb-1">
          <p className="font-bold text-gray-900">Symbolism</p>
          <p className="text-gray-500">{specifics.symbolism}</p>
        </div>
        <div className="border-b border-gray-200 pb-1">
          <p className="font-bold text-gray-900">Typical Colors</p>
          <p className="text-gray-500">{specifics.typicalColors}</p>
        </div>
        <div className="border-b border-gray-200 pb-1">
          <p className="font-bold text-gray-900">Lifespan</p>
          <p className="text-gray-500">{specifics.lifespan}</p>
        </div>
      </div>
    </div>
  );
}
