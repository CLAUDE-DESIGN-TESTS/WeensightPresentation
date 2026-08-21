// Contenu Weensight — chrome, familles, cas d'usage, vues secteur/fonction, plateforme, Wevioo.
export const UI = {
  nav: { fr: ["Plateforme", "Cas d'usage", "Références", "Wevioo"], en: ["Platform", "Use cases", "References", "Company"] },
  demo: { fr: "Demander une démo", en: "Request a demo" },
  catalogue: { fr: "Voir le catalogue", en: "Browse the catalogue" },
  more: { fr: "Voir plus", en: "Show more" },
  back: { fr: "Retour", en: "Back" },
  allUC: { fr: "Tous", en: "All" },
  sector: { fr: "Secteur", en: "Sector" },
  fn: { fr: "Fonction", en: "Function" },
  allSectors: { fr: "Tous les secteurs", en: "All sectors" },
  allFns: { fr: "Toutes les fonctions", en: "All functions" },
  views: { fr: ["Par typologie", "Par secteur", "Par fonction"], en: ["By type", "By sector", "By function"] },
  value: { fr: "Valeur métier apportée", en: "Business value delivered" },
  techs: { fr: "Technologies et capacités clés", en: "Key technologies and capabilities" },
  deployed: { fr: "Déployé pour", en: "Deployed for" },
  related: { fr: "Cas d'usage liés", en: "Related use cases" },
  askTitle: { fr: "Ce cas d'usage vous parle ?", en: "Does this use case resonate?" },
  askText: { fr: "Discutons de votre contexte, de vos données et du périmètre d'un premier pilote.", en: "Let's discuss your context, your data and the scope of a first pilot." },
  need: { fr: "Besoin client", en: "Client need" },
  benefits: { fr: "Bénéfices client", en: "Client benefits" },
  solution: { fr: "Solution Wevioo", en: "Wevioo solution" },
  process: { fr: "Processus", en: "Process" },
  synth: { fr: "Synthèse de la valeur", en: "Value summary" },
  output: { fr: "Output", en: "Output" },
  valueClient: { fr: "Valeur client", en: "Client value" },
  aiContrib: { fr: "Apport de l'IA", en: "What AI makes possible" },
  about: { fr: "À propos du client", en: "About the client" },
  ctaTitle: { fr: "Parlons de votre premier cas d'usage", en: "Let's talk about your first use case" },
  ctaText: { fr: "Un cadrage de deux semaines suffit à qualifier un cas d'usage, ses données et son architecture cible.", en: "A two-week framing is enough to qualify a use case, its data and its target architecture." },
  refsTitle: { fr: "Références clients", en: "Client references" },
  refsSub: { fr: "Des projets IA livrés en production, du secteur régulé à l'industrie.", en: "AI projects delivered in production, from regulated sectors to industry." },
  ucsTitle: { fr: "Cas d'usage", en: "Use cases" },
  ucsSub: { fr: "16 cas d'usage, organisés par typologie, secteur ou fonction.", en: "16 use cases, organised by type, sector or function." },
  noResult: { fr: "Aucun cas d'usage ne correspond à ces filtres.", en: "No use case matches these filters." }
};

export const FAMILIES = [
  { id: "F1", code: "F1", color: "teal",
    name: { fr: "Interagir & assister", en: "Engage & assist" },
    baseline: { fr: "L'IA dialogue avec vos collaborateurs et vos clients", en: "AI converses with your employees and your customers" },
    definition: { fr: "Assistants conversationnels et copilotes métier qui interagissent en langage naturel pour répondre aux questions, accéder à la connaissance et guider les utilisateurs.", en: "Conversational assistants and business copilots that interact in natural language to answer questions, unlock knowledge and guide users." },
    value: { fr: ["Productivité collaborateurs", "Accessibilité de la connaissance", "Qualité de service client 24/7"], en: ["Employee productivity", "Knowledge accessibility", "24/7 customer service quality"] },
    techs: { fr: ["LLM conversationnel", "RAG", "Multimodal", "Multilingue"], en: ["Conversational LLM", "RAG", "Multimodal", "Multilingual"] } },
  { id: "F2", code: "F2", color: "navy",
    name: { fr: "Extraire & structurer", en: "Extract & structure" },
    baseline: { fr: "L'IA lit, comprend et structure vos documents", en: "AI reads, understands and structures your documents" },
    definition: { fr: "Extraction intelligente de données depuis des documents non structurés (factures, contrats, formulaires, pièces d'identité) via la vision par ordinateur et l'OCR avancé.", en: "Intelligent data extraction from unstructured documents (invoices, contracts, forms, ID papers) through computer vision and advanced OCR." },
    value: { fr: ["Automatisation des saisies", "Fiabilisation des données", "Gain de temps back-office"], en: ["Data-entry automation", "More reliable data", "Back-office time savings"] },
    techs: { fr: ["VLM", "OCR intelligent", "Document Intelligence", "E-KYC"], en: ["VLM", "Intelligent OCR", "Document Intelligence", "e-KYC"] } },
  { id: "F3", code: "F3", color: "coral",
    name: { fr: "Analyser, décider & automatiser", en: "Analyse, decide & automate" },
    baseline: { fr: "L'IA évalue, compare et qualifie pour aider la décision", en: "AI assesses, compares and qualifies to support decisions" },
    definition: { fr: "Analyse comparative de documents (matching, conformité) et scoring intelligent (risque, pertinence, qualité) pour fiabiliser et accélérer les processus métier.", en: "Comparative document analysis (matching, compliance) and intelligent scoring (risk, relevance, quality) to make business processes faster and more reliable." },
    value: { fr: ["Qualité des décisions", "Conformité & maîtrise du risque", "Objectivité & traçabilité"], en: ["Decision quality", "Compliance & risk control", "Objectivity & traceability"] },
    techs: { fr: ["Matching sémantique", "Scoring IA", "Contract checking", "Compliance"], en: ["Semantic matching", "AI scoring", "Contract checking", "Compliance"] } },
  { id: "F4", code: "F4", color: "violet",
    name: { fr: "Explorer & restituer la donnée", en: "Explore & report on data" },
    baseline: { fr: "L'IA fait parler vos données et produit vos rapports", en: "AI makes your data speak and produces your reports" },
    definition: { fr: "Dialogue en langage naturel avec les bases de données et entrepôts BI : génération de requêtes, de graphiques et de rapports personnalisés en quelques clics.", en: "Natural-language dialogue with databases and BI warehouses: queries, charts and tailored reports generated in a few clicks." },
    value: { fr: ["Démocratisation de la BI", "Agilité décisionnelle", "Réduction du time-to-insight"], en: ["BI democratisation", "Decision agility", "Shorter time-to-insight"] },
    techs: { fr: ["Text-to-SQL", "Text-to-Chart", "NL2SQL", "Data Storytelling"], en: ["Text-to-SQL", "Text-to-Chart", "NL2SQL", "Data storytelling"] } }
];

