export default function ConfidentialitePage() {
  return (
    <div className="min-h-screen bg-maroc-beige py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold font-display text-maroc-brown mb-8">Politique de confidentialité</h1>

        <div className="space-y-8 text-maroc-brown/80">
          <section>
            <h2 className="text-xl font-semibold text-maroc-brown mb-3">Collecte des données</h2>
            <p>Nous collectons uniquement les données nécessaires au traitement de vos demandes : nom, email, téléphone, adresses d'expédition et de livraison. Ces données sont stockées de manière sécurisée sur Supabase.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-maroc-brown mb-3">Utilisation des données</h2>
            <p>Vos données sont utilisées uniquement pour : le traitement de vos devis et expéditions, le suivi de vos colis, et l'envoi d'emails transactionnels (confirmation, suivi). Nous ne vendons jamais vos données.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-maroc-brown mb-3">Cookies</h2>
            <p>Ce site utilise des cookies techniques essentiels au fonctionnement du site (authentification, panier). Aucun cookie publicitaire n'est utilisé.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-maroc-brown mb-3">Vos droits</h2>
            <p>Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données. Contactez-nous à adc.lecolibri@gmail.com pour exercer ces droits.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
