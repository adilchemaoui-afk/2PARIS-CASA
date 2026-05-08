"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, Menu, X, Package } from "lucide-react";
import { Button } from "@/components/ui/button";

const CONTACT_PHONE = process.env.NEXT_PUBLIC_CONTACT_PHONE || "+33753256897";
const COMMERCIAL_PHONE = process.env.NEXT_PUBLIC_COMMERCIAL_PHONE || "+2126XXXXXXXX";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Accueil" },
    { href: "/devis/", label: "Devis" },
    { href: "/suivi/", label: "Suivi" },
    { href: "/contact/", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-maroc-gold/20 bg-maroc-beige/95 backdrop-blur supports-[backdrop-filter]:bg-maroc-beige/60">
      {/* Barre de contact rapide */}
      <div className="bg-maroc-red text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-sm">
          <a href={`tel:${CONTACT_PHONE}`} className="flex items-center gap-2 hover:underline">
            <Phone className="h-4 w-4" />
            <span className="font-semibold">Service Client : {CONTACT_PHONE}</span>
          </a>
          <span className="hidden sm:inline">|</span>
          <a href={`tel:${COMMERCIAL_PHONE}`} className="flex items-center gap-2 hover:underline">
            <Phone className="h-4 w-4" />
            <span className="font-semibold">Commercial : {COMMERCIAL_PHONE}</span>
          </a>
        </div>
      </div>

      {/* Navigation principale */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Package className="h-8 w-8 text-maroc-red" />
            <div className="flex flex-col">
              <span className="text-xl font-bold font-display text-maroc-red tracking-wide">PARIS</span>
              <span className="text-xl font-bold font-display text-maroc-green tracking-wide -mt-1">CASA</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-maroc-brown hover:text-maroc-red transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link href="/devis/">
              <Button className="bg-maroc-green hover:bg-maroc-green/90 text-white">
                Demander un devis
              </Button>
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-maroc-gold/20 bg-maroc-beige">
          <div className="px-4 py-3 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-2 text-sm font-medium text-maroc-brown hover:text-maroc-red"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/devis/" onClick={() => setMobileMenuOpen(false)}>
              <Button className="w-full bg-maroc-green hover:bg-maroc-green/90 text-white mt-2">
                Demander un devis
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