const S = {
  assurance: { fr: "Assurance", en: "Insurance" },
  finance: { fr: "Finance", en: "Finance" },
  public: { fr: "Secteur public", en: "Public sector" },
  industrie: { fr: "Industrie", en: "Industry" },
  tech: { fr: "Tech & services", en: "Tech & services" },
  tourisme: { fr: "Tourisme", en: "Tourism" }
};
export const SECTOR_LABELS = S;

const F = {
  collab: { fr: "Tous collaborateurs", en: "All employees" },
  gestion: { fr: "Contrôle de gestion", en: "Management control" },
  juridique: { fr: "Juridique & conformité", en: "Legal & compliance" },
  citoyens: { fr: "Citoyens & usagers", en: "Citizens & users" },
  rh: { fr: "Ressources humaines", en: "Human resources" },
  marketing: { fr: "Marketing & relation client", en: "Marketing & customer care" },
  commercial: { fr: "Commercial", en: "Sales" },
  risk: { fr: "Analyse financière & risque", en: "Financial analysis & risk" },
  compliance: { fr: "Conformité", en: "Compliance" },
  compta: { fr: "Comptabilité", en: "Accounting" },
  innovation: { fr: "Innovation & R&D", en: "Innovation & R&D" },
  support: { fr: "Support technique", en: "Technical support" },
  secu: { fr: "Sécurité des SI", en: "IT security" }
};
export const FUNCTION_LABELS = F;

const T = {
  conv: { fr: "Conversation & assistance", en: "Conversation & assistance" },
  dkm: { fr: "Document Knowledge Mgmt", en: "Document knowledge mgmt" },
  ocr: { fr: "OCR avancé (VLM)", en: "Advanced OCR (VLM)" },
  dam: { fr: "Document Analysis & Matching", en: "Document analysis & matching" },
  sco: { fr: "Scoring IA", en: "AI scoring" },
  bi: { fr: "GEN BI", en: "Gen BI" },
  agent: { fr: "IA agentique", en: "Agentic AI" }
};
export const TECH_LABELS = T;

