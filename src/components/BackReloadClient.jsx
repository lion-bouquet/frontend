"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function BackReloadClient() {
  const pathname = usePathname();

  useEffect(() => {
    const shouldReload =
      pathname.startsWith("/flower-shop") &&
      !sessionStorage.getItem("shop-reloaded");

    if (shouldReload) {
      console.log("✅ 첫 진입이므로 새로고침 실행");
      sessionStorage.setItem("shop-reloaded", "true");
      window.location.reload();
    }
  }, [pathname]);

  return null;
}
