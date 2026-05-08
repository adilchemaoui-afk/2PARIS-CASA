"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, Package } from "lucide-react";

const CONTACT_PHONE = process.env.NEXT_PUBLIC_CONTACT_PHONE || "+33753256897";
const COMMERCIAL_PHONE = process.env.NEXT_PUBLIC_COMMERCIAL_PHONE || "+2126XXXXXXXX";
const EMAIL = process.env.NEXT_PUBLIC_EMAIL || "adc.lecolibri@gmail.com";

export function Footer() {
  return (
    <footer className="bg-maroc-brown text-maroc-beige">
      {/* Section contact rapide */}
      <div className="bg-maroc-green py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center gap-2">
              <Phone className="h-8 w-8 text-maroc-gold" />
              <h3 className="font-semibold text-white">Service Client</h3>
              <a href={`tel:${CONTACT_PHONE}`} className="text-lg font-bold hover:text-maroc-gold transition-colors">
                {CONTACT_PHONE}
              </a>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Phone className="h-8 w-8 text-maroc-gold" />
              <h3 className="font-semibold text-white">Commercial</h3>
              <a href={`tel:${COMMERCIAL_PHONE}`} className="text-lg font-bold hover:text-maroc-gold transition-colors">
                {COMMERCIAL_PHONE}
              </a>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Mail className="h-8 w-8 text-maroc-gold" />
              <h3 className="font-semibold text-white">Email</h3>
              <a href={`mailto:${EMAIL}`} className="text-lg font-bold hover:text-maroc-gold transition-colors">
                {EMAIL}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Package className="h-8 w-8 text-maroc-red" />
              <div className="flex flex-col">
                <span className="text-xl font-bold font-display text-maroc-red">PARIS</span>
                <span className="text-xl font-bold font-display text-maroc-green -mt-1">CASA</span>
              </div>
            </div>
            <p className="text-sm text-maroc-beige/80">
              Votre pont logistique entre la France et le Maroc. Livraison rapide, sécurisée et traçable.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-maroc-gold mb-4">Nos Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/devis/?type=colis" className="hover:text-maroc-gold transition-colors">Colis</Link></li>
              <li><Link href="/devis/?type=lettres" className="hover:text-maroc-gold transition-colors">Lettres</Link></li>
              <li><Link href="/devis/?type=encombrants" className="hover:text-maroc-gold transition-colors">Encombrants</Link></li>
              <li><Link href="/devis/?type=valeurs" className="hover:text-maroc-gold transition-colors">Valeurs</Link></li>
              <li><Link href="/devis/?type=terroir" className="hover:text-maroc-gold transition-colors">Terroir</Link></li>
            </ul>
          </div>

          {/* Liens rapides */}
          <div>
            <h4 className="font-semibold text-maroc-gold mb-4">Liens Rapides</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-maroc-gold transition-colors">Accueil</Link></li>
              <li><Link href="/devis/" className="hover:text-maroc-gold transition-colors">Demander un devis</Link></li>
              <li><Link href="/suivi/" className="hover:text-maroc-gold transition-colors">Suivi de colis</Link></li>
              <li><Link href="/contact/" className="hover:text-maroc-gold transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Adresse */}
          <div>
            <h4 className="font-semibold text-maroc-gold mb-4">Notre Adresse</h4>
            <div className="flex items-start gap-2 text-sm">
              <MapPin className="h-5 w-5 text-maroc-gold shrink-0 mt-0.5" />
              <span>7 Rue de la Noue<br />93170 Bagnolet<br />France</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-maroc-beige/20 mt-8 pt-8 text-center text-sm text-maroc-beige/60">
          <p>© {new Date().getFullYear()} PARIS CASA. Tous droits réservés.</p>
          <div className="mt-2 space-x-4">
            <Link href="/mentions-legales/" className="hover:text-maroc-gold transition-colors">Mentions légales</Link>
            <Link href="/cgv/" className="hover:text-maroc-gold transition-colors">CGV</Link>
            <Link href="/confidentialite/" className="hover:text-maroc-gold transition-colors">Politique de confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
