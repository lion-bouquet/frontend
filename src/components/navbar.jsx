"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import LogInButton from "./login-button";

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { href: "/home", label: "홈" },
    { href: "/flower-shop", label: "꽃집들" },
    { href: "/color-combinations", label: "색상 조합" },
  ];

  return (
    <nav className="w-full bg-white border-b border-[#EBEBEAFF] shadow-sm">
      <div className="max-w-screen-xl mx-auto flex items-center px-4 py-3">
        <div className="flex items-center space-x-2">
          <img
            src="/image/alogo.png"
            alt="Logo"
            className="w-12 h-12 mb-2 mr-[-2px]"
          />
          <Link href={"/home"}>
            <span className="font-bold text-lg cursor-pointer">Bloomee!</span>
          </Link>
        </div>

        <div className="flex space-x-6 text-sm font-medium text-gray-700 ml-12">
          {navItems.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`${
                pathname === href ? "text-violet-600 font-semibold" : ""
              } hover:text-violet-500 transition-colors`}
            >
              {label}
            </Link>
          ))}
        </div>

        <div className="ml-auto flex items-center space-x-10">
          <Link
            href="/order-list"
            className={`${
              pathname === "/order-list"
                ? "text-violet-600 font-semibold"
                : "text-gray-700"
            } text-sm hover:text-violet-500 transition-colors`}
          >
            주문 내역
          </Link>

          <LogInButton />
        </div>
      </div>
    </nav>
  );
}
