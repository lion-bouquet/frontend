import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center mt-10">
      <div className="font-bold text-3xl mb-20">Home</div>
      <Link href="/test-page1" className="mb-10">
        Page1
      </Link>
      <Link href="/test-page2">Page2</Link>
    </div>
  );
}
