"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 2);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    "Insights",
    "Industries",
    "Services",
    "Careers",
    "News",
    "About us",
  ];

  const topRightItems = [
    { label: "Contact us", href: "#" },
    { label: "Investors", href: "#", external: true },
    { label: "Global | EN 🌐", href: "#" },
  ];

  return (
    <header
      className={`w-full fixed top-0 z-50 py-3 transition-all duration-300 ${
      isScrolled || menuOpen ? "bg-white" : "bg-transparent"
      }`}
      onMouseEnter={() => setMenuOpen(true)}
      onMouseLeave={() => setMenuOpen(false)}
      style={{
      backgroundColor: isScrolled || menuOpen ? "#fff" : undefined,
      transition: "background-color 0.2s, padding 0.3s",
      paddingTop: isScrolled ? "0" : "1rem",
      paddingBottom: isScrolled ? "0" : "1rem",
      }}
    >
      <div className="max-w-screen-2xl mx-auto px-4 lg:px-8">
      {/* Top Bar */}
      <div className="hidden lg:flex justify-end space-x-6 text-sm text-gray-800 font-medium">
      <div
        className={`
          flex transition-all duration-300 ease-in-out
          ${isScrolled ? "opacity-0 translate-x-8 -translate-y-4 pointer-events-none" : "opacity-100 translate-x-0 translate-y-0"}
          text-[16px] font-medium font-ubuntu space-x-6 items-center
          ${menuOpen || isScrolled ? "text-gray-900" : "text-white"}
        `}
        style={{ willChange: "opacity, transform", letterSpacing: "1px" }}
      >
        {topRightItems.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          className="relative group flex items-center space-x-1 transition-colors hover:text-aqua-600"
        >
          <span className="relative">
        {item.label}
        <span className="absolute left-0 -bottom-0.5 h-[2px] w-full bg-aqua-600 opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100 transition-all duration-300 origin-left block"></span>
          </span>
          {item.external && <span className="text-xs">↗</span>}
        </Link>
        ))}
      </div>
      </div>

      {/* Main Header */}
      <div
        className="flex items-center justify-between py-3"
        style={{
          paddingLeft: "12px",
          paddingRight: "12px",
          transform: "translateY(-8px)",
        }}
      >
      {/* Logo + Nav */}
      <div className="flex items-center gap-12">
      <Link href="/">
        <Image
          src={
        isScrolled || menuOpen
          ? "https://www.capgemini.com/wp-content/themes/capgemini2020/assets/images/logo.svg"
          : "https://www.capgemini.com/wp-content/themes/capgemini2020/assets/images/logo-white.svg"
          }
          alt="Capgemini Logo"
          width={180}
          height={45}
          priority
        />
      </Link>

      <nav className={`hidden lg:flex space-x-8 text-[16px] font-medium transition-colors duration-200 ${isScrolled || menuOpen ? "text-gray-900" : "text-white"}`} style={{ fontFamily: 'Ubuntu' }}>
        {navItems.map((item, index) => (
          <Link
            key={index}
            href="#"
            className="relative group transition-colors hover:text-blue-500"
          >
            <span>{item}</span>
            <span className="absolute left-0 -bottom-0.5 h-[2px] w-full bg-blue-500 opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100 transition-all duration-300 origin-left" />
          </Link>
        ))}
      </nav>
      </div>

      {/* Search Icon */}
      <div className={`cursor-pointer hidden lg:flex items-center text-sm font-medium text-[16px] space-x-3 duration-200 ${isScrolled || menuOpen ? "text-gray-900" : "text-white"}`} style={{ fontFamily: 'Ubuntu' }}>
      <span className="cursor-pointer">Search</span>
      <img
        src={
          isScrolled || menuOpen
          ? "https://www.capgemini.com/wp-content/themes/capgemini2020/assets/images/icon-search-dark.svg"
          : "https://www.capgemini.com/wp-content/themes/capgemini2020/assets/images/icon-search-white.svg"
          }
        alt="Search"
        className="w-4 h-4"
      />
      </div>

      {/* Mobile Menu Toggle */}
      <button
      className="lg:hidden text-2xl"
      onClick={() => setMenuOpen(!menuOpen)}
      aria-label="Toggle Menu"
      >
      {menuOpen ? "✖" : "☰"}
      </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
      <div className="lg:hidden py-4 border-t text-sm font-medium text-gray-800 space-y-3 bg-white">
      {navItems.map((item, index) => (
        <Link
        key={index}
        href="#"
        className="block px-2 py-1 hover:text-blue-700"
        >
        {item}
        </Link>
      ))}
      <hr />
      {topRightItems.map((item, index) => (
        <Link
        key={index}
        href={item.href}
        className="block px-2 py-1 hover:text-blue-700"
        >
        {item.label} {item.external && "↗"}
        </Link>
      ))}
      <div className="flex items-center px-2 pt-2">
        <span className="mr-2">Search</span>
        <img
        src="https://img.icons8.com/ios/20/search--v1.png"
        alt="Search"
        className="w-4 h-4"
        />
      </div>
      </div>
      )}
      </div>
    </header>
  );
}
