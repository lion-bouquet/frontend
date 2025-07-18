"use client";

import Image from "next/image";
import { useAtomValue, useSetAtom } from "jotai";
import { userAtom } from "@/app/atoms/userAtom";
import { authAtom } from "@/app/atoms/authAtom";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LoginButton() {
  const user = useAtomValue(userAtom);
  const setUser = useSetAtom(userAtom);
  const setAuth = useSetAtom(authAtom);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const wrapperRef = useRef(null);
  const router = useRouter();

  const handleLogout = async () => {
    const accessToken = localStorage.getItem("accessToken");
    const refreshToken = localStorage.getItem("refreshToken");

    try {
      await fetch("https://likelion.patulus.com/api/v1/users/sign-out", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ accessToken, refreshToken }),
      });
    } catch (err) {
      console.warn("❗ 로그아웃 요청 실패 (무시 가능):", err);
    }

    setUser(null);
    setAuth({ accessToken: null, refreshToken: null });
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    setIsMenuOpen(false);
    router.replace("/home");
  };

  // 바깥 클릭 시 메뉴 닫기
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (user) {
    return (
      <div
        ref={wrapperRef}
        className="relative inline-block text-sm text-gray-700"
      >
        <div
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="flex items-center gap-2 cursor-pointer"
        >
          <span>{user.name}님</span>
          <Image
            src={user.profileImage}
            alt="프로필 이미지"
            width={32}
            height={32}
            className="rounded-full object-cover"
          />
        </div>

        {isMenuOpen && (
          <button
            onClick={handleLogout}
            className="absolute right-0 mt-2 px-3 py-1 border rounded bg-white shadow text-sm hover:bg-gray-100 z-10"
          >
            로그아웃
          </button>
        )}
      </div>
    );
  }

  return (
    <a
      href="https://likelion.patulus.com/oauth2/authorization/google"
      className="px-4 py-1.5 border rounded-md text-sm font-medium hover:bg-gray-50"
    >
      로그인
    </a>
  );
}
