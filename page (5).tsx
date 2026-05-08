"use client";

import Link from "next/link";
import { 
  Package, 
  Mail, 
  Armchair, 
  Gem, 
  UtensilsCrossed,
  ArrowRight,
  Phone,
  MapPin,
  Clock,
  Shield,
  Truck
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const CONTACT_PHONE = process.env.NEXT_PUBLIC_CONTACT_PHONE || "+33753256897";

const services = [
  {
    icon: Package,
    title: "Colis",
    description: "Livraison rapide et sécurisée de vos colis entre la France et le Maroc. Suivi en temps réel.",
    color: "text-maroc-red",
    bgColor: "bg-maroc-red/10",
  },
  {
    icon: Mail,
    title: "Lettres",
    description: "Envoi de courriers et documents importants avec confidentialité garantie.",
    color: "text-maroc-green",
    bgColor: "bg-maroc-green/10",
  },
  {
    icon: Armchair,
    title: "Encombrants",
    description: "Transport de meubles et objets volumineux avec soin et assurance.",
    color: "text-maroc-gold",
    bgColor: "bg-maroc-gold/10",
  },
  {
    icon: Gem,
    title: "Valeurs",
    description: "Livraison sécurisée d'objets de valeur avec assurance complète.",
    color: "text-maroc-red",
    bgColor: "bg-maroc-red/10",
  },
  {
    icon: UtensilsCrossed,
    title: "Terroir",
    description: "Transport de produits alimentaires et artisanaux marocains frais et authentiques.",
    color: "text-maroc-green",
    bgColor: "bg-maroc-green/10",
  },
];

const steps = [
  {
    icon: Truck,
    title: "1. Demandez un devis",
    description: "Remplissez notre formulaire en ligne avec les détails de votre envoi.",
  },
  {
    icon: Shield,
    title: "2. Validez votre envoi",
    description: "Recevez votre devis personnalisé et confirmez votre réservation.",
  },
  {
    icon: Clock,
    title: "3. Nous collectons",
    description: "Notre équipe vient chercher votre colis à votre adresse.",
  },
  {
    icon: MapPin,
    title: "4. Livraison garantie",
    description: "Suivez votre colis en temps réel jusqu'à sa destination finale.",
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* HERO SECTION */}
      <section className="relative bg-maroc-brown text-white overflow-hidden">
        {/* Motif zellige subtil */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L60 30L30 60L0 30L30 0z' fill='%23D4AF37' fill-opacity='0.4'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-maroc-red/20 border border-maroc-gold/30">
                <span className="w-2 h-2 rounded-full bg-maroc-green animate-pulse" />
                <span className="text-sm font-medium text-maroc-gold">Service actif 24/7</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold font-display leading-tight">
                Vos colis,
                <span className="block text-maroc-gold">notre pont</span>
                <span className="block">entre deux rives</span>
              </h1>

              <p className="text-lg text-maroc-beige/80 max-w-lg">
                Livraison rapide et sécurisée de marchandises entre la France et le Maroc. 
                Colis, lettres, encombrants, valeurs et terroir.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/devis/">
                  <Button size="lg" className="bg-maroc-red hover:bg-maroc-red/90 text-white px-8">
                    Demander un devis
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <a href={`tel:${CONTACT_PHONE}`}>
                  <Button size="lg" variant="outline" className="border-maroc-gold text-maroc-gold hover:bg-maroc-gold/10 px-8">
                    <Phone className="mr-2 h-5 w-5" />
                    Nous appeler
                  </Button>
                </a>
              </div>

              <div className="flex items-center gap-6 text-sm text-maroc-beige/60 pt-4">
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-maroc-green" />
                  <span>Assuré</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-maroc-green" />
                  <span>Rapide</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-maroc-green" />
                  <span>Traçable</span>
                </div>
              </div>
            </div>

            {/* Image / Illustration */}
            <div className="hidden lg:block relative">
              <div className="relative w-full aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-maroc-gold/20 rounded-3xl rotate-3" />
                <div className="absolute inset-0 bg-maroc-red/20 rounded-3xl -rotate-3" />
                <div className="relative bg-maroc-beige rounded-3xl p-8 flex items-center justify-center">
                  <div className="text-center">
                    <Truck className="h-24 w-24 text-maroc-red mx-auto mb-4" />
                    <p className="text-maroc-brown font-semibold">France ↔ Maroc</p>
                    <p className="text-maroc-brown/60 text-sm">Livraison express</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-maroc-brown mb-4">
              Nos Services
            </h2>
            <p className="text-lg text-maroc-brown/70 max-w-2xl mx-auto">
              Une solution adaptée à chaque type d'envoi entre la France et le Maroc
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow border-maroc-gold/20">
                <CardContent className="p-6">
                  <div className={`w-12 h-12 rounded-lg ${service.bgColor} flex items-center justify-center mb-4`}>
                    <service.icon className={`h-6 w-6 ${service.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-maroc-brown mb-2">{service.title}</h3>
                  <p className="text-maroc-brown/70 text-sm">{service.description}</p>
                  <Link href={`/devis/?type=${service.title.toLowerCase()}`}>
                    <Button variant="ghost" className="mt-4 text-maroc-red hover:text-maroc-red/80 p-0">
                      En savoir plus <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* COMMENT ÇA MARCHE */}
      <section className="py-20 bg-maroc-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-maroc-brown mb-4">
              Comment ça marche ?
            </h2>
            <p className="text-lg text-maroc-brown/70 max-w-2xl mx-auto">
              Quatre étapes simples pour envoyer vos colis en toute sérénité
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative text-center">
                <div className="w-16 h-16 rounded-full bg-maroc-red/10 flex items-center justify-center mx-auto mb-4">
                  <step.icon className="h-8 w-8 text-maroc-red" />
                </div>
                <h3 className="text-lg font-semibold text-maroc-brown mb-2">{step.title}</h3>
                <p className="text-sm text-maroc-brown/70">{step.description}</p>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-maroc-gold/30 -translate-x-1/2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ZONE DE COUVERTURE */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-maroc-brown mb-4">
              Notre Zone de Couverture
            </h2>
            <p className="text-lg text-maroc-brown/70 max-w-2xl mx-auto">
              De Paris à Casablanca, de Marseille à Marrakech
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-maroc-red/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-maroc-red mb-4">🇫🇷 France</h3>
                <ul className="space-y-2 text-sm text-maroc-brown/80">
                  <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-maroc-gold" /> Paris et Île-de-France</li>
                  <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-maroc-gold" /> Marseille et région PACA</li>
                  <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-maroc-gold" /> Lyon et Auvergne-Rhône-Alpes</li>
                  <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-maroc-gold" /> Bordeaux et Nouvelle-Aquitaine</li>
                  <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-maroc-gold" /> Strasbourg et Grand Est</li>
                  <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-maroc-gold" /> Lille et Hauts-de-France</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-maroc-green/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-maroc-green mb-4">🇲🇦 Maroc</h3>
                <ul className="space-y-2 text-sm text-maroc-brown/80">
                  <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-maroc-gold" /> Casablanca</li>
                  <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-maroc-gold" /> Rabat</li>
                  <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-maroc-gold" /> Marrakech</li>
                  <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-maroc-gold" /> Tanger</li>
                  <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-maroc-gold" /> Fès</li>
                  <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-maroc-gold" /> Agadir</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 bg-maroc-red text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
            Prêt à expédier ?
          </h2>
          <p className="text-lg text-white/80 mb-8">
            Obtenez votre devis gratuit en moins de 2 minutes. Notre équipe vous répond sous 24h.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/devis/">
              <Button size="lg" className="bg-white text-maroc-red hover:bg-white/90 px-8">
                Demander un devis gratuit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <a href={`tel:${CONTACT_PHONE}`}>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8">
                <Phone className="mr-2 h-5 w-5" />
                {CONTACT_PHONE}
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
