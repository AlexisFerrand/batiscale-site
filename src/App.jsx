import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Star, MapPin, Phone, TrendingUp, Search, MessageSquareText, Wrench } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function BatiscaleLandingPage() {
  return (
    <main className="min-h-screen bg-[#FAFAF8] text-neutral-950">
      <header className="sticky top-0 z-50 border-b border-neutral-200/70 bg-[#FAFAF8]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="leading-none">
              <p className="text-2xl font-black tracking-[-0.08em] text-neutral-950 md:text-3xl">
                Batiscale
              </p>
              <div className="mt-1 h-[2px] w-14 rounded-full bg-amber-500" />
            </div>
          </div>
          
          <a
            href="#contact"
            className="rounded-full bg-neutral-950 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-neutral-800"
          >
            Demander un audit
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-neutral-200">
        <div className="absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-amber-100/55 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:grid-cols-[1.05fr_.95fr] md:py-28">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.55 }}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm text-neutral-700 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Visibilité locale pour artisans & entreprises du bâtiment
            </div>
            <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-[-0.04em] text-neutral-950 sm:text-5xl md:text-7xl">
              Multipliez votre chiffre d’affaire en augmentant votre visibilité en ligne.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-neutral-600 md:text-xl">
              Batiscale aide les plombiers, chauffagistes et entreprises locales du BTP à devenir plus visibles sur Google, inspirer confiance et générer plus de demandes qualifiées.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="#contact" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-neutral-950 px-7 py-4 text-center font-medium text-white transition hover:bg-neutral-800 sm:w-auto">
                Obtenir un diagnostic gratuit <ArrowRight size={18} />
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-5 text-sm text-neutral-600">
              <span className="flex items-center gap-2"><CheckCircle2 size={17} /> Site vitrine clair</span>
              <span className="flex items-center gap-2"><CheckCircle2 size={17} /> Google Business optimisé</span>
              <span className="flex items-center gap-2"><CheckCircle2 size={17} /> Avis clients automatisés</span>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 }} className="relative">
            <div className="rounded-[2rem] border border-neutral-200 bg-white p-4 shadow-2xl shadow-neutral-200/70">
              <div className="rounded-[1.5rem] bg-neutral-950 p-6 text-white">
                <div className="flex items-center justify-between border-b border-white/10 pb-5">
                  <div>
                    <p className="text-sm text-neutral-400">Recherche locale</p>
                    <p className="mt-1 text-2xl font-semibold">Plombier Marseille</p>
                  </div>
                  <Search className="text-amber-300" />
                </div>
                <div className="mt-6 space-y-3">
                  {["Appels entrants", "Demandes de devis", "Avis Google", "Visites du site"].map((item, index) => (
                    <div key={item} className="flex items-center justify-between rounded-2xl bg-white/8 p-4">
                      <span className="text-neutral-200">{item}</span>
                      <span className="font-semibold text-emerald-300">+{[48, 36, 72, 59][index]}%</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid gap-4 p-4">
                <div className="rounded-3xl border border-neutral-200 bg-[#FAFAF8] p-5 text-center">
                  <MapPin className="mx-auto mb-4 text-neutral-700" />
                  <p className="font-semibold">Présence locale</p>
                  <p className="mt-2 text-sm leading-6 text-neutral-600">Pour que vos clients arrêtent d'aller chez votre concurrence.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="solution" className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">La solution</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">Une présence en ligne qui attire les clients</h2>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {[
            { icon: Search, title: "Être trouvé sur Google", text: "Optimisation de votre présence locale pour apparaître au bon moment, devant les bons clients." },
            { icon: Star, title: "Inspirer confiance", text: "Un site clair, des avis visibles et une image professionnelle qui rassure avant l’appel." },
            { icon: MessageSquareText, title: "Générer des demandes", text: "Des appels à l’action simples pour transformer vos visiteurs en prospects qualifiés." },
          ].map((card) => (
            <div key={card.title} className="rounded-[2rem] border border-neutral-200 bg-white p-7 shadow-sm">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-neutral-100">
                <card.icon size={22} />
              </div>
              <h3 className="text-xl font-semibold">{card.title}</h3>
              <p className="mt-4 leading-7 text-neutral-600">{card.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="process" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 md:grid-cols-[.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">Notre méthode</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">Votre croissance est notre objectif premier</h2>
              <p className="mt-6 leading-8 text-neutral-600">Batiscale se concentre sur ce qui compte vraiment pour un business local : visibilité, confiance, appels et demandes de devis.</p>
            </div>
            <div className="space-y-4">
              {[
                ["01", "Diagnostic de votre présence actuelle", "On analyse votre site, votre fiche Google, vos avis et vos concurrents locaux."],
                ["02", "Mise en place d’une image premium", "On structure une présence claire, professionnelle et adaptée à votre métier."],
                ["03", "Optimisation continue", "On améliore votre visibilité et vos points de conversion mois après mois."],
              ].map(([num, title, text]) => (
                <div key={num} className="grid gap-5 rounded-[2rem] border border-neutral-200 bg-[#FAFAF8] p-6 sm:grid-cols-[80px_1fr]">
                  <div className="text-3xl font-semibold text-neutral-300">{num}</div>
                  <div>
                    <h3 className="text-xl font-semibold">{title}</h3>
                    <p className="mt-2 leading-7 text-neutral-600">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="results" className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-[2.2rem] bg-neutral-950 p-8 text-white md:p-12">
          <div className="grid gap-10 md:grid-cols-[1fr_1.2fr] md:items-center">
            <div>
              <TrendingUp className="mb-6 text-amber-300" size={34} />
              <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">Votre présence en ligne va impacter les 10 prochaines années de votre entreprise</h2>
              <p className="mt-6 leading-8 text-neutral-300">Au lieu de dépendre uniquement du bouche-à-oreille, vous construisez un actif local qui travaille pour vous chaque semaine.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Plus de crédibilité face aux concurrents",
                "Meilleure présence dans votre zone",
                "Plus de demandes entrantes qualifiées",
                "Suivi clair de l’évolution mensuelle",
              ].map((item) => (
                <div key={item} className="rounded-3xl border border-white/10 bg-white/5 p-5">
                  <CheckCircle2 className="mb-4 text-emerald-300" />
                  <p className="font-medium text-neutral-100">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-neutral-200 bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-[.9fr_1.1fr] md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">Contact</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">Prêt à avoir plus de clients ?</h2>
            <p className="mt-6 leading-8 text-neutral-600">Demandez un diagnostic gratuit. On regarde votre présence actuelle et les opportunités rapides à activer dans votre zone.</p>
          </div>
          <div className="rounded-[2rem] border border-neutral-200 bg-[#FAFAF8] p-6 shadow-sm">
            <div className="grid gap-4 sm:grid-cols-2">
              <input className="rounded-2xl border border-neutral-200 bg-white px-5 py-4 outline-none focus:border-neutral-950" placeholder="Nom" />
              <input className="rounded-2xl border border-neutral-200 bg-white px-5 py-4 outline-none focus:border-neutral-950" placeholder="Téléphone" />
              <input className="rounded-2xl border border-neutral-200 bg-white px-5 py-4 outline-none focus:border-neutral-950 sm:col-span-2" placeholder="Email" />
              <input className="rounded-2xl border border-neutral-200 bg-white px-5 py-4 outline-none focus:border-neutral-950 sm:col-span-2" placeholder="Métier / ville" />
              <button className="inline-flex items-center justify-center gap-2 rounded-2xl bg-neutral-950 px-6 py-4 font-medium text-white transition hover:bg-neutral-800 sm:col-span-2">
                Demander mon diagnostic <ArrowRight size={18} />
              </button>
            </div>
            <p className="mt-4 text-center text-sm text-neutral-500">Réponse rapide — sans engagement.</p>
          </div>
        </div>
      </section>

      <footer className="bg-neutral-950 px-6 py-8 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-2xl font-black tracking-[-0.08em]">Batiscale</p>
          <p className="text-sm text-neutral-400">Visibilité locale pour plombiers, chauffagistes et entreprises du bâtiment.</p>
        </div>
      </footer>
    </main>
  );
}
