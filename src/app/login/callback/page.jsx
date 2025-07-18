"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function CallbackPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const tokenCode = searchParams.get("token-code");

  useEffect(() => {
    const fetchTokens = async () => {
      try {
        const response = await fetch(
          "https://likelion.patulus.com/api/v1/users/token",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ tokenCode }),
          }
        );

        if (!response.ok) throw new Error("토큰 발급 실패");

        const data = await response.json();
        localStorage.setItem("accessToken", data.data.accessToken);
        localStorage.setItem("refreshToken", data.data.refreshToken);

        router.push("/home");
      } catch (err) {
        console.error("토큰 발급 실패: ", err);
      }
    };

    if (tokenCode) fetchTokens();
  }, [tokenCode, router]);

  return <div className="p-10 text-center">로그인 처리 중...</div>;
}
