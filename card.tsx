export default function MentionsLegalesPage() {
  return (
    <div className="min-h-screen bg-maroc-beige py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold font-display text-maroc-brown mb-8">Mentions légales</h1>

        <div className="space-y-8 text-maroc-brown/80">
          <section>
            <h2 className="text-xl font-semibold text-maroc-brown mb-3">Éditeur du site</h2>
            <p>PARIS CASA — Service de livraison France Maroc</p>
            <p>7 Rue de la Noue, 93170 Bagnolet, France</p>
            <p>Email : adc.lecolibri@gmail.com</p>
            <p>Tél : +33 7 53 25 68 97</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-maroc-brown mb-3">Hébergement</h2>
            <p>Ce site est hébergé par Vercel Inc.</p>
            <p>340 S Lemon Ave #4133, Walnut, CA 91789, USA</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-maroc-brown mb-3">Propriété intellectuelle</h2>
            <p>L'ensemble du contenu de ce site (textes, images, logos) est la propriété exclusive de PARIS CASA. Toute reproduction sans autorisation est interdite.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
