"use client";

import { useState } from "react";
import { Search, Package, Truck, CheckCircle, Clock, MapPin, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

interface TrackingEvent {
  status: string;
  location: string;
  date: string;
  description: string;
  completed: boolean;
}

const mockTrackingData: Record<string, TrackingEvent[]> = {
  "PC2405001": [
    { status: "Commande reçue", location: "Paris, France", date: "2026-05-01 10:30", description: "Votre commande a été enregistrée", completed: true },
    { status: "Colis collecté", location: "Paris, France", date: "2026-05-02 14:15", description: "Notre transporteur a récupéré votre colis", completed: true },
    { status: "En transit", location: "Marseille, France", date: "2026-05-03 08:45", description: "Votre colis est en route vers le Maroc", completed: true },
    { status: "Douane", location: "Tanger, Maroc", date: "2026-05-05 11:20", description: "Votre colis est en dédouanement", completed: false },
    { status: "Livraison", location: "Casablanca, Maroc", date: "En attente", description: "Livraison prévue", completed: false },
  ],
};

export default function SuiviPage() {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [trackingData, setTrackingData] = useState<TrackingEvent[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = () => {
    setLoading(true);
    setError("");

    // Simulation recherche (à remplacer par appel Supabase)
    setTimeout(() => {
      const data = mockTrackingData[trackingNumber.toUpperCase()];
      if (data) {
        setTrackingData(data);
      } else {
        setError("Numéro de suivi non trouvé. Vérifiez votre numéro et réessayez.");
        setTrackingData(null);
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-maroc-beige py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold font-display text-maroc-brown mb-4">
            Suivi de votre colis
          </h1>
          <p className="text-lg text-maroc-brown/70">
            Entrez votre numéro de suivi pour connaître la localisation de votre envoi
          </p>
        </div>

        {/* Champ de recherche */}
        <Card className="border-maroc-gold/20 mb-8">
          <CardContent className="p-6">
            <div className="flex gap-4">
              <div className="flex-1">
                <Input
                  placeholder="Ex: PC2405001"
                  value={trackingNumber}
                  onChange={(e) => setTrackingNumber(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                  className="uppercase"
                />
              </div>
              <Button 
                onClick={handleSearch}
                disabled={!trackingNumber || loading}
                className="bg-maroc-red hover:bg-maroc-red/90"
              >
                <Search className="mr-2 h-4 w-4" />
                {loading ? "Recherche..." : "Rechercher"}
              </Button>
            </div>
            {error && (
              <div className="mt-4 flex items-center gap-2 text-red-600 text-sm">
                <AlertCircle className="h-4 w-4" />
                {error}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Résultats */}
        {trackingData && (
          <div className="space-y-6">
            <Card className="border-maroc-green/20">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-sm text-maroc-brown/60">Numéro de suivi</p>
                    <p className="text-xl font-bold text-maroc-brown">{trackingNumber.toUpperCase()}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-maroc-brown/60">Statut</p>
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-maroc-green/10 text-maroc-green text-sm font-medium">
                      <Truck className="h-4 w-4" />
                      En cours
                    </span>
                  </div>
                </div>

                {/* Timeline */}
                <div className="relative">
                  {trackingData.map((event, index) => (
                    <div key={index} className="flex gap-4 mb-8 last:mb-0">
                      {/* Ligne verticale */}
                      {index < trackingData.length - 1 && (
                        <div className={`absolute left-5 top-8 w-0.5 h-16 ${event.completed ? 'bg-maroc-green' : 'bg-maroc-brown/20'}`} />
                      )}

                      {/* Icône */}
                      <div className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center shrink-0
                        ${event.completed ? 'bg-maroc-green text-white' : 'bg-maroc-brown/10 text-maroc-brown/40'}`}>
                        {event.completed ? <CheckCircle className="h-5 w-5" /> : <Clock className="h-5 w-5" />}
                      </div>

                      {/* Contenu */}
                      <div className="flex-1 pt-1">
                        <h4 className={`font-semibold ${event.completed ? 'text-maroc-brown' : 'text-maroc-brown/50'}`}>
                          {event.status}
                        </h4>
                        <p className="text-sm text-maroc-brown/60">{event.description}</p>
                        <div className="flex items-center gap-4 mt-1 text-xs text-maroc-brown/50">
                          <span className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {event.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {event.date}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Info livraison estimée */}
            <div className="bg-maroc-gold/10 rounded-lg p-4 text-center">
              <p className="text-sm text-maroc-brown/70">
                Livraison estimée : <span className="font-semibold text-maroc-brown">7-10 jours ouvrés</span>
              </p>
            </div>
          </div>
        )}

        {/* Instructions */}
        {!trackingData && !error && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <div className="text-center p-4">
              <Package className="h-8 w-8 text-maroc-gold mx-auto mb-2" />
              <h4 className="font-medium text-maroc-brown">1. Envoyez votre colis</h4>
              <p className="text-sm text-maroc-brown/60">Confiez-nous votre envoi</p>
            </div>
            <div className="text-center p-4">
              <Truck className="h-8 w-8 text-maroc-gold mx-auto mb-2" />
              <h4 className="font-medium text-maroc-brown">2. Suivez en temps réel</h4>
              <p className="text-sm text-maroc-brown/60">Localisez votre colis 24/7</p>
            </div>
            <div className="text-center p-4">
              <CheckCircle className="h-8 w-8 text-maroc-gold mx-auto mb-2" />
              <h4 className="font-medium text-maroc-brown">3. Recevez à destination</h4>
              <p className="text-sm text-maroc-brown/60">Livraison garantie</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