export const USECASES = [
  { id: "uc-01", code: "UC-01", family: "F1", sector: "assurance", fn: "collab", bc: "maghrebia",
    title: { fr: "Plateforme documentaire collaborateurs", en: "Employee document platform" },
    client: { fr: "Assurances Maghrebia", en: "Assurances Maghrebia" },
    desc: { fr: "Accès rapide et sécurisé aux documents internes pertinents pour accomplir les tâches efficacement, sans recherche manuelle dans plusieurs sources.", en: "Fast, secure access to the relevant internal documents needed to get work done, without manual search across multiple sources." },
    techs: ["conv", "dkm"] },
  { id: "uc-02", code: "UC-02", family: "F4", sector: "assurance", fn: "gestion", bc: "maghrebia",
    title: { fr: "Génération automatique de rapports", en: "Automated report generation" },
    client: { fr: "Assurances Maghrebia", en: "Assurances Maghrebia" },
    desc: { fr: "Création rapide de documents personnalisés (rapports d'activité) par les responsables spécialisés à partir de données internes.", en: "Fast creation of tailored documents (activity reports) by business managers from internal data." },
    techs: ["bi"] },
  { id: "uc-03", code: "UC-03", family: "F3", sector: "assurance", fn: "juridique", bc: "maghrebia",
    title: { fr: "Vérification des clauses de contrats", en: "Contract clause verification" },
    client: { fr: "Assurances Maghrebia", en: "Assurances Maghrebia" },
    desc: { fr: "Recherche d'informations critiques et vérification des clauses de contrats par rapport à des modèles de référence pour les responsables juridiques.", en: "Retrieval of critical information and verification of contract clauses against reference templates for legal teams." },
    techs: ["dam"] },
  { id: "uc-04", code: "UC-04", family: "F1", sector: "public", fn: "citoyens", bc: "wuri",
    title: { fr: "Chatbot e-learning multilingue", en: "Multilingual e-learning chatbot" },
    client: { fr: "WURI / APDP (Bénin)", en: "WURI / APDP (Benin)" },
    desc: { fr: "Chatbot intelligent multilingue (FR/EN/Fon) et multimodal intégré à une plateforme e-learning permettant aux apprenants de poser des questions sur les cours dispensés.", en: "Multilingual (FR/EN/Fon) and multimodal chatbot embedded in an e-learning platform so learners can ask questions about the courses." },
    techs: ["conv", "dkm"] },
  { id: "uc-05", code: "UC-05", family: "F1", sector: "public", fn: "citoyens", bc: "asin",
    title: { fr: "Assistant citoyen GPT BJ", en: "GPT BJ citizen assistant" },
    client: { fr: "ASIN (Bénin)", en: "ASIN (Benin)" },
    desc: { fr: "Assistant conversationnel répondant aux questions des citoyens et investisseurs sur les démarches administratives (code fiscal, numérique, travail, pénal).", en: "Conversational assistant answering citizens' and investors' questions on administrative procedures (tax, digital, labour and criminal codes)." },
    techs: ["conv", "dkm"] },
  { id: "uc-06", code: "UC-06", family: "F1", sector: "assurance", fn: "collab", bc: "star-genai",
    title: { fr: "Copilote documentaire collaborateurs", en: "Employee document copilot" },
    client: { fr: "Assurances STAR", en: "Assurances STAR" },
    desc: { fr: "Accès rapide aux documents internes pour réduire les tickets GLPI ; le collaborateur interroge la base de connaissances en langage naturel.", en: "Fast access to internal documents to cut GLPI tickets; employees query the knowledge base in natural language." },
    techs: ["conv", "dkm"] },
  { id: "uc-07", code: "UC-07", family: "F3", sector: "tech", fn: "rh", bc: "wevioo-rh",
    title: { fr: "Scoring & tri automatique de CV", en: "Automated CV scoring & ranking" },
    client: { fr: "Wevioo TN / FR (RH)", en: "Wevioo TN / FR (HR)" },
    desc: { fr: "Évaluation et classement des candidatures (CV) par rapport à un poste donné via matching de compétences et scoring de pertinence.", en: "Assessment and ranking of applications against a given role through skills matching and relevance scoring." },
    techs: ["dam", "sco"] },
  { id: "uc-08", code: "UC-08", family: "F1", sector: "assurance", fn: "marketing", bc: "social",
    title: { fr: "Gestion des réclamations réseaux sociaux", en: "Social-media complaint handling" },
    client: { fr: "Assurance (projet interne)", en: "Insurance (internal project)" },
    desc: { fr: "Traitement automatisé des réclamations et demandes clients issues des réseaux sociaux et divers canaux digitaux.", en: "Automated handling of customer complaints and requests coming from social media and other digital channels." },
    techs: ["conv"] },
  { id: "uc-09", code: "UC-09", family: "F3", sector: "tech", fn: "commercial", bc: "ao",
    title: { fr: "Matching RH pour appels d'offres", en: "Staffing match for tenders" },
    client: { fr: "Wevioo (Commercial)", en: "Wevioo (Sales)" },
    desc: { fr: "Analyse et correspondance des profils RH disponibles avec les exigences des appels d'offres pour identifier les meilleures candidatures.", en: "Analysis and matching of available profiles against tender requirements to identify the best candidates." },
    techs: ["dam", "sco"] },
  { id: "uc-10", code: "UC-10", family: "F3", sector: "finance", fn: "risk", bc: "calf",
    title: { fr: "Analyse dossier d'affacturage", en: "Factoring file analysis" },
    client: { fr: "CA Leasing & Factoring", en: "CA Leasing & Factoring" },
    desc: { fr: "Automatisation complète du dossier affacturage : OCR factures, vérification conformité contractuelle, détection de fraude, scoring risque et recommandation de financement.", en: "End-to-end automation of the factoring file: invoice OCR, contractual compliance checks, fraud detection, risk scoring and funding recommendation." },
    techs: ["ocr", "dam", "sco", "agent"] },
  { id: "uc-11", code: "UC-11", family: "F2", sector: "finance", fn: "compliance", bc: "tlf-kyc",
    title: { fr: "E-KYC documentaire", en: "Document-based e-KYC" },
    client: { fr: "TLF (Finance)", en: "TLF (Finance)" },
    desc: { fr: "Extraction et vérification des données d'identité depuis des documents officiels (formulaire d'onboarding, CNI, passeport, justificatifs) pour les processus de conformité KYC.", en: "Extraction and verification of identity data from official documents (onboarding form, ID card, passport, supporting papers) for KYC compliance." },
    techs: ["ocr"] },
  { id: "uc-12", code: "UC-12", family: "F4", sector: "finance", fn: "risk", bc: "tlf-financial",
    title: { fr: "Analyse des états financiers", en: "Financial statement analysis" },
    client: { fr: "TLF (Finance)", en: "TLF (Finance)" },
    desc: { fr: "Analyse automatisée des états financiers des clients demandant des financements : extraction des indicateurs clés, scoring de risque crédit et génération de synthèse.", en: "Automated analysis of financing applicants' statements: extraction of key indicators, credit-risk scoring and summary generation." },
    techs: ["ocr", "sco", "bi"] },
  { id: "uc-13", code: "UC-13", family: "F2", sector: "finance", fn: "compta", bc: "sodexca",
    title: { fr: "Plateforme de pré-comptabilité", en: "Pre-accounting platform" },
    client: { fr: "SODEXCA (Bénin)", en: "SODEXCA (Benin)" },
    desc: { fr: "Extraction intelligente des données de factures via OCR, classification comptable automatique et recommandation du compte comptable adapté.", en: "Intelligent invoice data extraction through OCR, automatic accounting classification and recommendation of the right ledger account." },
    techs: ["ocr"] },
  { id: "uc-14", code: "UC-14", family: "F3", sector: "tourisme", fn: "innovation", bc: "tdf",
    title: { fr: "Plateforme d'innovation ouverte", en: "Open innovation platform" },
    client: { fr: "TDF (KSA)", en: "TDF (KSA)" },
    desc: { fr: "Collecte conversationnelle, structuration, évaluation et scoring automatique des idées d'innovation soumises par les collaborateurs.", en: "Conversational collection, structuring, assessment and automatic scoring of innovation ideas submitted by contributors." },
    techs: ["conv", "sco", "agent"] },
  { id: "uc-15", code: "UC-15", family: "F1", sector: "industrie", fn: "support", bc: "mitsubishi",
    title: { fr: "Chatbot support technique produits", en: "Product technical-support chatbot" },
    client: { fr: "Mitsubishi Electric Europe", en: "Mitsubishi Electric Europe" },
    desc: { fr: "Chatbot intelligent répondant aux questions techniques sur les appareils électriques, avec mode troubleshooting interactif pour guider la résolution de problèmes.", en: "Intelligent chatbot answering technical questions on electrical equipment, with an interactive troubleshooting mode guiding problem resolution." },
    techs: ["conv", "dkm"] },
  { id: "uc-16", code: "UC-16", family: "F3", sector: "public", fn: "secu", bc: "ancs",
    title: { fr: "Vérification automatique rapports d'audit", en: "Automated audit-report review" },
    client: { fr: "ANCS (Tunisie)", en: "ANCS (Tunisia)" },
    desc: { fr: "Numérisation OCR des rapports d'audit de sécurité informatique, classification automatique des constats, indexation et recherche avancée.", en: "OCR digitisation of IT security audit reports, automatic classification of findings, indexing and advanced search." },
    techs: ["ocr", "dam", "dkm"] }
];

