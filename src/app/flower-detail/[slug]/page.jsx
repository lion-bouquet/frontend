export default async function FlowerDetailPage({ params }) {
  const { slug } = await params;
  return (
    <>
      <div>Flower Detail Page</div>
      <div>now: {slug}</div>
    </>
  );
}
