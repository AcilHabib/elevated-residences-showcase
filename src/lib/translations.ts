import type { Locale } from "./i18n";
import { pageTranslations } from "./translations/pages";
import { simTranslations } from "./translations/simulations";

type Dict = Record<string, string>;

const base: Record<Locale, Dict> = {
  fr: {
    "nav.home": "Accueil",
    "nav.residence": "La\u00A0Résidence",
    "nav.plans": "Plans",
    "nav.commercial": "Appartements",
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
    "footer.residence_line": "Résidence Plage de Rêve · Beni Ksila · Benchallal Immo",
    "footer.copyright": "Promotion Immobilière Benchallal A. Halim — P.B.A. Tous droits réservés.",
    "footer.link.residence": "La Résidence",
    "footer.link.plans": "Plans d'étage",
    "footer.link.commercial": "Appartements",
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
    "awards.fair2026.title": "Participation au foire des batiment bejaia 2026 (iriscom)",

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
      "Notre équipe commerciale vous répond avec attention. Téléphone, email ou formulaire — choisissez votre canal.",
    "contact.sales": "Service commercial",
    "contact.whatsapp": "Discuter maintenant",
    "contact.email": "Email commercial",
    "contact.generalEmail": "Email général",
    "contact.address": "Adresse",
    "contact.addressValue": "Bureau Edimco · Béjaïa, Algérie",
    "contact.formTitle": "Demande de devis",
    "contact.formSubtitle":
      "Remplissez le formulaire — votre demande sera envoyée par email à commercialbenchallal@gmail.com.",
    "contact.name": "Nom complet",
    "contact.phone": "Téléphone",
    "contact.emailField": "Email",
    "contact.subject": "Type de bien / Sujet",
    "contact.message": "Détails de votre demande",
    "contact.submit": "Envoyer par email",
    "contact.sending": "Envoi…",
    "contact.toast": "Votre client email a été ouvert avec votre demande.",
    "contact.mapTitle": "Carte — Bureau Edimco Béjaïa",

    "location.coords": "Coordonnées GPS",
    "location.openMaps": "Ouvrir dans Google Maps",
  },
  en: {
    "nav.home": "Home",
    "nav.residence": "The Residence",
    "nav.plans": "Floor Plans",
    "nav.commercial": "Apartments",
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
    "footer.residence_line": "Plage de Rêve Residence · Beni Ksila · Benchallal Immo",
    "footer.copyright": "Promotion Immobilière Benchallal A. Halim — P.B.A. All rights reserved.",
    "footer.link.residence": "The Residence",
    "footer.link.plans": "Floor Plans",
    "footer.link.commercial": "Apartments",
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
    "awards.fair2026.title": "Participation in the Béjaïa 2026 Building Fair (Iriscom)",

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
      "Our sales team is here to help. Phone, email or form — choose your preferred channel.",
    "contact.sales": "Sales department",
    "contact.whatsapp": "Chat now",
    "contact.email": "Commercial email",
    "contact.generalEmail": "General email",
    "contact.address": "Address",
    "contact.addressValue": "Edimco office · Béjaïa, Algeria",
    "contact.mapTitle": "Office map — Edimco Béjaïa",
    "contact.formTitle": "Quote request",
    "contact.formSubtitle":
      "Fill in the form — your request will be sent by email to commercialbenchallal@gmail.com.",
    "contact.name": "Full name",
    "contact.phone": "Phone",
    "contact.emailField": "Email",
    "contact.subject": "Property type / Subject",
    "contact.message": "Details of your request",
    "contact.submit": "Send by email",
    "contact.sending": "Sending…",
    "contact.toast": "Your email client has been opened with your request.",

    "location.coords": "GPS coordinates",
    "location.openMaps": "Open in Google Maps",
  },
  ar: {
    "nav.home": "الرئيسية",
    "nav.residence": "الإقامة",
    "nav.plans": "المخططات",
    "nav.commercial": "الشقق",
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
    "footer.residence_line": "إقامة Plage de Rêve · بني كسيلة · Benchallal Immo",
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
    "awards.fair2026.title": "المشاركة في معرض البناء بجاية 2026 (iriscom)",

    "sim3d.subtitle": "زيارة غامرة",
    "sim3d.title": "محاكاة ثلاثية الأبعاد تفاعلية",
    "sim3d.desc": "استكشف الإقامة بالكامل — تجول في المساحات والواجهات والمرافق بشكل تفاعلي.",
    "sim3d.coming": "قريباً",
    "sim3d.hint": "ستُدمج الزيارة التفاعلية ثلاثية الأبعاد قريباً.",

    "contact.subtitle": "اتصل بنا",
    "contact.title": "لنتحدث عن",
    "contact.titleAccent": "مشروعكم",
    "contact.intro":
      "فريقنا التجاري في خدمتكم. هاتف، بريد إلكتروني أو نموذج — اختروا الوسيلة المناسبة.",
    "contact.sales": "الخدمة التجارية",
    "contact.whatsapp": "تحدث الآن",
    "contact.email": "البريد التجاري",
    "contact.generalEmail": "البريد العام",
    "contact.address": "العنوان",
    "contact.addressValue": "مكتب Edimco · بجاية، الجزائر",
    "contact.formTitle": "طلب عرض سعر",
    "contact.formSubtitle":
      "املأ النموذج — سيُرسل طلبكم عبر البريد الإلكتروني إلى commercialbenchallal@gmail.com.",
    "contact.name": "الاسم الكامل",
    "contact.phone": "الهاتف",
    "contact.emailField": "البريد الإلكتروني",
    "contact.subject": "نوع العقار / الموضوع",
    "contact.message": "تفاصيل طلبكم",
    "contact.submit": "إرسال عبر البريد الإلكتروني",
    "contact.sending": "جاري الإرسال…",
    "contact.toast": "تم فتح بريدكم الإلكتروني مع طلبكم.",
    "contact.mapTitle": "الخريطة — مكتب Edimco بجاية",

    "location.coords": "إحداثيات GPS",
    "location.openMaps": "فتح في خرائط Google",
  },
};

export const translations: Record<Locale, Dict> = {
  fr: { ...base.fr, ...pageTranslations.fr, ...simTranslations.fr },
  en: { ...base.en, ...pageTranslations.en, ...simTranslations.en },
  ar: { ...base.ar, ...pageTranslations.ar, ...simTranslations.ar },
};
