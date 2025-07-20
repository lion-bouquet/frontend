"use client";

import { useEffect } from "react";
import { useSetAtom } from "jotai";
import { userAtom } from "@/app/atoms/userAtom";
import { authAtom } from "@/app/atoms/authAtom";

export default function UserInitializer() {
  const setAuth = useSetAtom(authAtom);
  const setUser = useSetAtom(userAtom);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      setAuth({
        accessToken: token,
        refreshToken: localStorage.getItem("refreshToken"),
      });

      fetch("https://likelion.patulus.com/api/v1/users/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then(({ data }) => {
          setUser(data);
        });
    }
  }, []);

  return null;
}
