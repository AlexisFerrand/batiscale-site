import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Globe,
  ShieldCheck,
  BarChart3,
  Clock,
} from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/33615341962?text=J%E2%80%99aimerais%20faire%20un%20point%20sur%20mon%20activit%C3%A9";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

const reveal = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
  variants: fadeUp,
};

function WhatsAppLink({ className, children }) {
  return (
    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  );
}

export default function BatiscaleLandingPage() {
  const [manquees, setManquees] = useState(3);
  const [panier, setPanier] = useState(4500);
  const [taux, setTaux] = useState(30);

  const annuel = Math.round(
    (Number(manquees) || 0) * 52 * ((Number(taux) || 0) / 100) * (Number(panier) || 0)
  );
  const total = annuel.toLocaleString("fr-FR") + " €";

  return (
    <main className="min-h-screen bg-[#FAFAF8] text-neutral-950">
      {/* ENTETE */}
      <header className="sticky top-0 z-50 border-b border-neutral-200/70 bg-[#FAFAF8]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="leading-none">
            <p className="text-2xl font-black tracking-[-0.08em] text-neutral-950 md:text-3xl">
              Batiscale
            </p>
            <div className="mt-1 h-[2px] w-14 rounded-full bg-amber-500" />
          </div>
          <nav className="hidden items-center gap-8 md:flex">
            <a href="#constat" className="text-sm font-medium text-neutral-600 hover:text-neutral-950">
              Le constat
            </a>
            <a href="#methode" className="text-sm font-medium text-neutral-600 hover:text-neutral-950">
              La méthode
            </a>
            <a href="#questions" className="text-sm font-medium text-neutral-600 hover:text-neutral-950">
              Vos questions
            </a>
          </nav>
          <WhatsAppLink className="inline-flex items-center rounded-full bg-neutral-950 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-neutral-800">
            Demander un point gratuit
          </WhatsAppLink>
        </div>
      </header>

      {/* HERO */}
      <motion.section {...reveal} className="relative overflow-hidden border-b border-neutral-200">
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:grid-cols-[1.05fr_.95fr] md:py-24">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm text-neutral-700 shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
              Pour les entreprises qui tournent au bouche-à-oreille
            </span>
            <h1 className="mt-6 max-w-2xl text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-neutral-950 sm:text-5xl md:text-6xl text-balance">
              Donnez à votre entreprise la portée qu'elle mérite vraiment.
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-neutral-600 md:text-xl">
              Le bouche-à-oreille a bâti votre nom, chantier après chantier. Batiscale le porte plus loin — jusqu'à des clients que vous n'auriez jamais croisés autrement, sans rien changer à votre façon de travailler.
            </p>
            <div className="mt-9">
              <WhatsAppLink className="inline-flex w-fit items-center gap-2 rounded-full bg-neutral-950 px-7 py-4 text-center font-medium text-white transition hover:bg-neutral-800">
                Demander un point gratuit <ArrowRight size={18} className="text-amber-400" />
              </WhatsAppLink>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-neutral-600">
              <span className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-emerald-600" /> On vous rappelle sous 24 h
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-emerald-600" /> Sans engagement
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-emerald-600" /> Vous n'avez rien à installer, rien à apprendre
              </span>
            </div>
          </div>

          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[1.9rem] border border-neutral-800 bg-neutral-950 sm:aspect-[560/524]">
            <div
              className="absolute inset-0 opacity-40"
              style={{
                backgroundImage: "radial-gradient(#3B352D 2px, transparent 2.2px)",
                backgroundSize: "36px 36px",
              }}
            />
            <div
              className="absolute left-[11%] top-[46%] aspect-square w-[45%] rounded-full border-2 border-amber-500 bg-amber-500/10 sm:top-[32%] sm:w-[35%]"
              style={{
                backgroundImage: "radial-gradient(#F59E0B 2px, transparent 2.2px)",
                backgroundSize: "36px 36px",
              }}
            />
            <span className="absolute left-[6%] top-[5%] text-xs font-bold uppercase tracking-[0.18em] text-neutral-400 sm:text-[13px]">
              Votre marché réel
            </span>
            <p className="absolute left-[11%] top-[88%] w-[45%] text-sm font-normal leading-tight text-amber-400 sm:top-[73%] sm:w-[36%]">
              Le bouche à oreille
            </p>
            <div className="absolute right-[6%] top-[15%] flex w-[55%] flex-col gap-2 text-right sm:top-[8%] sm:w-[42%] sm:gap-3">
              <p className="text-lg font-semibold leading-tight tracking-[-0.03em] text-white sm:text-2xl">
                Tous les autres ne vous connaissent pas encore.
              </p>
              <p className="text-xs leading-relaxed text-neutral-400 sm:text-sm">
                Ils ont un projet cette semaine. Ils n'ont simplement jamais entendu parler de vous.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* LE CONSTAT */}
      <motion.section {...reveal} id="constat" className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">Le constat</p>
        <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
          Dépendre uniquement du bouche à oreille :
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Certains mois, le téléphone sonne moins — et vous ne savez jamais pourquoi.",
              text: "Le bouche-à-oreille ne prévient pas. Il arrive quand il veut, pas quand vous en avez besoin. Impossible de planifier, impossible de se projeter.",
            },
            {
              title: "Vous ne pouvez pas grandir plus vite que les gens ne parlent de vous.",
              text: "Peu importe la qualité de votre travail : votre croissance est plafonnée par le nombre de personnes qui pensent à vous recommander. Un plafond que vous ne contrôlez pas.",
            },
            {
              title: "Vous aimeriez une plus grosse croissance mais vous ne savez pas comment faire",
              text: "Ça fait des années que vous aimeriez avoir une plus grosse croissance mais vous ne savez pas quel levier utiliser pour y parvenir.",
            },
          ].map((card) => (
            <div
              key={card.title}
              className="rounded-[1.75rem] border border-neutral-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg hover:shadow-neutral-200/60"
            >
              <span className="block h-[3px] w-10 rounded-full bg-amber-500" />
              <h3 className="mt-4 text-xl font-semibold leading-snug">{card.title}</h3>
              <p className="mt-3 leading-relaxed text-neutral-600">{card.text}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* LE CALCUL */}
      <motion.section {...reveal} className="bg-neutral-950 py-16 text-white md:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-[.75fr_1.25fr] md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">Un rapide calcul</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Combien de chiffre d'affaire vous laissez à vos concurrents
            </h2>
            <p className="mt-5 leading-relaxed text-neutral-400">
              Si les clients ne vous trouvent pas, ils vont chez vos concurrents.
            </p>
          </div>
          <div className="rounded-[1.75rem] border border-neutral-800 bg-neutral-900 p-7 sm:p-9">
            <div className="grid gap-5 sm:grid-cols-3">
              <div className="flex flex-col gap-2">
                <label htmlFor="manquees" className="text-sm text-neutral-400">
                  Demandes manquées / semaine
                </label>
                <input
                  id="manquees"
                  type="number"
                  min="0"
                  max="99"
                  value={manquees}
                  onChange={(e) => setManquees(e.target.value)}
                  className="w-full rounded-2xl border border-neutral-700 bg-neutral-950 px-4 py-3.5 text-xl font-semibold tabular-nums text-white outline-none focus:border-amber-500"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="panier" className="text-sm text-neutral-400">
                  Votre panier moyen (€)
                </label>
                <input
                  id="panier"
                  type="number"
                  min="0"
                  max="999999"
                  value={panier}
                  onChange={(e) => setPanier(e.target.value)}
                  className="w-full rounded-2xl border border-neutral-700 bg-neutral-950 px-4 py-3.5 text-xl font-semibold tabular-nums text-white outline-none focus:border-amber-500"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="taux" className="text-sm text-neutral-400">
                  Devis signés (%)
                </label>
                <input
                  id="taux"
                  type="number"
                  min="0"
                  max="100"
                  value={taux}
                  onChange={(e) => setTaux(e.target.value)}
                  className="w-full rounded-2xl border border-neutral-700 bg-neutral-950 px-4 py-3.5 text-xl font-semibold tabular-nums text-white outline-none focus:border-amber-500"
                />
              </div>
            </div>
            <div className="mt-8 flex flex-col items-start justify-between gap-3 border-t border-neutral-800 pt-7 sm:flex-row sm:items-end">
              <p className="max-w-xs text-neutral-400">Ce que ça représente, sur une année :</p>
              <span className="text-4xl font-extrabold tracking-tight tabular-nums text-amber-300 sm:text-5xl">
                {total}
              </span>
            </div>
            <p className="mt-4 text-xs text-neutral-500">Chiffres d'exemple, à remplacer par les vôtres.</p>
          </div>
        </div>
      </motion.section>

      {/* CE QUI SE CONSTRUIT */}
      <motion.section {...reveal} className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-[1.05fr_.95fr] md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">Ce qui se construit</p>
            <h2 className="mt-4 max-w-lg text-3xl font-semibold tracking-tight sm:text-4xl">
              Les clients ne demandent qu'à vous connaitre pour répondre à leurs besoins
            </h2>
            <p className="mt-6 max-w-lg leading-relaxed text-neutral-600">
              Le bouche-à-oreille dépend du hasard : une rencontre, une recommandation, un bon moment. Une présence en ligne, elle, ne s'arrête jamais — elle continue de parler de vous pendant que vous êtes sur un chantier, un dimanche, en plein mois d'août.
            </p>
            <p className="mt-4 max-w-lg leading-relaxed text-neutral-600">
              Ce n'est pas un coup ponctuel. C'est un actif qui reste là, semaine après semaine, même les semaines où vous n'y pensez pas.
            </p>
          </div>

          <div className="rounded-[1.75rem] border border-neutral-800 bg-neutral-900 p-8">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-400">
              Évolution du chiffre d'affaires
            </span>
            <div className="relative mt-6">
              <svg viewBox="0 0 480 170" className="block w-full overflow-visible" style={{ height: 170 }}>
                <motion.path
                  d="M0,150 C90,144 180,138 260,128 C340,118 410,108 476,96"
                  fill="none"
                  stroke="#78716C"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                />
                <path
                  d="M0,150 C90,132 180,96 260,58 C340,26 410,10 476,2"
                  fill="none"
                  stroke="#F59E0B"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeDasharray="9 8"
                />
                <motion.circle
                  cx="476"
                  cy="2"
                  r="6"
                  fill="#FBBF24"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 2.2, duration: 0.4 }}
                />
              </svg>
              <div className="mt-2 flex justify-between px-0.5 text-[11px] text-neutral-500">
                <span>Jan</span>
                <span>Mar</span>
                <span>Mai</span>
                <span>Juil</span>
                <span>Sep</span>
                <span>Nov</span>
              </div>
            </div>
            <div className="mt-5 flex flex-wrap gap-5 text-[13px]">
              <span className="flex items-center gap-2 text-neutral-200">
                <span className="inline-block h-0 w-5 border-t-[3px] border-neutral-500" />
                Bouche-à-oreille seul
              </span>
              <span className="flex items-center gap-2 text-amber-300">
                <span className="inline-block h-0 w-5 border-t-[3px] border-dashed border-amber-500" />
                Avec une présence en ligne — +30 % de CA (exemple)
              </span>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-neutral-400">
              Courbes à titre d'exemple — on les recalcule avec vos vrais chiffres, dès le premier échange.
            </p>
          </div>
        </div>
      </motion.section>

      {/* CE QUE CA CHANGE */}
      <motion.section {...reveal} className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">Ce que ça change</p>
        <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
          Ce qui change, une fois qu'on vous voit.
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {[
            {
              icon: Globe,
              title: "Vous touchez des clients qu'aucun bouche-à-oreille ne vous aurait amenés",
              text: "Que votre réputation couvre un quartier ou toute une région, elle ne touche jamais les gens qui n'ont personne pour leur parler de vous. Ceux-là, vous les touchez maintenant — au moment exact où ils cherchent.",
            },
            {
              icon: ShieldCheck,
              title: "Votre entreprise a enfin la croissance qu'elle mérite",
              text: "Vingt ans de chantiers, la propreté du travail, les clients qui reviennent : visible en dix secondes par quelqu'un qui ne vous connaît pas encore.",
            },
            {
              icon: BarChart3,
              title: "Vous choisissez vos chantiers — et vos prix",
              text: "Quand il y a plus de demandes que de créneaux, ce n'est plus vous qui vous alignez. Vous prenez les beaux chantiers et vous laissez les autres.",
            },
            {
              icon: Clock,
              title: "Vous arrêtez d'attendre que le téléphone sonne",
              text: "Les demandes arrivent toutes les semaines, y compris en janvier, y compris quand personne n'a parlé de vous. C'est un actif, pas une saison.",
            },
          ].map((card) => (
            <div
              key={card.title}
              className="flex gap-5 rounded-[1.75rem] border border-neutral-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg hover:shadow-neutral-200/60"
            >
              <card.icon size={28} strokeWidth={1.7} className="mt-1 shrink-0 text-amber-700" />
              <div>
                <h3 className="text-xl font-semibold leading-snug">{card.title}</h3>
                <p className="mt-3 leading-relaxed text-neutral-600">{card.text}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* LA METHODE */}
      <motion.section {...reveal} id="methode" className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 md:grid-cols-[.75fr_1.25fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">La méthode</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Trois étapes. Vous n'en faites qu'une.
              </h2>
              <p className="mt-6 leading-relaxed text-neutral-600">
                On ne vous demande pas de devenir un homme de l'informatique. On vous demande de nous parler de votre métier une demi-heure.
              </p>
            </div>
            <div className="space-y-4">
              {[
                ["01", "On fait le point — 30 minutes au téléphone", "On regarde ce que votre entreprise renvoie aujourd'hui, vue de l'extérieur, et ce que vos concurrents montrent à votre place. Vous repartez avec le constat, même si on ne travaille pas ensemble."],
                ["02", "On habille votre entreprise", "Vos chantiers en photo, les mots justes, une page qui rassure et qui donne envie de décrocher son téléphone. Vous validez, on s'occupe de tout le reste."],
                ["03", "On va chercher les clients, un par un", "Votre entreprise se présente aux gens de votre secteur qui ont un projet — y compris ceux qui n'auraient jamais entendu parler de vous. Vous recevez les demandes. On vous montre les résultats chaque mois, en français."],
              ].map(([num, title, text]) => (
                <div
                  key={num}
                  className="grid gap-5 rounded-[1.75rem] border border-neutral-200 bg-[#FAFAF8] p-7 sm:grid-cols-[70px_1fr]"
                >
                  <div className="text-3xl font-extrabold text-neutral-300">{num}</div>
                  <div>
                    <h3 className="text-xl font-semibold">{title}</h3>
                    <p className="mt-2 leading-relaxed text-neutral-600">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* VOS QUESTIONS */}
      <motion.section {...reveal} id="questions" className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">Vos questions</p>
        <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
          Ce que vous êtes en train de vous dire.
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {[
            ["« Je n'y connais rien en informatique. »", "Tant mieux, ce n'est pas votre métier. Vous ne toucherez aucun écran : on vous appelle, vous nous parlez de vos chantiers, on fait le reste. Si vous savez répondre au téléphone, vous savez travailler avec nous."],
            ["« J'ai déjà payé un site, ça n'a rien donné. »", "Normal : un site ne fait venir personne, il rassure ceux qui arrivent. Le travail, c'est d'aller chercher les gens et de les amener jusqu'à vous. C'est exactement là que les autres se sont arrêtés."],
            ["« J'ai déjà du travail, je n'ai besoin de rien. »", "Aujourd'hui. Le bouche-à-oreille est une belle machine, mais ce n'est pas vous qui la commandez. Le bon moment pour construire l'autre canal, c'est justement quand tout va bien — pas le jour où le carnet se vide."],
            ["« Mon métier ne se vend pas sur internet. »", "Votre métier ne se vend pas sur internet. Votre sérieux, si. Les gens ne cherchent pas un site : ils cherchent quelqu'un en qui avoir confiance, et ils regardent tout avant de décrocher."],
          ].map(([q, a]) => (
            <div key={q} className="rounded-[1.75rem] border border-neutral-200 bg-white p-8 shadow-sm">
              <p className="text-lg font-semibold leading-snug">{q}</p>
              <p className="mt-3 leading-relaxed text-neutral-600">{a}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* CONTACT */}
      <motion.section {...reveal} id="contact" className="border-t border-neutral-200 py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-[.9fr_1.1fr] md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">Le premier pas</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
              Avant tout, on prend le temps de se parler.
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-neutral-600">
              Une trentaine de minutes au téléphone, sans rendez-vous compliqué à caler. On échange sur votre métier, sur ce que vous faites déjà bien, et on regarde ensemble s'il y a quelque chose à construire.
            </p>
            <div className="mt-7 space-y-3 text-neutral-950">
              <span className="flex items-center gap-3">
                <CheckCircle2 size={18} className="text-emerald-600" /> Gratuit, et sans suite obligatoire
              </span>
              <span className="flex items-center gap-3">
                <CheckCircle2 size={18} className="text-emerald-600" /> Si ce n'est pas pour vous, on vous le dit
              </span>
              <span className="flex items-center gap-3">
                <CheckCircle2 size={18} className="text-emerald-600" /> Un rappel sous 24 h, jamais de relance insistante
              </span>
            </div>
          </div>

          <div className="rounded-[1.75rem] bg-neutral-950 p-8 sm:p-9">
            <p className="mb-6 text-xl font-bold text-white">Laissez-nous votre numéro.</p>
            <div className="space-y-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="nom" className="text-sm text-neutral-400">
                  Votre nom
                </label>
                <input
                  id="nom"
                  type="text"
                  placeholder="Jean Dupont"
                  className="w-full rounded-2xl border border-neutral-700 bg-neutral-900 px-4 py-4 text-white outline-none focus:border-amber-500"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="telephone" className="text-sm text-neutral-400">
                  Votre téléphone
                </label>
                <input
                  id="telephone"
                  type="tel"
                  placeholder="06 00 00 00 00"
                  className="w-full rounded-2xl border border-neutral-700 bg-neutral-900 px-4 py-4 text-white outline-none focus:border-amber-500"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="metier" className="text-sm text-neutral-400">
                  Votre métier et votre commune
                </label>
                <input
                  id="metier"
                  type="text"
                  placeholder="Charpentier, Saint-Jean-de-Losne"
                  className="w-full rounded-2xl border border-neutral-700 bg-neutral-900 px-4 py-4 text-white outline-none focus:border-amber-500"
                />
              </div>
              <WhatsAppLink className="mt-1 flex items-center justify-center gap-2 rounded-2xl bg-amber-500 px-6 py-5 font-bold text-neutral-950 transition hover:bg-amber-400">
                Demander mon point gratuit <ArrowRight size={19} />
              </WhatsAppLink>
            </div>
            <p className="mt-5 text-center text-sm text-neutral-400">
              Trois champs, rien d'autre. Vous n'aurez pas à créer de compte.
            </p>
          </div>
        </div>
      </motion.section>

      {/* PIED DE PAGE */}
      <footer className="bg-neutral-950 px-6 py-10 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 text-center md:flex-row md:justify-between md:text-left">
          <div className="leading-none">
            <p className="text-2xl font-black tracking-[-0.08em]">Batiscale</p>
            <div className="mx-auto mt-1 h-[2px] w-12 rounded-full bg-amber-500 md:mx-0" />
          </div>
          <p className="max-w-sm text-sm text-neutral-400">
            On donne à votre réputation la portée qu'elle mérite. Pour les entreprises locales qui ont déjà fait leurs preuves.
          </p>
          <span className="text-xs text-neutral-500">Mentions légales · Confidentialité</span>
        </div>
      </footer>
    </main>
  );
}
