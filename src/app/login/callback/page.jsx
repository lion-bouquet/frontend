"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useSetAtom } from "jotai";
import { userAtom } from "@/app/atoms/userAtom";
import { authAtom } from "@/app/atoms/authAtom";

export default function CallbackPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const setUser = useSetAtom(userAtom);
  const setAuth = useSetAtom(authAtom);
  const tokenCode = searchParams.get("token-code");

  useEffect(() => {
    const sendToServer = async () => {
      try {
        const response = await fetch("/api/auth/callback", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ tokenCode }),
        });

        const result = await response.json();

        if (!response.ok) throw new Error("토큰 발급 실패");

        const { accessToken, refreshToken } = result.data;

        // ✅ 상태 저장 + localStorage 저장
        setAuth({ accessToken, refreshToken });
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);

        const meRes = await fetch(
          "https://likelion.patulus.com/api/v1/users/me",
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        if (meRes.ok) {
          const { data } = await meRes.json();
          setUser(data);
        }

        router.push("/home");
      } catch (err) {
        console.error("로그인 처리 실패:", err);
      }
    };

    if (tokenCode) sendToServer();
  }, [tokenCode, router, setUser, setAuth]);

  return <div className="p-10 text-center">로그인 중...</div>;
}
