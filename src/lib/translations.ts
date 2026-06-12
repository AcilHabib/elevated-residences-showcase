import type { Locale } from "./i18n";
import { pageTranslations } from "./translations/pages";
import { simTranslations } from "./translations/simulations";

type Dict = Record<string, string>;

const base: Record<Locale, Dict> = {
  fr: {
    "nav.home": "Accueil",
    "nav.residence": "La Résidence",
    "nav.plans": "Plans",
    "nav.commercial": "Locaux commerciaux",
    "nav.location": "Localisation",
    "nav.faq": "FAQ",
    "nav.contact": "Contact",
    "cta.brochure": "Télécharger la brochure",
    "cta.discover": "Découvrir le projet",
    "cta.rdv": "Demander un RDV",

    "footer.tagline":
      "Promotion Benchallal A. Halim — votre partenaire pour un investissement immobilier sûr et durable à Béjaïa.",
    "footer.navigation": "Navigation",
    "footer.contact": "Contact",
    "footer.address": "Adresse",
    "footer.residence_line": "Résidence Azimour · Béjaïa",
    "footer.copyright": "Promotion Immobilière Benchallal A. Halim — P.B.A. Tous droits réservés.",
    "footer.link.residence": "La Résidence",
    "footer.link.plans": "Plans d'étage",
    "footer.link.commercial": "Locaux commerciaux",
    "footer.link.location": "Localisation",

    "about.subtitle": "Qui sommes-nous",
    "about.title": "Promotion Benchallal A. Halim",
    "about.p1":
      "Promotion Benchallal A. Halim est une société de promotion immobilière depuis 2014, spécialisée dans la réalisation de projets résidentiels et commerciaux de qualité.",
    "about.p2":
      "Nous mettons notre expertise au service de nos clients pour concevoir des espaces modernes, confortables et durables. Soucieux de l'excellence, nous veillons au respect des normes de construction et des délais de réalisation.",
    "about.p3":
      "Notre engagement repose sur la confiance, la qualité et la satisfaction de nos clients.",
    "about.p4":
      "Promotion Benchallal A. Halim, votre partenaire pour un investissement immobilier sûr et durable.",
    "about.pillar.since": "Depuis 2014",
    "about.pillar.quality": "Excellence",
    "about.pillar.trust": "Confiance",

    "awards.subtitle": "Distinctions",
    "awards.title": "3ème Meilleur Stand",
    "awards.event": "8ème édition du Salon du Promoteur Immobilier à Béjaïa",
    "awards.desc":
      "Promotion Benchallal A. Halim a été distinguée pour la qualité de son stand et la présentation de ses projets lors du salon professionnel de la promotion immobilière à Béjaïa.",

    "sim3d.subtitle": "Visite immersive",
    "sim3d.title": "Simulation 3D interactive",
    "sim3d.desc":
      "Explorez l'ensemble de la résidence en immersion — parcourez les espaces, les façades et les aménagements en temps réel.",
    "sim3d.coming": "Bientôt disponible",
    "sim3d.hint": "La visite interactive 3D sera intégrée prochainement.",

    "contact.subtitle": "Contact",
    "contact.title": "Parlons de votre",
    "contact.titleAccent": "projet",
    "contact.intro":
      "Notre équipe commerciale vous répond avec attention. Téléphone, WhatsApp, email ou formulaire — choisissez votre canal.",
    "contact.sales": "Service commercial",
    "contact.whatsapp": "Discuter maintenant",
    "contact.email": "Email",
    "contact.address": "Adresse",
    "contact.addressValue": "Résidence Azimour · Béjaïa, Algérie",
    "contact.formTitle": "Demande de devis",
    "contact.formSubtitle":
      "Remplissez le formulaire — votre demande de devis sera envoyée sur WhatsApp au 0770 03 18 69.",
    "contact.name": "Nom complet",
    "contact.phone": "Téléphone",
    "contact.emailField": "Email",
    "contact.subject": "Type de bien / Sujet",
    "contact.message": "Détails de votre demande",
    "contact.submit": "Envoyer sur WhatsApp",
    "contact.sending": "Ouverture…",
    "contact.toast": "Votre demande a été préparée dans WhatsApp.",
    "contact.mapTitle": "Carte — Résidence Azimour",

    "location.coords": "Coordonnées GPS",
    "location.openMaps": "Ouvrir dans Google Maps",
  },
  en: {
    "nav.home": "Home",
    "nav.residence": "The Residence",
    "nav.plans": "Floor Plans",
    "nav.commercial": "Commercial Units",
    "nav.location": "Location",
    "nav.faq": "FAQ",
    "nav.contact": "Contact",
    "cta.brochure": "Download brochure",
    "cta.discover": "Discover the project",
    "cta.rdv": "Request a visit",

    "footer.tagline":
      "Promotion Benchallal A. Halim — your partner for a safe and sustainable real estate investment in Béjaïa.",
    "footer.navigation": "Navigation",
    "footer.contact": "Contact",
    "footer.address": "Address",
    "footer.residence_line": "Azimour Residence · Béjaïa",
    "footer.copyright": "Promotion Immobilière Benchallal A. Halim — P.B.A. All rights reserved.",
    "footer.link.residence": "The Residence",
    "footer.link.plans": "Floor Plans",
    "footer.link.commercial": "Commercial Units",
    "footer.link.location": "Location",

    "about.subtitle": "Who we are",
    "about.title": "Promotion Benchallal A. Halim",
    "about.p1":
      "Promotion Benchallal A. Halim has been a real estate development company since 2014, specializing in high-quality residential and commercial projects.",
    "about.p2":
      "We put our expertise at the service of our clients to design modern, comfortable and sustainable spaces. Committed to excellence, we ensure compliance with construction standards and delivery deadlines.",
    "about.p3": "Our commitment is built on trust, quality and client satisfaction.",
    "about.p4":
      "Promotion Benchallal A. Halim — your partner for a safe and sustainable real estate investment.",
    "about.pillar.since": "Since 2014",
    "about.pillar.quality": "Excellence",
    "about.pillar.trust": "Trust",

    "awards.subtitle": "Awards",
    "awards.title": "3rd Best Stand",
    "awards.event": "8th edition of the Real Estate Developer Trade Fair in Béjaïa",
    "awards.desc":
      "Promotion Benchallal A. Halim was recognized for the quality of its stand and project presentation at Béjaïa's professional real estate fair.",

    "sim3d.subtitle": "Immersive visit",
    "sim3d.title": "Interactive 3D simulation",
    "sim3d.desc":
      "Explore the entire residence in immersion — walk through spaces, façades and amenities in real time.",
    "sim3d.coming": "Coming soon",
    "sim3d.hint": "The interactive 3D tour will be integrated shortly.",

    "contact.subtitle": "Contact",
    "contact.title": "Let's talk about your",
    "contact.titleAccent": "project",
    "contact.intro":
      "Our sales team is here to help. Phone, WhatsApp, email or form — choose your preferred channel.",
    "contact.sales": "Sales department",
    "contact.whatsapp": "Chat now",
    "contact.email": "Email",
    "contact.address": "Address",
    "contact.addressValue": "Azimour Residence · Béjaïa, Algeria",
    "contact.formTitle": "Quote request",
    "contact.formSubtitle":
      "Fill in the form — your quote request will be sent via WhatsApp to 0770 03 18 69.",
    "contact.name": "Full name",
    "contact.phone": "Phone",
    "contact.emailField": "Email",
    "contact.subject": "Property type / Subject",
    "contact.message": "Details of your request",
    "contact.submit": "Send via WhatsApp",
    "contact.sending": "Opening…",
    "contact.toast": "Your request has been prepared in WhatsApp.",
    "contact.mapTitle": "Map — Azimour Residence",

    "location.coords": "GPS coordinates",
    "location.openMaps": "Open in Google Maps",
  },
  ar: {
    "nav.home": "الرئيسية",
    "nav.residence": "الإقامة",
    "nav.plans": "المخططات",
    "nav.commercial": "المحلات التجارية",
    "nav.location": "الموقع",
    "nav.faq": "الأسئلة الشائعة",
    "nav.contact": "اتصل بنا",
    "cta.brochure": "تحميل الكتيب",
    "cta.discover": "اكتشف المشروع",
    "cta.rdv": "طلب موعد",

    "footer.tagline":
      "شركة بن شلال أ. حليم للترويج العقاري — شريككم لاستثمار عقاري آمن ومستدام في بجاية.",
    "footer.navigation": "التنقل",
    "footer.contact": "اتصل بنا",
    "footer.address": "العنوان",
    "footer.residence_line": "إقامة أزيمور · بجاية",
    "footer.copyright": "شركة الترويج العقاري بن شلال أ. حليم — P.B.A. جميع الحقوق محفوظة.",
    "footer.link.residence": "الإقامة",
    "footer.link.plans": "مخططات الطوابق",
    "footer.link.commercial": "المحلات التجارية",
    "footer.link.location": "الموقع",

    "about.subtitle": "من نحن",
    "about.title": "شركة بن شلال أ. حليم للترويج العقاري",
    "about.p1":
      "شركة بن شلال أ. حليم للترويج العقاري منذ 2014، متخصصة في تنفيذ مشاريع سكنية وتجارية عالية الجودة.",
    "about.p2":
      "نضع خبرتنا في خدمة عملائنا لتصميم مساحات عصرية ومريحة ومستدامة. وحرصاً على التميز، نلتزم بمعايير البناء واحترام آجال التسليم.",
    "about.p3": "التزامنا مبني على الثقة والجودة ورضا العملاء.",
    "about.p4": "شركة بن شلال أ. حليم — شريككم لاستثمار عقاري آمن ومستدام.",
    "about.pillar.since": "منذ 2014",
    "about.pillar.quality": "التميز",
    "about.pillar.trust": "الثقة",

    "awards.subtitle": "جوائز وتكريم",
    "awards.title": "المرتبة الثالثة لأفضل جناح",
    "awards.event": "الدورة الثامنة لصالون المطور العقاري ببجاية",
    "awards.desc":
      "تم تكريم شركة بن شلال أ. حليم لجودة جناحها وعرض مشاريعها في المعرض المهني للترويج العقاري ببجاية.",

    "sim3d.subtitle": "زيارة غامرة",
    "sim3d.title": "محاكاة ثلاثية الأبعاد تفاعلية",
    "sim3d.desc": "استكشف الإقامة بالكامل — تجول في المساحات والواجهات والمرافق بشكل تفاعلي.",
    "sim3d.coming": "قريباً",
    "sim3d.hint": "ستُدمج الزيارة التفاعلية ثلاثية الأبعاد قريباً.",

    "contact.subtitle": "اتصل بنا",
    "contact.title": "لنتحدث عن",
    "contact.titleAccent": "مشروعكم",
    "contact.intro":
      "فريقنا التجاري في خدمتكم. هاتف، واتساب، بريد إلكتروني أو نموذج — اختروا الوسيلة المناسبة.",
    "contact.sales": "الخدمة التجارية",
    "contact.whatsapp": "تحدث الآن",
    "contact.email": "البريد الإلكتروني",
    "contact.address": "العنوان",
    "contact.addressValue": "إقامة أزيمور · بجاية، الجزائر",
    "contact.formTitle": "طلب عرض سعر",
    "contact.formSubtitle": "املأ النموذج — سيُرسل طلب عرض السعر عبر واتساب إلى 0770 03 18 69.",
    "contact.name": "الاسم الكامل",
    "contact.phone": "الهاتف",
    "contact.emailField": "البريد الإلكتروني",
    "contact.subject": "نوع العقار / الموضوع",
    "contact.message": "تفاصيل طلبكم",
    "contact.submit": "إرسال عبر واتساب",
    "contact.sending": "جاري الفتح…",
    "contact.toast": "تم تجهيز طلبكم في واتساب.",
    "contact.mapTitle": "الخريطة — إقامة أزيمور",

    "location.coords": "إحداثيات GPS",
    "location.openMaps": "فتح في خرائط Google",
  },
};

export const translations: Record<Locale, Dict> = {
  fr: { ...base.fr, ...pageTranslations.fr, ...simTranslations.fr },
  en: { ...base.en, ...pageTranslations.en, ...simTranslations.en },
  ar: { ...base.ar, ...pageTranslations.ar, ...simTranslations.ar },
};
