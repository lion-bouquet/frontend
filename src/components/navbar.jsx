"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { href: "/home", label: "홈" },
    { href: "/flower-shop", label: "꽃집들" },
    { href: "/cart", label: "카트" },
    { href: "/confirmation", label: "확인" },
  ];

  return (
    <nav className="w-full bg-white border-b border-[#EBEBEAFF] shadow-sm">
      <div className="max-w-screen-xl mx-auto flex items-center px-4 py-3">
        <div className="flex items-center space-x-2">
          <img src="/logo.svg" alt="Logo" className="w-6 h-6" />
          <span className="font-bold text-lg">꽃 길</span>
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

        <div className="ml-auto">
          <button className="px-4 py-1.5 border rounded-md text-sm font-medium hover:bg-gray-50">
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
}
