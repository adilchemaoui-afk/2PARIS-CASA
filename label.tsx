export default function CGVPage() {
  return (
    <div className="min-h-screen bg-maroc-beige py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold font-display text-maroc-brown mb-8">Conditions Générales de Vente</h1>

        <div className="space-y-8 text-maroc-brown/80">
          <section>
            <h2 className="text-xl font-semibold text-maroc-brown mb-3">Article 1 — Objet</h2>
            <p>Les présentes conditions générales de vente régissent les prestations de transport de marchandises proposées par PARIS CASA entre la France et le Maroc.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-maroc-brown mb-3">Article 2 — Devis et réservation</h2>
            <p>Le client demande un devis via le formulaire en ligne. Le devis est personnel et valable 7 jours. La réservation devient ferme après acceptation du devis et paiement.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-maroc-brown mb-3">Article 3 — Prix et paiement</h2>
            <p>Les prix sont indiqués en euros TTC. Le paiement s'effectue par virement bancaire, carte bancaire ou PayPal. Un acompte de 50% est requis à la réservation, le solde avant livraison.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-maroc-brown mb-3">Article 4 — Responsabilité et assurance</h2>
            <p>PARIS CASA assure les marchandises transportées à hauteur de la valeur déclarée. En cas de perte ou dommage, le client doit signaler le sinistre dans les 48h suivant la livraison.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-maroc-brown mb-3">Article 5 — Délai de livraison</h2>
            <p>Les délais indiqués sont estimatifs. PARIS CASA ne peut être tenu responsable des retards dus aux douanes, intempéries ou cas de force majeure.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
