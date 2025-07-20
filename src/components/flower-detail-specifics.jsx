export default function FlowerDetailSpecifics({ flower }) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Flower Specifics</h2>
      <div className="grid grid-cols-2 gap-x-6 gap-y-4 text-md">
        <div className="border-b border-gray-200 pb-1">
          <p className="font-bold text-gray-900">Species</p>
          <p className="text-gray-500">{flower?.species ?? '-'}</p>
        </div>
        <div className="border-b border-gray-200 pb-1">
          <p className="font-bold text-gray-900">Family</p>
          <p className="text-gray-500">{flower?.family ?? '-'}</p>
        </div>
        <div className="border-b border-gray-200 pb-1">
          <p className="font-bold text-gray-900">Origin</p>
          <p className="text-gray-500">{flower?.origin ?? '-'}</p>
        </div>
        <div className="border-b border-gray-200 pb-1">
          <p className="font-bold text-gray-900">Bloom Time</p>
          <p className="text-gray-500">{flower?.bloomTime ?? '-'}</p>
        </div>
        <div className="border-b border-gray-200 pb-1">
          <p className="font-bold text-gray-900">Fragrance</p>
          <p className="text-gray-500">{flower?.scent ?? '-'}</p>
        </div>
        <div className="border-b border-gray-200 pb-1">
          <p className="font-bold text-gray-900">Symbolism</p>
          <p className="text-gray-500">{flower?.floriography ?? '-'}</p>
        </div>
        <div className="border-b border-gray-200 pb-1">
          <p className="font-bold text-gray-900">Typical Colors</p>
          <p className="text-gray-500">{Array.isArray(flower?.matchingColors)
            ? flower.matchingColors.map((c) => c.name).join(', ')
            : '-'}</p>
        </div>
        <div className="border-b border-gray-200 pb-1">
          <p className="font-bold text-gray-900">Lifespan</p>
          <p className="text-gray-500">{flower?.lifespan ?? '-'}</p>
        </div>
      </div>
    </div>
  );
}