export const SECTOR_VIEW = [
  { key: "public", name: { fr: "Secteur public", en: "Public sector" },
    goal: { fr: "Moderniser les services aux citoyens, réduire les délais, assurer la conformité réglementaire", en: "Modernise citizen services, cut delays, ensure regulatory compliance" },
    items: [
      { t: { fr: "Assistant citoyen pour démarches administratives", en: "Citizen assistant for administrative procedures" }, k: { fr: "Service 24/7, temps d'attente réduit", en: "24/7 service, shorter waiting times" } },
      { t: { fr: "Base Q&R réglementation & procédures", en: "Regulation & procedure Q&A base" }, k: { fr: "Précision des agents renforcée", en: "Higher agent accuracy" } },
      { t: { fr: "Orchestration KYC bout-en-bout", en: "End-to-end KYC orchestration" }, k: { fr: "Des jours ramenés à des heures", en: "Days down to hours" } },
      { t: { fr: "Numérisation rapports & documents officiels", en: "Digitisation of official reports & documents" }, k: { fr: "Saisie manuelle réduite de 80 %", en: "Manual entry down 80%" } },
      { t: { fr: "Génération automatique de rapports personnalisés", en: "Automated tailored reporting" }, k: { fr: "Effort de reporting réduit de 70 %", en: "Reporting effort down 70%" } },
      { t: { fr: "Dashboards budgétaires en langage naturel", en: "Natural-language budget dashboards" }, k: { fr: "BI accessible aux décideurs non techniciens", en: "BI for non-technical decision makers" } }
    ] },
  { key: "banque", name: { fr: "Banque", en: "Banking" },
    goal: { fr: "Accélérer l'onboarding, réduire le risque, automatiser la conformité, servir à grande échelle", en: "Speed up onboarding, reduce risk, automate compliance, serve at scale" },
    items: [
      { t: { fr: "e-KYC documentaire (ID, passeport, revenus)", en: "Document e-KYC (ID, passport, income)" }, k: { fr: "Onboarding réduit de 60 %", en: "Onboarding down 60%" } },
      { t: { fr: "Pipeline KYC orchestré bout-en-bout", en: "End-to-end orchestrated KYC pipeline" }, k: { fr: "Automatisation totale, piste d'audit", en: "Full automation, audit trail" } },
      { t: { fr: "Vérification clauses & conformité contrats", en: "Clause & contract compliance checks" }, k: { fr: "Revue juridique réduite de 60 %", en: "Legal review down 60%" } },
      { t: { fr: "Scoring risque crédit & fournisseurs", en: "Credit & supplier risk scoring" }, k: { fr: "Précision décisionnelle accrue", en: "Sharper decisions" } },
      { t: { fr: "Chatbot service client multilingue", en: "Multilingual customer-service chatbot" }, k: { fr: "Coût centre d'appels réduit de 30 %", en: "Call-centre cost down 30%" } },
      { t: { fr: "Analyse automatisée d'états financiers", en: "Automated financial statement analysis" }, k: { fr: "Capacité analyste multipliée par 3", en: "3× analyst capacity" } }
    ] },
  { key: "assurance", name: { fr: "Assurance", en: "Insurance" },
    goal: { fr: "Accélérer les sinistres, automatiser la souscription, assurer la conformité à moindre coût", en: "Speed up claims, automate underwriting, ensure compliance at lower cost" },
    items: [
      { t: { fr: "Analyse automatisée polices & dossiers sinistres", en: "Automated policy & claim file analysis" }, k: { fr: "Délai de traitement réduit de 55 %", en: "Processing time down 55%" } },
      { t: { fr: "Numérisation & extraction dossiers sinistres", en: "Claim file digitisation & extraction" }, k: { fr: "Traitement manuel réduit de 80 %", en: "Manual processing down 80%" } },
      { t: { fr: "Scoring risque pour souscription", en: "Underwriting risk scoring" }, k: { fr: "Précision de la tarification", en: "More accurate pricing" } },
      { t: { fr: "Agent d'orchestration traitement sinistres", en: "Claims orchestration agent" }, k: { fr: "Automatisation bout-en-bout", en: "End-to-end automation" } },
      { t: { fr: "Génération personnalisée de polices", en: "Tailored policy generation" }, k: { fr: "Coût de rédaction réduit de 60 %", en: "Drafting cost down 60%" } },
      { t: { fr: "Chatbot assistant assuré", en: "Policyholder assistant chatbot" }, k: { fr: "Self-service 24/7, moins d'appels", en: "24/7 self-service, fewer calls" } }
    ] },
  { key: "industrie", name: { fr: "Industrie", en: "Industry" },
    goal: { fr: "Réduire les pannes, optimiser la maintenance, améliorer le contrôle qualité et la traçabilité", en: "Reduce breakdowns, optimise maintenance, improve quality control and traceability" },
    items: [
      { t: { fr: "Agent de surveillance intelligente des capteurs", en: "Intelligent sensor monitoring agent" }, k: { fr: "Maintenance prédictive", en: "Predictive maintenance" } },
      { t: { fr: "Numérisation manuels techniques & formulaires", en: "Technical manual & form digitisation" }, k: { fr: "Délai de gestion documentaire réduit", en: "Faster document handling" } },
      { t: { fr: "Base de connaissances techniques terrain", en: "Field technical knowledge base" }, k: { fr: "Moindre dépendance aux experts", en: "Less expert dependency" } },
      { t: { fr: "Analyse des rapports de contrôle qualité", en: "Quality control report analysis" }, k: { fr: "Taux de détection des défauts accru", en: "Higher defect detection" } },
      { t: { fr: "KPIs de production en langage naturel", en: "Natural-language production KPIs" }, k: { fr: "Visibilité opérationnelle temps réel", en: "Real-time operational visibility" } },
      { t: { fr: "Rapports de maintenance & audit automatisés", en: "Automated maintenance & audit reports" }, k: { fr: "Effort de reporting réduit", en: "Lower reporting effort" } }
    ] },
  { key: "retail", name: { fr: "Retail & services", en: "Retail & services" },
    goal: { fr: "Personnaliser l'expérience client, optimiser les opérations, accélérer le contenu à grande échelle", en: "Personalise customer experience, optimise operations, accelerate content at scale" },
    items: [
      { t: { fr: "Chatbot assistant shopping personnalisé", en: "Personalised shopping assistant chatbot" }, k: { fr: "Taux de conversion accru", en: "Higher conversion" } },
      { t: { fr: "Descriptions produits & contenu marketing", en: "Product descriptions & marketing content" }, k: { fr: "Coût contenu réduit de 60 %", en: "Content cost down 60%" } },
      { t: { fr: "Analyse contrats & conditions fournisseurs", en: "Supplier contract & terms analysis" }, k: { fr: "Risque achats réduit", en: "Lower procurement risk" } },
      { t: { fr: "Scoring qualité fournisseurs & produits", en: "Supplier & product quality scoring" }, k: { fr: "Meilleure décision de sourcing", en: "Better sourcing decisions" } },
      { t: { fr: "Analyse ventes & clients en langage naturel", en: "Natural-language sales & customer analysis" }, k: { fr: "Insights en self-service", en: "Self-service insights" } },
      { t: { fr: "Automatisation commandes & retours", en: "Order & return automation" }, k: { fr: "Coût ops réduit, rapidité accrue", en: "Lower ops cost, faster service" } }
    ] }
];

