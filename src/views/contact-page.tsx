"use client";

import { useState } from "react";
import { Phone, Mail, MessageCircle, MapPin, Send } from "lucide-react";
import { toast } from "sonner";

import { QrCodeCard } from "@/components/QrCodeCard";
import { Reveal } from "@/components/Reveal";
import { useI18n } from "@/lib/i18n";
import {
  buildMailtoUrl,
  COMMERCIAL_EMAIL,
  OFFICE_COORDS,
  OFFICE_MAPS_EMBED_URL,
  OFFICE_MAPS_LINK,
  RESIDENCE_NAME,
  WHATSAPP_DISPLAY,
  WHATSAPP_NUMBER,
} from "@/lib/site";

const phones = ["0770 03 18 69", "0770 27 57 55", "0770 27 57 11"];

export default function ContactPage() {
  const { t, locale } = useI18n();
  const [sending, setSending] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const subject = String(data.get("subject") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    setSending(true);

    const header =
      locale === "en"
        ? `Quote request — P.B.A / ${RESIDENCE_NAME}`
        : locale === "ar"
          ? `طلب عرض سعر — P.B.A / ${RESIDENCE_NAME}`
          : `Demande de devis — P.B.A / ${RESIDENCE_NAME}`;

    const lines = [
      header,
      "",
      locale === "en" ? `Name: ${name}` : locale === "ar" ? `الاسم: ${name}` : `Nom: ${name}`,
      locale === "en"
        ? `Phone: ${phone}`
        : locale === "ar"
          ? `الهاتف: ${phone}`
          : `Téléphone: ${phone}`,
      `Email: ${email}`,
      subject
        ? locale === "en"
          ? `Subject: ${subject}`
          : locale === "ar"
            ? `الموضوع: ${subject}`
            : `Sujet: ${subject}`
        : "",
      "",
      locale === "en" ? "Details:" : locale === "ar" ? "التفاصيل:" : "Message:",
      message,
    ].filter(Boolean);

    const url = buildMailtoUrl({
      subject: header,
      body: lines.join("\n"),
    });
    window.location.href = url;

    setTimeout(() => {
      setSending(false);
      toast.success(t("contact.toast"));
      form.reset();
    }, 400);
  }

  return (
    <>
      <section className="pt-40 pb-12">
        <div className="container-luxury">
          <Reveal>
            <p className="hairline-gold text-xs uppercase tracking-[0.25em] text-gold font-semibold">
              {t("contact.subtitle")}
            </p>
            <h1 className="mt-4 font-display text-5xl md:text-7xl leading-tight max-w-4xl">
              {t("contact.title")}{" "}
              <span className="italic text-gradient-gold">{t("contact.titleAccent")}</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
              {t("contact.intro")}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-32">
        <div className="container-luxury grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-4">
            <Reveal>
              <div className="rounded-3xl p-7 bg-card border border-border">
                <div className="flex items-center gap-3 mb-5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold/10 text-gold">
                    <Phone className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-xl">{t("contact.sales")}</h3>
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
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener"
                className="flex items-center gap-4 p-6 rounded-3xl bg-gradient-to-br from-[oklch(0.7_0.18_150)] to-[oklch(0.55_0.16_150)] text-white hover:scale-[1.01] transition-transform"
              >
                <MessageCircle className="h-7 w-7" />
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] opacity-80">WhatsApp</p>
                  <p className="font-display text-xl">{t("contact.whatsapp")}</p>
                  <p className="text-sm opacity-90 mt-0.5">{WHATSAPP_DISPLAY}</p>
                </div>
              </a>
            </Reveal>

            <Reveal delay={0.16}>
              <a
                href={`mailto:${COMMERCIAL_EMAIL}`}
                className="flex items-center gap-4 p-6 rounded-3xl bg-card border border-border hover:border-gold/40 transition-colors"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    {t("contact.email")}
                  </p>
                  <p className="font-display text-lg break-all">{COMMERCIAL_EMAIL}</p>
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
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    {t("contact.generalEmail")}
                  </p>
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
                    {t("contact.address")}
                  </p>
                  <p className="font-display text-lg">{t("contact.addressValue")}</p>
                </div>
              </div>
            </Reveal>

            <QrCodeCard compact className="mt-4" />
          </div>

          <div className="lg:col-span-3">
            <Reveal delay={0.1}>
              <form
                onSubmit={onSubmit}
                className="rounded-3xl p-8 md:p-10 bg-card border border-border"
              >
                <h3 className="font-display text-3xl">{t("contact.formTitle")}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{t("contact.formSubtitle")}</p>

                <div className="mt-8 grid sm:grid-cols-2 gap-4">
                  <Field label={t("contact.name")} name="name" required />
                  <Field label={t("contact.phone")} name="phone" type="tel" required />
                  <div className="sm:col-span-2">
                    <Field label={t("contact.emailField")} name="email" type="email" required />
                  </div>
                  <div className="sm:col-span-2">
                    <Field label={t("contact.subject")} name="subject" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
                      {t("contact.message")}
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
                  className="mt-8 luxury-btn bg-gradient-to-r from-primary to-[var(--gold)] text-primary-foreground shadow-[var(--shadow-luxury)] hover:scale-[1.03] transition-transform disabled:opacity-60"
                >
                  <span>{sending ? t("contact.sending") : t("contact.submit")}</span>
                  <Send className="h-4 w-4 shrink-0" />
                </button>
              </form>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="pb-32">
        <div className="container-luxury">
          <Reveal>
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <h2 className="font-display text-2xl">{t("contact.mapTitle")}</h2>
              <a
                href={OFFICE_MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold uppercase tracking-[0.15em] text-primary hover:text-gold transition-colors"
              >
                {t("location.openMaps")} →
              </a>
            </div>
            <div className="rounded-3xl overflow-hidden border border-border shadow-[var(--shadow-luxury)] aspect-[21/9]">
              <iframe
                title={t("contact.mapTitle")}
                src={OFFICE_MAPS_EMBED_URL}
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              {t("location.coords")}: {OFFICE_COORDS.label} — {OFFICE_COORDS.place}
            </p>
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
