"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { 
  Package, Mail, Armchair, Gem, UtensilsCrossed,
  ArrowRight, ArrowLeft, Check, Phone, MapPin, Weight, Ruler
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { calculatePrice } from "@/lib/pricing";

const services = [
  { id: 'colis', icon: Package, label: 'Colis', desc: 'Colis standard' },
  { id: 'lettres', icon: Mail, label: 'Lettres', desc: 'Courriers et documents' },
  { id: 'encombrants', icon: Armchair, label: 'Encombrants', desc: 'Meubles et objets volumineux' },
  { id: 'valeurs', icon: Gem, label: 'Valeurs', desc: 'Objets de valeur' },
  { id: 'terroir', icon: UtensilsCrossed, label: 'Terroir', desc: 'Produits alimentaires' },
];

const cities = {
  fr: ['Paris', 'Marseille', 'Lyon', 'Bordeaux', 'Lille', 'Strasbourg', 'Nantes', 'Toulouse'],
  ma: ['Casablanca', 'Rabat', 'Marrakech', 'Tanger', 'Fès', 'Agadir', 'Oujda', 'Tétouan'],
};

export default function DevisPage() {
  const searchParams = useSearchParams();
  const preselectedType = searchParams.get('type');

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    serviceType: preselectedType || '',
    weight: '',
    dimensions: { l: '', w: '', h: '' },
    fromCountry: 'fr',
    fromCity: '',
    toCountry: 'ma',
    toCity: '',
    name: '',
    email: '',
    phone: '',
    description: '',
  });
  const [price, setPrice] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleServiceSelect = (serviceId: string) => {
    setFormData({ ...formData, serviceType: serviceId });
    setStep(2);
  };

  const calculateEstimate = () => {
    const weight = parseFloat(formData.weight) || 0;
    const distance = formData.fromCountry === 'fr' ? 2000 : 1800;
    const estimatedPrice = calculatePrice(formData.serviceType, weight, distance);
    setPrice(estimatedPrice);
    setStep(4);
  };

  const handleSubmit = async () => {
    // Ici : envoyer à Supabase + email via Resend
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-maroc-beige py-20">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="w-20 h-20 rounded-full bg-maroc-green/20 flex items-center justify-center mx-auto mb-6">
            <Check className="h-10 w-10 text-maroc-green" />
          </div>
          <h1 className="text-3xl font-bold font-display text-maroc-brown mb-4">
            Devis envoyé avec succès !
          </h1>
          <p className="text-lg text-maroc-brown/70 mb-8">
            Nous avons bien reçu votre demande. Notre équipe vous contactera sous 24h avec un devis personnalisé.
          </p>
          <div className="bg-white rounded-lg p-6 mb-8 text-left">
            <h3 className="font-semibold text-maroc-brown mb-4">Récapitulatif</h3>
            <div className="space-y-2 text-sm">
              <p><span className="text-maroc-brown/60">Service :</span> {services.find(s => s.id === formData.serviceType)?.label}</p>
              <p><span className="text-maroc-brown/60">Poids :</span> {formData.weight} kg</p>
              <p><span className="text-maroc-brown/60">De :</span> {formData.fromCity}, {formData.fromCountry === 'fr' ? 'France' : 'Maroc'}</p>
              <p><span className="text-maroc-brown/60">À :</span> {formData.toCity}, {formData.toCountry === 'fr' ? 'France' : 'Maroc'}</p>
              <p className="text-lg font-bold text-maroc-red pt-2 border-t">
                Estimation : {price.toFixed(2)} €
              </p>
            </div>
          </div>
          <Button onClick={() => window.location.href = '/'} className="bg-maroc-red hover:bg-maroc-red/90">
            Retour à l'accueil
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-maroc-beige py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Progress */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            {[1, 2, 3, 4].map((s) => (
              <div key={s} className={`flex items-center ${s < 4 ? 'flex-1' : ''}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold
                  ${step >= s ? 'bg-maroc-red text-white' : 'bg-maroc-brown/20 text-maroc-brown/60'}`}>
                  {s}
                </div>
                {s < 4 && (
                  <div className={`flex-1 h-1 mx-2 ${step > s ? 'bg-maroc-red' : 'bg-maroc-brown/20'}`} />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between text-xs text-maroc-brown/60">
            <span>Service</span>
            <span>Détails</span>
            <span>Contact</span>
            <span>Récap</span>
          </div>
        </div>

        {/* Étape 1 : Choix du service */}
        {step === 1 && (
          <div>
            <h1 className="text-3xl font-bold font-display text-maroc-brown mb-2">Choisissez votre service</h1>
            <p className="text-maroc-brown/70 mb-8">Sélectionnez le type d'envoi qui correspond à vos besoins</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {services.map((service) => (
                <button
                  key={service.id}
                  onClick={() => handleServiceSelect(service.id)}
                  className={`p-6 rounded-xl border-2 text-left transition-all hover:shadow-md
                    ${formData.serviceType === service.id 
                      ? 'border-maroc-red bg-maroc-red/5' 
                      : 'border-maroc-brown/10 hover:border-maroc-gold'}`}
                >
                  <service.icon className={`h-8 w-8 mb-3 ${formData.serviceType === service.id ? 'text-maroc-red' : 'text-maroc-brown/60'}`} />
                  <h3 className="font-semibold text-maroc-brown">{service.label}</h3>
                  <p className="text-sm text-maroc-brown/60">{service.desc}</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Étape 2 : Détails du colis */}
        {step === 2 && (
          <div>
            <h1 className="text-3xl font-bold font-display text-maroc-brown mb-2">Détails de l'envoi</h1>
            <p className="text-maroc-brown/70 mb-8">Indiquez les caractéristiques de votre colis</p>

            <Card className="border-maroc-gold/20">
              <CardContent className="p-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label className="flex items-center gap-2">
                      <Weight className="h-4 w-4 text-maroc-gold" />
                      Poids (kg)
                    </Label>
                    <Input
                      type="number"
                      step="0.1"
                      placeholder="Ex: 5.5"
                      value={formData.weight}
                      onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label className="flex items-center gap-2">
                      <Ruler className="h-4 w-4 text-maroc-gold" />
                      Dimensions (cm)
                    </Label>
                    <div className="flex gap-2">
                      <Input placeholder="L" value={formData.dimensions.l} onChange={(e) => setFormData({ ...formData, dimensions: { ...formData.dimensions, l: e.target.value } })} />
                      <Input placeholder="l" value={formData.dimensions.w} onChange={(e) => setFormData({ ...formData, dimensions: { ...formData.dimensions, w: e.target.value } })} />
                      <Input placeholder="H" value={formData.dimensions.h} onChange={(e) => setFormData({ ...formData, dimensions: { ...formData.dimensions, h: e.target.value } })} />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-maroc-gold" />
                      Expédition depuis
                    </Label>
                    <select
                      className="w-full h-9 rounded-md border border-maroc-brown/20 bg-transparent px-3 text-sm"
                      value={formData.fromCity}
                      onChange={(e) => setFormData({ ...formData, fromCity: e.target.value })}
                    >
                      <option value="">Choisir une ville</option>
                      {cities.fr.map(city => <option key={city} value={city}>{city}, France</option>)}
                      {cities.ma.map(city => <option key={city} value={city}>{city}, Maroc</option>)}
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-maroc-gold" />
                      Destination
                    </Label>
                    <select
                      className="w-full h-9 rounded-md border border-maroc-brown/20 bg-transparent px-3 text-sm"
                      value={formData.toCity}
                      onChange={(e) => setFormData({ ...formData, toCity: e.target.value })}
                    >
                      <option value="">Choisir une ville</option>
                      {cities.ma.map(city => <option key={city} value={city}>{city}, Maroc</option>)}
                      {cities.fr.map(city => <option key={city} value={city}>{city}, France</option>)}
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Description de l'envoi</Label>
                  <textarea
                    className="w-full min-h-[100px] rounded-md border border-maroc-brown/20 bg-transparent px-3 py-2 text-sm"
                    placeholder="Décrivez le contenu de votre envoi..."
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  />
                </div>
              </CardContent>
            </Card>

            <div className="flex gap-4 mt-6">
              <Button variant="outline" onClick={() => setStep(1)}>
                <ArrowLeft className="mr-2 h-4 w-4" /> Retour
              </Button>
              <Button 
                className="bg-maroc-red hover:bg-maroc-red/90" 
                onClick={() => setStep(3)}
                disabled={!formData.weight || !formData.fromCity || !formData.toCity}
              >
                Continuer <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        )}

        {/* Étape 3 : Coordonnées */}
        {step === 3 && (
          <div>
            <h1 className="text-3xl font-bold font-display text-maroc-brown mb-2">Vos coordonnées</h1>
            <p className="text-maroc-brown/70 mb-8">Pour vous envoyer le devis personnalisé</p>

            <Card className="border-maroc-gold/20">
              <CardContent className="p-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label>Nom complet</Label>
                    <Input
                      placeholder="Votre nom"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Téléphone</Label>
                    <Input
                      type="tel"
                      placeholder="+33 6 12 34 56 78"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Email</Label>
                  <Input
                    type="email"
                    placeholder="votre@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </CardContent>
            </Card>

            <div className="flex gap-4 mt-6">
              <Button variant="outline" onClick={() => setStep(2)}>
                <ArrowLeft className="mr-2 h-4 w-4" /> Retour
              </Button>
              <Button 
                className="bg-maroc-red hover:bg-maroc-red/90" 
                onClick={calculateEstimate}
                disabled={!formData.name || !formData.email}
              >
                Voir l'estimation <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        )}

        {/* Étape 4 : Récapitulatif */}
        {step === 4 && (
          <div>
            <h1 className="text-3xl font-bold font-display text-maroc-brown mb-2">Récapitulatif</h1>
            <p className="text-maroc-brown/70 mb-8">Vérifiez les informations avant d'envoyer</p>

            <Card className="border-maroc-gold/20 mb-6">
              <CardHeader>
                <CardTitle className="text-maroc-red">Votre devis estimé</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-maroc-brown/10">
                  <span className="text-maroc-brown/70">Service</span>
                  <span className="font-semibold">{services.find(s => s.id === formData.serviceType)?.label}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-maroc-brown/10">
                  <span className="text-maroc-brown/70">Poids</span>
                  <span className="font-semibold">{formData.weight} kg</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-maroc-brown/10">
                  <span className="text-maroc-brown/70">Trajet</span>
                  <span className="font-semibold">{formData.fromCity} → {formData.toCity}</span>
                </div>
                <div className="flex justify-between items-center py-3 bg-maroc-red/5 rounded-lg px-4">
                  <span className="font-semibold text-maroc-brown">Estimation totale</span>
                  <span className="text-2xl font-bold text-maroc-red">{price.toFixed(2)} €</span>
                </div>
                <p className="text-xs text-maroc-brown/60">
                  * Ce prix est une estimation. Le devis final sera confirmé par notre équipe sous 24h.
                </p>
              </CardContent>
            </Card>

            <div className="flex gap-4">
              <Button variant="outline" onClick={() => setStep(3)}>
                <ArrowLeft className="mr-2 h-4 w-4" /> Modifier
              </Button>
              <Button 
                className="bg-maroc-green hover:bg-maroc-green/90" 
                onClick={handleSubmit}
              >
                <Check className="mr-2 h-4 w-4" /> Confirmer et envoyer
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