export const FUNCTION_VIEW = [
  { name: { fr: "Juridique & conformité", en: "Legal & compliance" }, pain: { fr: "Temps de revue contractuelle, surveillance conformité, documentation réglementaire", en: "Contract review time, compliance monitoring, regulatory documentation" },
    items: { fr: ["Vérification automatique des clauses contractuelles", "Analyse conformité des rapports d'audit", "Base de connaissances réglementaires & juridiques", "Génération automatique de contrats & documents juridiques"], en: ["Automated contract clause verification", "Audit report compliance analysis", "Regulatory & legal knowledge base", "Automated contract & legal document generation"] } },
  { name: { fr: "Finance & comptabilité", en: "Finance & accounting" }, pain: { fr: "Saisie manuelle, délais de reporting, goulots d'analyse financière", en: "Manual entry, reporting delays, financial analysis bottlenecks" },
    items: { fr: ["Traitement factures & notes de frais", "Analyse & commentaire d'états financiers", "Génération automatique de rapports de gestion", "Scoring risque fournisseurs & crédit"], en: ["Invoice & expense processing", "Financial statement analysis & commentary", "Automated management reporting", "Supplier & credit risk scoring"] } },
  { name: { fr: "Ressources humaines", en: "Human resources" }, pain: { fr: "Tri à grand volume, complexité onboarding, rétention des connaissances", en: "High-volume screening, onboarding complexity, knowledge retention" },
    items: { fr: ["Scoring automatique CV & classement candidats", "Matching CV / fiche de poste", "Assistant politiques & procédures RH", "Génération de documents d'intégration"], en: ["Automated CV scoring & candidate ranking", "CV / job description matching", "HR policy & procedure assistant", "Onboarding document generation"] } },
  { name: { fr: "Marketing & communication", en: "Marketing & communications" }, pain: { fr: "Volume contenu, personnalisation à grande échelle, reporting campagnes", en: "Content volume, personalisation at scale, campaign reporting" },
    items: { fr: ["Génération contenu réseaux sociaux & marketing", "Rédaction emails & newsletters", "Rapports & présentations clients personnalisés", "Analytique campagne en langage naturel"], en: ["Social & marketing content generation", "Email & newsletter drafting", "Tailored client reports & presentations", "Natural-language campaign analytics"] } },
  { name: { fr: "Achats & procurement", en: "Procurement" }, pain: { fr: "Risque fournisseurs, revue contractuelle, volumes de bons de commande", en: "Supplier risk, contract review, purchase order volumes" },
    items: { fr: ["Scoring risque & qualité fournisseurs", "Analyse & comparaison contrats & conditions", "Automatisation traitement bons de commande", "Numérisation factures & bons de livraison"], en: ["Supplier risk & quality scoring", "Contract & terms analysis and comparison", "Purchase order processing automation", "Invoice & delivery note digitisation"] } },
  { name: { fr: "Opérations & IT", en: "Operations & IT" }, pain: { fr: "Goulots de processus, volume support, surcharge documentaire", en: "Process bottlenecks, support volume, document overload" },
    items: { fr: ["Chatbot support IT niveau 1", "Agents d'orchestration de processus bout-en-bout", "Base de connaissances techniques équipes ops", "Génération SQL & scripts pour non-techniciens"], en: ["Level 1 IT support chatbot", "End-to-end process orchestration agents", "Technical knowledge base for ops teams", "SQL & script generation for non-technical users"] } },
  { name: { fr: "Management & stratégie", en: "Management & strategy" }, pain: { fr: "Manque de visibilité temps réel, délais reporting, silos de données", en: "Lack of real-time visibility, reporting delays, data silos" },
    items: { fr: ["Dashboards dirigeants en langage naturel", "Génération automatique rapports Comex & Codir", "Q&R documents stratégiques & veille marché", "Scoring portefeuille projets & initiatives"], en: ["Natural-language executive dashboards", "Automated board & exec committee reports", "Q&A on strategy documents & market intelligence", "Project & initiative portfolio scoring" ] } }
];

