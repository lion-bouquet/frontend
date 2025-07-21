"use client";

import { useEffect } from "react";
import { useSetAtom } from "jotai";
import { userAtom } from "@/app/atoms/userAtom";
import { authAtom } from "@/app/atoms/authAtom";
import { refreshTokens } from "@/lib/auth";

export default function UserInitializer() {
  const setAuth = useSetAtom(authAtom);
  const setUser = useSetAtom(userAtom);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    const refreshToken = localStorage.getItem("refreshToken");

    const loadUser = async () => {
      if (!accessToken || !refreshToken) {
        console.log("🟡 accessToken 또는 refreshToken 없음 → 초기화 중단");
        return;
      }

      try {
        console.log("✅ 초기 accessToken 사용하여 유저 정보 요청");
        setAuth({ accessToken, refreshToken });

        let res = await fetch("https://likelion.patulus.com/api/v1/users/me", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        if (res.status === 401) {
          console.warn("⚠️ accessToken 만료 → refresh 시도");

          const newAccess = await refreshTokens();
          if (!newAccess) throw new Error("토큰 갱신 실패");

          localStorage.setItem("accessToken", newAccess); // 혹시 모르니 중복 보장
          setAuth({
            accessToken: newAccess,
            refreshToken: localStorage.getItem("refreshToken"),
          });

          console.log("✅ accessToken 재발급 성공 → 재요청 수행");

          res = await fetch("https://likelion.patulus.com/api/v1/users/me", {
            headers: {
              Authorization: `Bearer ${newAccess}`,
            },
          });
        }

        const { data } = await res.json();
        setUser(data);
        console.log("✅ 유저 정보 설정 완료:", data);
      } catch (err) {
        console.error("❌ UserInitializer 실패:", err);
      }
    };

    loadUser();
  }, [setAuth, setUser]);

  return null;
}
