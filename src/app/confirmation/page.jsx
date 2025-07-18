"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

export default function ConfirmationPage() {
  const router = useRouter();
  const hasRun = useRef(false);

  useEffect(() => {
    if (hasRun.current) return;
    hasRun.current = true;

    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
      alert("로그인이 필요합니다.");
      router.replace("/home");
    }
  }, [router]);

  return (
    <div className="flex flex-col justify-center items-center mt-10">
      <h1 className="text-2xl font-bold mb-4">주문이 완료되었습니다!</h1>
      <p className="text-lg text-gray-700">
        감사합니다! 곧 꽃이 도착할 거예요.
      </p>
    </div>
  );
}