export const PROBLEMS = [
  { icon: "ti-search", tone: "teal", n: "01",
    t: { fr: "Vos collaborateurs perdent des heures", en: "Your teams lose hours" },
    d: { fr: "à chercher l'information dispersée dans des silos documentaires et des systèmes hétérogènes.", en: "searching for information scattered across document silos and heterogeneous systems." } },
  { icon: "ti-file-scan", tone: "orange", n: "02",
    t: { fr: "Vos équipes back-office traitent encore beaucoup de documents scannés", en: "Your back office still handles piles of scanned documents" },
    d: { fr: "Saisie, vérification, traitement de données issues de factures, contrats, formulaires et pièces d'identité : ces tâches mobilisent un temps considérable et exposent à un risque d'erreur élevé.", en: "Entering, checking and processing data from invoices, contracts, forms and ID documents takes considerable time and carries a high error risk." } },
  { icon: "ti-clock-pause", tone: "coral", n: "03",
    t: { fr: "Vos métiers attendent les équipes data", en: "Business teams wait on the data team" },
    d: { fr: "pour obtenir un simple rapport ou une analyse, ce qui ralentit la prise de décision au quotidien.", en: "for a simple report or analysis, slowing down day-to-day decisions." } },
  { icon: "ti-shield-lock", tone: "teal", n: "04",
    t: { fr: "Vos données sensibles ne peuvent pas quitter vos murs", en: "Your sensitive data cannot leave your walls" },
    d: { fr: "ce qui vous prive des services GenAI grand public et impose une souveraineté on-premise ou cloud privé.", en: "which rules out consumer GenAI services and calls for on-premise or private-cloud sovereignty." } },
  { icon: "ti-flask", tone: "orange", n: "05",
    t: { fr: "Vos POC IA isolés coûtent cher et ne passent pas en production", en: "Isolated AI POCs cost a lot and never reach production" },
    d: { fr: "faute de plateforme mutualisée, gouvernée et capable d'industrialiser plusieurs cas d'usage simultanément.", en: "for lack of a shared, governed platform able to industrialise several use cases at once." } },
  { icon: "ti-trending-up", tone: "coral", n: "06",
    t: { fr: "Des coûts API qui dérapent — et vous n'avez pas la main", en: "API costs drift out of control — and you have no say" },
    d: { fr: "Avec la diffusion des usages et la montée des prix unitaires, vos applications adossées à des API GenAI génèrent des charges non maîtrisables — facturation au token, prix à la merci des éditeurs.", en: "As usage spreads and unit prices rise, applications built on GenAI APIs generate unmanageable costs — token billing, prices at the vendors' mercy." } }
];

export const PILLARS = [
  { tone: "teal", t: { fr: "Privée & souveraine", en: "Private & sovereign" }, d: { fr: "On-premise ou cloud privé. Aucune donnée n'est envoyée vers des API tierces.", en: "On-premise or private cloud. No data is sent to third-party APIs." } },
  { tone: "orange", t: { fr: "100 % open source", en: "100% open source" }, d: { fr: "Aucun vendor lock-in, y compris sur les modèles LLM. Liberté totale de choix.", en: "No vendor lock-in, including on LLM models. Complete freedom of choice." } },
  { tone: "coral", t: { fr: "Multi-cas d'usage", en: "Multi use case" }, d: { fr: "Une seule plateforme pour mutualiser plusieurs cas d'usage métiers.", en: "A single platform pooling several business use cases." } },
  { tone: "navy", t: { fr: "Time-to-market rapide", en: "Fast time-to-market" }, d: { fr: "Briques techniques prêtes à l'emploi : premier cas d'usage en 2 mois.", en: "Ready-to-use building blocks: first use case live in 2 months." } }
];

