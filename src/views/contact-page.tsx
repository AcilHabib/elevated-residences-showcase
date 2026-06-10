"use client";
import { useState } from "react";
import { Phone, Mail, MessageCircle, MapPin, Send } from "lucide-react";
import { toast } from "sonner";
import { Reveal } from "@/components/Reveal";

const phones = ["0770 27 57 55", "0770 03 18 69", "0770 27 57 11"];

export default function ContactPage() {
  const [sending, setSending] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success("Message envoyé. Nous vous recontactons très rapidement.");
      (e.target as HTMLFormElement).reset();
    }, 900);
  }

  return (
    <>
      <section className="pt-40 pb-12">
        <div className="container-luxury">
          <Reveal>
            <p className="hairline-gold text-xs uppercase tracking-[0.25em] text-gold font-semibold">
              Contact
            </p>
            <h1 className="mt-4 font-display text-5xl md:text-7xl leading-tight max-w-4xl">
              Parlons de votre <span className="italic text-gradient-gold">projet</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
              Notre équipe commerciale vous répond avec attention. Téléphone, WhatsApp, email ou
              formulaire — choisissez votre canal.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-32">
        <div className="container-luxury grid lg:grid-cols-5 gap-8">
          {/* Contact cards */}
          <div className="lg:col-span-2 space-y-4">
            <Reveal>
              <div className="rounded-3xl p-7 bg-card border border-border">
                <div className="flex items-center gap-3 mb-5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold/10 text-gold">
                    <Phone className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-xl">Service commercial</h3>
                </div>
                <ul className="space-y-2">
                  {phones.map((p) => (
                    <li key={p}>
                      <a
                        href={`tel:+213${p.replace(/\s/g, "").slice(1)}`}
                        className="block px-4 py-3 rounded-xl bg-muted/40 hover:bg-gold/10 transition-colors font-display text-lg text-foreground hover:text-gold"
                      >
                        {p}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <a
                href="https://wa.me/213770275755"
                target="_blank"
                rel="noopener"
                className="flex items-center gap-4 p-6 rounded-3xl bg-gradient-to-br from-[oklch(0.7_0.18_150)] to-[oklch(0.55_0.16_150)] text-white hover:scale-[1.01] transition-transform"
              >
                <MessageCircle className="h-7 w-7" />
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] opacity-80">WhatsApp</p>
                  <p className="font-display text-xl">Discuter maintenant</p>
                </div>
              </a>
            </Reveal>

            <Reveal delay={0.16}>
              <a
                href="mailto:promotion.benchallal@gmail.com"
                className="flex items-center gap-4 p-6 rounded-3xl bg-card border border-border hover:border-gold/40 transition-colors"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Email</p>
                  <p className="font-display text-lg break-all">promotion.benchallal@gmail.com</p>
                </div>
              </a>
            </Reveal>

            <Reveal delay={0.22}>
              <div className="flex items-center gap-4 p-6 rounded-3xl bg-card border border-border">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    Adresse
                  </p>
                  <p className="font-display text-lg">Béjaïa · Algérie</p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <Reveal delay={0.1}>
              <form
                onSubmit={onSubmit}
                className="rounded-3xl p-8 md:p-10 bg-card border border-border"
              >
                <h3 className="font-display text-3xl">Envoyez-nous un message</h3>
                <p className="mt-2 text-sm text-muted-foreground">Nous vous répondons sous 24h.</p>

                <div className="mt-8 grid sm:grid-cols-2 gap-4">
                  <Field label="Nom complet" name="name" required />
                  <Field label="Téléphone" name="phone" type="tel" required />
                  <div className="sm:col-span-2">
                    <Field label="Email" name="email" type="email" required />
                  </div>
                  <div className="sm:col-span-2">
                    <Field label="Sujet" name="subject" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      className="w-full rounded-xl bg-background border border-border px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors resize-none"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="mt-8 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[var(--gold)] to-[oklch(from_var(--gold)_calc(l+0.08)_c_h)] px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-gold-foreground shadow-[var(--shadow-gold)] hover:scale-[1.03] transition-transform disabled:opacity-60"
                >
                  {sending ? "Envoi…" : "Envoyer le message"}
                  <Send className="h-4 w-4" />
                </button>
              </form>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="pb-32">
        <div className="container-luxury">
          <Reveal>
            <div className="rounded-3xl overflow-hidden border border-border shadow-[var(--shadow-luxury)] aspect-[21/9]">
              <iframe
                title="Carte"
                src="https://www.google.com/maps?q=Bejaia,Algeria&output=embed"
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full rounded-xl bg-background border border-border px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors"
      />
    </div>
  );
}
