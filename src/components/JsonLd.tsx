import { buildOrganizationJsonLd } from "@/lib/seo";

export function JsonLd() {
  const data = buildOrganizationJsonLd();

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}
