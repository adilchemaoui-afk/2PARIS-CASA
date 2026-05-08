"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, Check, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";

const CONTACT_PHONE = process.env.NEXT_PUBLIC_CONTACT_PHONE || "+33753256897";
const COMMERCIAL_PHONE = process.env.NEXT_PUBLIC_COMMERCIAL_PHONE || "+2126XXXXXXXX";
const EMAIL = process.env.NEXT_PUBLIC_EMAIL || "adc.lecolibri@gmail.com";

const faqs = [
  {
    question: "Quels sont les délais de livraison ?",
    answer: "Les délais varient selon le service choisi. Pour les colis standards, comptez 7 à 10 jours ouvrés. Pour les lettres et documents, 3 à 5 jours. Les encombrants peuvent nécessiter jusqu'à 15 jours en fonction du volume."
  },
  {
    question: "Comment calculer le prix de mon envoi ?",
    answer: "Utilisez notre calculateur de devis en ligne. Le prix dépend du poids, des dimensions, de la distance et du type de service. Vous recevrez un devis personnalisé sous 24h."
  },
  {
    question: "Mes colis sont-ils assurés ?",
    answer: "Oui, tous nos envois sont assurés à hauteur de la valeur déclarée. Pour les objets de grande valeur, nous proposons une assurance complémentaire sur devis."
  },
  {
    question: "Puis-je envoyer des produits alimentaires ?",
    answer: "Oui, via notre service Terroir. Nous transportons les produits alimentaires secs et emballés. Les produits frais nécessitent un emballage spécifique que nous fournissons."
  },
  {
    question: "Comment suivre mon colis ?",
    answer: "Rendez-vous sur la page 'Suivi' et entrez votre numéro de suivi (ex: PC2405001). Vous pouvez aussi nous appeler au service client pour obtenir des informations."
  },
  {
    question: "Quelles sont les zones desservies ?",
    answer: "Nous desservons toute la France métropolitaine et les principales villes du Maroc : Casablanca, Rabat, Marrakech, Tanger, Fès, Agadir, et plus."
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Envoyer à Supabase + email Resend
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-maroc-beige py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold font-display text-maroc-brown mb-4">
            Contactez-nous
          </h1>
          <p className="text-lg text-maroc-brown/70 max-w-2xl mx-auto">
            Notre équipe est à votre disposition pour répondre à toutes vos questions
          </p>
        </div>

        {/* CONTACTS EN AVANT — Section principale */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="border-maroc-red/20 bg-maroc-red/5 hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-maroc-red/10 flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-maroc-red" />
              </div>
              <h3 className="text-lg font-semibold text-maroc-brown mb-2">Service Client</h3>
              <p className="text-sm text-maroc-brown/60 mb-3">Du lundi au samedi, 9h-19h</p>
              <a 
                href={`tel:${CONTACT_PHONE}`}
                className="text-2xl font-bold text-maroc-red hover:underline block mb-2"
              >
                {CONTACT_PHONE}
              </a>
              <Button variant="outline" size="sm" className="border-maroc-red text-maroc-red hover:bg-maroc-red/10">
                <Phone className="mr-2 h-4 w-4" />
                Appeler maintenant
              </Button>
            </CardContent>
          </Card>

          <Card className="border-maroc-green/20 bg-maroc-green/5 hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-maroc-green/10 flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-maroc-green" />
              </div>
              <h3 className="text-lg font-semibold text-maroc-brown mb-2">Commercial</h3>
              <p className="text-sm text-maroc-brown/60 mb-3">Devis entreprises, partenariats</p>
              <a 
                href={`tel:${COMMERCIAL_PHONE}`}
                className="text-2xl font-bold text-maroc-green hover:underline block mb-2"
              >
                {COMMERCIAL_PHONE}
              </a>
              <Button variant="outline" size="sm" className="border-maroc-green text-maroc-green hover:bg-maroc-green/10">
                <Phone className="mr-2 h-4 w-4" />
                Appeler maintenant
              </Button>
            </CardContent>
          </Card>

          <Card className="border-maroc-gold/20 bg-maroc-gold/5 hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-maroc-gold/10 flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-maroc-gold" />
              </div>
              <h3 className="text-lg font-semibold text-maroc-brown mb-2">Email</h3>
              <p className="text-sm text-maroc-brown/60 mb-3">Réponse sous 24h garantie</p>
              <a 
                href={`mailto:${EMAIL}`}
                className="text-lg font-bold text-maroc-gold hover:underline block mb-2 break-all"
              >
                {EMAIL}
              </a>
              <Button variant="outline" size="sm" className="border-maroc-gold text-maroc-gold hover:bg-maroc-gold/10">
                <Mail className="mr-2 h-4 w-4" />
                Envoyer un email
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Formulaire de contact */}
          <div>
            <h2 className="text-2xl font-bold font-display text-maroc-brown mb-6">
              Envoyez-nous un message
            </h2>

            {submitted ? (
              <Card className="border-maroc-green/20 bg-maroc-green/5">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-maroc-green/20 flex items-center justify-center mx-auto mb-4">
                    <Check className="h-8 w-8 text-maroc-green" />
                  </div>
                  <h3 className="text-xl font-semibold text-maroc-brown mb-2">Message envoyé !</h3>
                  <p className="text-maroc-brown/70">
                    Nous avons bien reçu votre message. Notre équipe vous répondra dans les plus brefs délais.
                  </p>
                </CardContent>
              </Card>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Nom complet *</Label>
                    <Input 
                      required
                      placeholder="Votre nom"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Email *</Label>
                    <Input 
                      type="email"
                      required
                      placeholder="votre@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Téléphone</Label>
                    <Input 
                      type="tel"
                      placeholder="+33 6 12 34 56 78"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Sujet *</Label>
                    <select 
                      required
                      className="w-full h-9 rounded-md border border-maroc-brown/20 bg-transparent px-3 text-sm"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    >
                      <option value="">Choisir un sujet</option>
                      <option value="devis">Demande de devis</option>
                      <option value="suivi">Suivi de colis</option>
                      <option value="reclamation">Réclamation</option>
                      <option value="partenariat">Partenariat</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Message *</Label>
                  <textarea
                    required
                    rows={5}
                    className="w-full rounded-md border border-maroc-brown/20 bg-transparent px-3 py-2 text-sm resize-none"
                    placeholder="Décrivez votre demande en détail..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <Button type="submit" className="w-full bg-maroc-red hover:bg-maroc-red/90">
                  <Send className="mr-2 h-4 w-4" />
                  Envoyer le message
                </Button>
              </form>
            )}
          </div>

          {/* Adresse + Horaires + FAQ */}
          <div className="space-y-8">
            {/* Adresse */}
            <Card className="border-maroc-gold/20">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-maroc-brown mb-4 flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-maroc-gold" />
                  Notre adresse
                </h3>
                <p className="text-maroc-brown/80">
                  7 Rue de la Noue<br />
                  93170 Bagnolet<br />
                  France
                </p>
              </CardContent>
            </Card>

            {/* Horaires */}
            <Card className="border-maroc-gold/20">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-maroc-brown mb-4 flex items-center gap-2">
                  <Clock className="h-5 w-5 text-maroc-gold" />
                  Horaires d'ouverture
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-maroc-brown/70">Lundi - Vendredi</span>
                    <span className="font-medium">9h00 - 19h00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-maroc-brown/70">Samedi</span>
                    <span className="font-medium">9h00 - 17h00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-maroc-brown/70">Dimanche</span>
                    <span className="font-medium text-maroc-red">Fermé</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* FAQ */}
            <div>
              <h3 className="text-lg font-semibold text-maroc-brown mb-4 flex items-center gap-2">
                <MessageCircle className="h-5 w-5 text-maroc-gold" />
                Questions fréquentes
              </h3>
              <div className="space-y-2">
                {faqs.map((faq, index) => (
                  <div key={index} className="border border-maroc-brown/10 rounded-lg overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full px-4 py-3 text-left flex items-center justify-between hover:bg-maroc-beige/50 transition-colors"
                    >
                      <span className="font-medium text-sm text-maroc-brown">{faq.question}</span>
                      <span className="text-maroc-gold text-lg">{openFaq === index ? '−' : '+'}</span>
                    </button>
                    {openFaq === index && (
                      <div className="px-4 pb-3 text-sm text-maroc-brown/70">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
