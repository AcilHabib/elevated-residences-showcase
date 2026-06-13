"use client";

import { QrCode } from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { useI18n } from "@/lib/i18n";
import { COMPANY_QR_SRC, COMPANY_QR_URL } from "@/lib/site";

type QrCodeCardProps = {
  compact?: boolean;
  className?: string;
};

export function QrCodeCard({ compact, className }: QrCodeCardProps) {
  const { t } = useI18n();

  return (
    <Reveal>
      <div
        className={`rounded-3xl border border-border bg-card p-6 ${compact ? "" : "md:p-8"} ${className ?? ""}`}
      >
        <div className="flex items-center gap-3 mb-4">
          <QrCode className="h-5 w-5 text-gold" />
          <h3 className="font-display text-xl">{t("qr.title")}</h3>
        </div>
        <p className="text-sm text-muted-foreground mb-5">{t("qr.desc")}</p>
        <a
          href={COMPANY_QR_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mx-auto block w-fit rounded-2xl border border-border bg-white p-3 shadow-sm transition-transform hover:scale-[1.02]"
          title={t("qr.linkTitle")}
        >
          <img
            src={COMPANY_QR_SRC}
            alt={t("qr.alt")}
            className={
              compact ? "h-36 w-36 object-contain" : "h-44 w-44 md:h-52 md:w-52 object-contain"
            }
            loading="lazy"
          />
        </a>
      </div>
    </Reveal>
  );
}