export const PLATFORM = {
  hero: {
    kicker: { fr: "Plateforme Weensight", en: "Weensight platform" },
    title: { fr: "Vos données ne quittent pas vos murs. L'IA vient à vous.", en: "Your data stays within your walls. The AI comes to you." },
    text: { fr: "Weensight met l'IA au service de vos données — pas l'inverse. Une plateforme conçue pour les entreprises qui exigent contrôle, souveraineté et industrialisation.", en: "Weensight puts AI at the service of your data, not the other way round. A platform built for organisations that demand control, sovereignty and industrialisation." }
  },
  robust: [
    { t: { fr: "Plateforme accélératrice", en: "Accelerator platform" }, d: { fr: "Un socle technologique complet pour concevoir, déployer et industrialiser rapidement vos cas d'usage GenAI.", en: "A complete technology foundation to design, deploy and industrialise GenAI use cases quickly." } },
    { t: { fr: "100 % open source", en: "100% open source" }, d: { fr: "Architecture ouverte, modèles LLM open source. Zéro vendor lock-in, contrôle total du code.", en: "Open architecture, open-source LLMs. Zero vendor lock-in, full control of the code." } },
    { t: { fr: "Souveraineté des données", en: "Data sovereignty" }, d: { fr: "Déploiement on-premise ou cloud privé. Vos données restent en local — aucun appel à OpenAI, Anthropic ou autres API externes.", en: "On-premise or private-cloud deployment. Your data stays local — no calls to OpenAI, Anthropic or other external APIs." } },
    { t: { fr: "Gouvernance multi-usage", en: "Multi-use governance" }, d: { fr: "Plusieurs cas d'usage sur une seule plateforme. Mutualisation de l'infrastructure, de la maintenance et de la gouvernance.", en: "Several use cases on one platform. Shared infrastructure, maintenance and governance." } },
    { t: { fr: "Apprentissage contextuel", en: "Contextual learning" }, d: { fr: "Phase d'apprentissage sur vos documents et bases internes (RAG) pour des réponses précises et alignées sur votre métier.", en: "A learning phase on your own documents and databases (RAG) for precise, business-aligned answers." } },
    { t: { fr: "Briques prêtes à l'emploi", en: "Ready-to-use building blocks" }, d: { fr: "Gestion des utilisateurs, logs, traçabilité, monitoring, évaluation, RBAC, audit… industrialisation native.", en: "User management, logs, traceability, monitoring, evaluation, RBAC, audit — industrialisation built in." } }
  ],
  layers: [
    { key: { fr: "Gestion des données", en: "Data management" },
      items: { fr: ["Sources de données : bases, documents, applications, ERP, CRM, BI", "Transformations : préparation, chunking, embedding, indexation", "Base vectorielle et données traitées"], en: ["Data sources: databases, documents, applications, ERP, CRM, BI", "Transformations: preparation, chunking, embedding, indexing", "Vector database and processed data"] } },
    { key: { fr: "Déploiement de modèles", en: "Model deployment" },
      items: { fr: ["Modèle de fondation, modèle affiné, fine-tune optionnel", "Réglage, validation et déploiement de modèles", "Évaluation, testing, RLHF"], en: ["Foundation model, fine-tuned model, optional fine-tuning", "Model tuning, validation and deployment", "Evaluation, testing, RLHF"] } },
    { key: { fr: "Déploiement d'applications", en: "Application deployment" },
      items: { fr: ["Pipeline temps réel : demande, enrichissement, prompt gateway, LLM sécurisée, post-traitement", "Chat & assistance, GEN BI, création de contenu, orchestration métier", "On-premise, cloud privé ou data center privé"], en: ["Real-time pipeline: request, enrichment, prompt gateway, secured LLM, post-processing", "Chat & assistance, Gen BI, content creation, business orchestration", "On-premise, private cloud or private data centre"] } },
    { key: { fr: "Monitoring & validation", en: "Monitoring & validation" },
      items: { fr: ["Surveillance des données, du modèle et des retours utilisateurs", "Labellisation et alertes", "Pistes d'audit et reporting conformité"], en: ["Monitoring of data, model and user feedback", "Labelling and alerts", "Audit trails and compliance reporting"] } }
  ],
  governance: [
    { icon: "ti-cpu", t: { fr: "Sélection & gestion des modèles LLM", en: "LLM selection & management" }, items: { fr: ["Catalogue multi-modèles : open source & propriétaires", "Bascule à chaud entre Llama, Mistral, Qwen, GPT, Claude…", "Comparaison de modèles par cas d'usage"], en: ["Multi-model catalogue: open source & proprietary", "Hot switching between Llama, Mistral, Qwen, GPT, Claude…", "Model comparison per use case"] } },
    { icon: "ti-adjustments", t: { fr: "Configuration fine des paramètres", en: "Fine-grained configuration" }, items: { fr: ["Réglage température, top-p, max tokens, prompts système", "Templates de prompts versionnés et réutilisables", "Paramétrage RAG : chunking, embeddings, retrieval"], en: ["Temperature, top-p, max tokens, system prompts", "Versioned, reusable prompt templates", "RAG settings: chunking, embeddings, retrieval"] } },
    { icon: "ti-users", t: { fr: "Gestion des utilisateurs & RBAC", en: "User management & RBAC" }, items: { fr: ["Contrôle d'accès granulaire par rôle et périmètre", "Intégration IAM / SSO (Auth0, AD, Azure AD)", "Cloisonnement des données par équipe et cas d'usage"], en: ["Granular access control by role and scope", "IAM / SSO integration (Auth0, AD, Azure AD)", "Data partitioning by team and use case"] } },
    { icon: "ti-shield-check", t: { fr: "Sécurité & guardrails", en: "Security & guardrails" }, items: { fr: ["Garde-fous conversationnels & filtrage de contenu", "Chiffrement TLS 1.2+, isolation des données", "Conformité éthique et réglementaire intégrée"], en: ["Conversational guardrails & content filtering", "TLS 1.2+ encryption, data isolation", "Ethical and regulatory compliance built in"] } },
    { icon: "ti-activity", t: { fr: "Monitoring & observabilité", en: "Monitoring & observability" }, items: { fr: ["Supervision temps réel des pipelines & modèles", "Logs détaillés, tracing, métriques de performance", "Alertes sur dérive, latence et consommation"], en: ["Real-time supervision of pipelines & models", "Detailed logs, tracing, performance metrics", "Alerts on drift, latency and consumption"] } },
    { icon: "ti-checkup-list", t: { fr: "Évaluation continue des réponses", en: "Continuous answer evaluation" }, items: { fr: ["Métriques RAG : faithfulness, relevancy, precision/recall", "Feedback utilisateur intégré (RLHF)", "Tests automatisés et benchmarks par cas d'usage"], en: ["RAG metrics: faithfulness, relevancy, precision/recall", "Built-in user feedback (RLHF)", "Automated tests and per-use-case benchmarks"] } },
    { icon: "ti-history", t: { fr: "Pistes d'audit & traçabilité", en: "Audit trails & traceability" }, items: { fr: ["Historisation complète des prompts, réponses & sources", "Journalisation des accès et actions administrateurs", "Export et reporting conformité (RGPD, audits internes)"], en: ["Full history of prompts, answers & sources", "Logging of access and administrator actions", "Compliance export and reporting (GDPR, internal audits)"] } },
    { icon: "ti-plug-connected", t: { fr: "Intégration & connecteurs", en: "Integration & connectors" }, items: { fr: ["Connecteurs natifs : bases, ERP, CRM, stockage, APIs", "Bases vectorielles : Chroma, Qdrant, Milvus, Weaviate", "Chatbot embarquable, APIs ouvertes, déploiement flexible"], en: ["Native connectors: databases, ERP, CRM, storage, APIs", "Vector stores: Chroma, Qdrant, Milvus, Weaviate", "Embeddable chatbot, open APIs, flexible deployment"] } }
  ],
  isnot: { fr: ["Un produit SaaS auquel on s'abonne", "Un chatbot ou une application sur étagère", "Un éditeur qui héberge vos données", "Une plateforme avec verrouillage fournisseur"], en: ["A SaaS product you subscribe to", "An off-the-shelf chatbot or application", "A vendor hosting your data", "A platform with vendor lock-in"] },
  is: { fr: ["Votre environnement IA — déployé dans votre infra", "Une plateforme pour construire & industrialiser les cas d'usage", "Agnostique en modèles — vous choisissez votre LLM", "Code source intégralement livré au client"], en: ["Your own AI environment — deployed in your infrastructure", "A platform to build & industrialise use cases", "Model-agnostic — you choose your LLM", "Source code fully delivered to the client"] },
  engagement: [
    { tone: "navy", t: { fr: "Mode projet + maintenance", en: "Project mode + maintenance" }, d: { fr: "Engagement structuré à périmètre défini. Ni abonnement, ni licence récurrente — vous gardez la maîtrise budgétaire.", en: "A structured engagement with a defined scope. No subscription, no recurring licence — you keep budget control." } },
    { tone: "teal", t: { fr: "Pilote, puis généralisation", en: "Pilot, then roll-out" }, d: { fr: "Démarrage par 1 à 2 cas d'usage prioritaires. Une fois la valeur prouvée, industrialisation progressive sur les autres processus.", en: "Start with one or two priority use cases. Once value is proven, industrialise progressively across other processes." } },
    { tone: "coral", t: { fr: "Co-construction", en: "Co-construction" }, d: { fr: "Vos équipes construisent avec nous, pas une « boîte noire » livrée clé en main. Décisions et arbitrages partagés à chaque étape.", en: "Your teams build with us — not a black box delivered turnkey. Decisions and trade-offs are shared at every step." } },
    { tone: "violet", t: { fr: "Transfert de compétences", en: "Skills transfer" }, d: { fr: "Learning by doing : vos équipes deviennent progressivement autonomes sur la plateforme et les cas d'usage.", en: "Learning by doing: your teams progressively become autonomous on the platform and its use cases." } }
  ],
  benefits: [
    { t: { fr: "Réduction des coûts & des délais", en: "Lower costs & shorter lead times" }, d: { fr: "Optimisation des processus existants, automatisation des tâches chronophages.", en: "Optimisation of existing processes, automation of time-consuming tasks." } },
    { t: { fr: "Efficacité opérationnelle", en: "Operational efficiency" }, d: { fr: "Cycles raccourcis, moins d'allers-retours, moins d'erreurs humaines.", en: "Shorter cycles, fewer round trips, fewer human errors." } },
    { t: { fr: "Innovation & avantage compétitif", en: "Innovation & competitive edge" }, d: { fr: "Nouveaux services à forte valeur, différenciation sur des cas d'usage IA.", en: "New high-value services, differentiation through AI use cases." } },
    { t: { fr: "Expérience client renforcée", en: "Stronger customer experience" }, d: { fr: "Réponses contextualisées 24/7, parcours plus fluides, satisfaction accrue.", en: "Contextual answers 24/7, smoother journeys, higher satisfaction." } },
    { t: { fr: "Expérience collaborateur", en: "Employee experience" }, d: { fr: "Copilote métier, accès instantané au savoir interne, montée en compétence.", en: "A business copilot, instant access to internal knowledge, faster upskilling." } }
  ]
};

export const COMPANY = {
  stats: [
    { n: "460", l: { fr: "Talents", en: "Talents" }, d: { fr: "Partageant une solide culture d'entreprise", en: "Sharing a strong corporate culture" } },
    { n: "28", l: { fr: "Années", en: "Years" }, d: { fr: "De croissance et de développement", en: "Of growth and development" } },
    { n: "06", l: { fr: "Implantations", en: "Locations" }, d: { fr: "Paris, Tunis, Alger, Abidjan, Riyad et Dubaï", en: "Paris, Tunis, Algiers, Abidjan, Riyadh and Dubai" } },
    { n: "500+", l: { fr: "Projets", en: "Projects" }, d: { fr: "Délivrés dans plus de 30 pays de la région EMEA", en: "Delivered in over 30 countries across EMEA" } }
  ],
  offices: [
    { city: "Tunis", lines: ["Technopark El Ghazela", "2088 Tunis", "Tunisie"] },
    { city: "Paris", lines: ["68 avenue des Champs-Élysées", "75008 Paris", "France"] },
    { city: "Riyad", lines: ["6505 Al Sahaba Rd", "Ishbiliyah, Riyadh 13226", "Arabie saoudite"] },
    { city: "Dubaï", lines: ["Jumeirah Lake Towers", "Almas Tower, DMCC, P.O. Box 340505", "Dubaï, Émirats arabes unis"] },
    { city: "Abidjan", lines: ["Cocody II Plateaux, les Vallons 6e tranche", "Lot 1763, Îlot 65 – Bt 1158", "Abidjan 09, Côte d'Ivoire"] }
  ],
  credibility: [
    { t: { fr: "Références internationales", en: "International references" }, d: { fr: "Constructeurs premium et grands comptes européens : Mercedes-Benz, BMW Group, Mitsubishi Electric Europe, Carrefour, Sopra Banking Software.", en: "Premium manufacturers and large European accounts: Mercedes-Benz, BMW Group, Mitsubishi Electric Europe, Carrefour, Sopra Banking Software." } },
    { t: { fr: "Ancrage secteur régulé", en: "Regulated-sector footprint" }, d: { fr: "Banque, financement spécialisé et assurance : e-KYC & LCB-FT, affacturage, analyse crédit, conformité contractuelle.", en: "Banking, specialised finance and insurance: e-KYC & AML-CTF, factoring, credit analysis, contractual compliance." } },
    { t: { fr: "Toute la chaîne IA", en: "The full AI chain" }, d: { fr: "IA générative, machine learning, agentic AI, computer vision (OCR), NLP, data quality — du POC à la production.", en: "Generative AI, machine learning, agentic AI, computer vision (OCR), NLP, data quality — from POC to production." } },
    { t: { fr: "Industrialisation prouvée", en: "Proven industrialisation" }, d: { fr: "MLOps (Kubeflow, CI/CD, monitoring), pipelines cloud Azure & AWS, human-in-the-loop et pistes d'audit.", en: "MLOps (Kubeflow, CI/CD, monitoring), Azure & AWS cloud pipelines, human-in-the-loop and audit trails." } },
    { t: { fr: "Impact métier mesurable", en: "Measurable business impact" }, d: { fr: "Réduction des temps de traitement, automatisation des contrôles, conformité renforcée, décisions accélérées.", en: "Shorter processing times, automated controls, stronger compliance, faster decisions." } },
    { t: { fr: "Souveraineté & sécurité", en: "Sovereignty & security" }, d: { fr: "LLM open source on-premise, plateformes gouvernementales, protection des données personnelles.", en: "Open-source on-premise LLMs, government platforms, personal data protection." } }
  ]
};

export const CLIENT_LOGOS = ["Siemens Energy", "Mercedes-Benz", "BMW Group", "Sopra Banking Software", "Mitsubishi Electric Europe", "Carrefour", "Crédit Agricole L&F", "STAR Assurances"];
