// Business cases — contenu issu de la présentation Weensight (juillet 2026).
const p = (fr, en) => ({ fr, en });

export const BUSINESS_CASES = [
  {
    id: "siemens-classification", client: "Siemens Energy", sector: "industrie", year: "2026", uc: "uc-14",
    title: p("Agent IA pour la classification des composants de turbines à gaz issus de SAP", "AI agent for classifying SAP gas-turbine components"),
    about: p("Siemens Energy est l'un des leaders mondiaux des technologies de l'énergie : turbines, générateurs, réseaux et solutions de transition énergétique déployés dans des centrales du monde entier.", "Siemens Energy is one of the world's leading energy technology companies: turbines, generators, grids and energy-transition solutions deployed in power plants worldwide."),
    tags: ["GenIA", "RAG", "Azure IA", "LLM", "IA agentique"],
    need: p(["Classification automatisée par IA des composants de turbines à gaz SAP : catégorisation des pièces, fiabilisation des données et schémas optimisés."], ["AI-driven classification of SAP gas-turbine components: part categorisation, data reliability and optimised schemas."]),
    solution: p([
      "Ingestion et prétraitement des composants de turbines à gaz depuis SAP (champs MARA).",
      "Cascade de préflight : routage déterministe par taxonomie et vérité terrain (codes RTD/RTA).",
      "Scoring heatmap déterministe des attributs, sans consommation de tokens LLM.",
      "Agent IA sur Palantir Foundry pour la classification autonome des cas résiduels.",
      "Recherche sémantique via Azure AI Search sur la base de connaissances.",
      "Proposition de schémas de données optimisés pour les composants.",
      "Stockage des résultats dans Azure Cosmos DB (3 collections : déterministe, heatmap, agent IA).",
      "Déploiement cloud évolutif sur Microsoft Azure et orchestration agentique de bout en bout."
    ], [
      "Ingestion and pre-processing of gas-turbine components from SAP (MARA fields).",
      "Preflight cascade: deterministic routing by taxonomy and ground truth (RTD/RTA codes).",
      "Deterministic heatmap scoring of attributes, with no LLM token consumption.",
      "AI agent on Palantir Foundry for autonomous classification of residual cases.",
      "Semantic search via Azure AI Search over the knowledge base.",
      "Optimised data schemas proposed for components.",
      "Results stored in Azure Cosmos DB (3 collections: deterministic, heatmap, AI agent).",
      "Scalable cloud deployment on Microsoft Azure with end-to-end agentic orchestration."
    ]),
    benefits: p([
      "Fiabilité & standardisation des données : classification cohérente des composants et schémas optimisés pour SAP.",
      "Efficacité opérationnelle & coûts maîtrisés : réduction de la classification manuelle, IA appelée uniquement sur les cas résiduels, à l'échelle sur Azure."
    ], [
      "Data reliability & standardisation: consistent component classification and SAP-optimised schemas.",
      "Operational efficiency & controlled costs: less manual classification, AI called only on residual cases, at scale on Azure."
    ]),
    process: [
      { t: p("Ingestion SAP", "SAP ingestion"), d: p("Ingestion et prétraitement des composants de turbines à gaz depuis SAP (champs MARA).", "Ingestion and pre-processing of gas-turbine components from SAP (MARA fields).") },
      { t: p("Cascade déterministe", "Deterministic cascade"), d: p("Routage par correspondance taxonomie et vérité terrain — codes RTD/RTA (ex. RTD14).", "Routing by taxonomy and ground-truth matching — RTD/RTA codes (e.g. RTD14).") },
      { t: p("Scoring heatmap", "Heatmap scoring"), d: p("Scoring déterministe des attributs, sans appel IA (zéro token).", "Deterministic attribute scoring with no AI call (zero tokens).") },
      { t: p("Agent IA – Foundry", "AI agent – Foundry"), d: p("Classification autonome des cas résiduels via l'agent Palantir Foundry.", "Autonomous classification of residual cases via the Palantir Foundry agent.") },
      { t: p("Schéma & stockage", "Schema & storage"), d: p("Schéma de données optimisé proposé, puis écriture dans Cosmos DB (3 collections).", "Optimised data schema proposed, then written to Cosmos DB (3 collections).") }
    ],
    synthesis: {
      output: p(["Chaque composant classé avec son code taxonomie", "Schémas de données optimisés proposés par l'IA", "Cas ambigus signalés pour revue humaine", "Résultats stockés dans 3 collections Cosmos DB"], ["Every component classified with its taxonomy code", "Optimised data schemas proposed by AI", "Ambiguous cases flagged for human review", "Results stored in 3 Cosmos DB collections"]),
      value: p(["Réduction massive de la classification manuelle des pièces", "Qualité et cohérence des données SAP améliorées", "Coûts maîtrisés : IA appelée uniquement sur les cas résiduels", "Scalabilité cloud sur Azure pour de grands volumes"], ["Drastically less manual part classification", "Improved SAP data quality and consistency", "Controlled costs: AI called only on residual cases", "Cloud scalability on Azure for large volumes"]),
      ai: p(["Classification autonome : agent IA Palantir Foundry", "Cascade intelligente : déterministe → heatmap → IA", "Recherche sémantique : AI Search sur la base de connaissances", "Suggestion de schémas de structure de données", "Décision agentique : orchestration autonome du pipeline"], ["Autonomous classification: Palantir Foundry AI agent", "Intelligent cascade: deterministic → heatmap → AI", "Semantic search: AI Search over the knowledge base", "Data-structure schema suggestions", "Agentic decisioning: autonomous pipeline orchestration"])
    }
  },
  {
    id: "siemens-signal", client: "Siemens Energy", sector: "industrie", year: "2026", uc: null,
    title: p("Intelligent Signal Mapping — automatiser l'alignement des signaux industriels", "Intelligent Signal Mapping — automating industrial signal alignment"),
    about: p("Siemens Energy est l'un des leaders mondiaux des technologies de l'énergie : turbines, générateurs, réseaux et solutions de transition énergétique déployés dans des centrales du monde entier.", "Siemens Energy is one of the world's leading energy technology companies: turbines, generators, grids and energy-transition solutions deployed in power plants worldwide."),
    tags: ["GenIA", "RAG", "LangGraph", "Embeddings", "IA agentique"],
    need: p([
      "Une centrale électrique génère jusqu'à 100 000 signaux de capteurs (température, pression, courant, vibrations…), mais chaque site ou client les nomme selon ses propres conventions — KKS, RDS-PP ou nommages maison. Une même mesure porte ainsi trois noms différents selon la centrale (GT1_CURR_A, GENERATOR_CURRENT_01, CUR_PHASE_A), obligeant les ingénieurs à un mapping manuel de plusieurs semaines à chaque projet.",
      "Impact : des modèles non réutilisables d'un site à l'autre, et des initiatives de digital twins et de maintenance prédictive bloquées faute de données standardisées."
    ], [
      "A power plant generates up to 100,000 sensor signals (temperature, pressure, current, vibration…), but every site or client names them by its own conventions — KKS, RDS-PP or in-house schemes. The same measurement carries three different names depending on the plant (GT1_CURR_A, GENERATOR_CURRENT_01, CUR_PHASE_A), forcing engineers into weeks of manual mapping on every project.",
      "Impact: models that cannot be reused across sites, and digital-twin and predictive-maintenance initiatives stalled for lack of standardised data."
    ]),
    solution: p([
      "Wevioo a développé une solution s'appuyant sur des agents IA, capable de mapper automatiquement des centaines de milliers de signaux hétérogènes vers une bibliothèque standardisée (Asset Template Library).",
      "Décomposition structurelle KKS / RDS-PP.",
      "Matching exact et partiel par composants.",
      "Analyse sémantique par LLM et recherche vectorielle par embeddings.",
      "Orchestration intelligente via LangGraph.",
      "Monitoring des tokens et coûts LLM, cache des mappings déjà calculés, filtres par unité d'ingénierie (°C, bar, A) garantissant la cohérence physique."
    ], [
      "Wevioo built an AI-agent solution able to automatically map hundreds of thousands of heterogeneous signals onto a standardised Asset Template Library.",
      "Structural KKS / RDS-PP decomposition.",
      "Exact and partial component-level matching.",
      "LLM semantic analysis and vector search through embeddings.",
      "Intelligent orchestration via LangGraph.",
      "LLM token and cost monitoring, caching of computed mappings, engineering-unit filters (°C, bar, A) guaranteeing physical consistency."
    ]),
    benefits: p(["− 80 % de mapping manuel", "× 5 déploiements plus rapides", "Réduction drastique des coûts d'ingénierie", "Modèles analytiques réutilisables cross-sites", "Digital twins et maintenance prédictive scalables"], ["80% less manual mapping", "5× faster deployments", "Drastically lower engineering costs", "Analytics models reusable across sites", "Scalable digital twins and predictive maintenance"]),
    process: [
      { t: p("Parsing", "Parsing"), d: p("Décomposition structurée KKS / RDS-PP en composants hiérarchiques.", "Structured KKS / RDS-PP decomposition into hierarchical components.") },
      { t: p("Matching", "Matching"), d: p("Correspondance exacte et partielle par composants dans l'ATL.", "Exact and partial component matching within the ATL.") },
      { t: p("Sémantique", "Semantics"), d: p("Analyse du sens de la description par LLM.", "LLM analysis of the description's meaning.") },
      { t: p("Vectoriel", "Vector"), d: p("Similarité par embeddings, même sur descriptions divergentes.", "Embedding similarity, even across divergent descriptions.") },
      { t: p("Orchestration", "Orchestration"), d: p("LangGraph choisit dynamiquement la bonne stratégie.", "LangGraph dynamically selects the right strategy.") }
    ],
    synthesis: {
      output: p(["Signaux alignés sur le référentiel standard ATL", "Mapping automatisé à ~80 % (vs 100 % manuel)", "Cohérence physique garantie par les filtres d'unités", "Précision maintenue grâce au workflow adaptatif"], ["Signals aligned to the standard ATL reference", "~80% automated mapping (vs 100% manual)", "Physical consistency guaranteed by unit filters", "Accuracy preserved by the adaptive workflow"]),
      value: p(["Coûts d'ingénierie fortement réduits", "Délai d'intégration divisé par 5 par centrale", "Modèles réutilisables entre tous les sites", "Standardisation, clé de voûte de la transformation digitale"], ["Sharply reduced engineering costs", "Integration time cut fivefold per plant", "Models reusable across every site", "Standardisation as the keystone of digital transformation"]),
      ai: p(["Parsing structurel : KKS / RDS-PP décomposés", "Matching sémantique : score de ressemblance robuste", "Recherche vectorielle : similarité par embeddings", "Décision assistée : criticité et verdict en temps réel", "LangGraph : orchestration adaptative des stratégies"], ["Structural parsing: KKS / RDS-PP decomposed", "Semantic matching: robust similarity scoring", "Vector search: embedding similarity", "Assisted decisioning: criticality and verdict in real time", "LangGraph: adaptive strategy orchestration"])
    }
  },
  {
    id: "sbs", client: "Sopra Banking Software", sector: "finance", year: "2026", uc: "uc-11",
    title: p("Extraction intelligente des contrats", "Intelligent contract extraction"),
    about: p("Sopra Banking Software (SBS) est un éditeur mondial de solutions logicielles pour le secteur bancaire et financier. Filiale du groupe Sopra Steria, SBS équipe des centaines de banques et institutions financières dans le monde en cœur bancaire, financement, paiements et conformité.", "Sopra Banking Software (SBS) is a global software vendor for the banking and financial sector. Part of the Sopra Steria group, SBS equips hundreds of banks and financial institutions worldwide in core banking, lending, payments and compliance."),
    tags: ["Doc Intelligence", "OCR", "NLP", "MLOps"],
    need: p([
      "Pour alimenter son nouveau CRM unifié, SBS devait intégrer 50 000 contrats PDF accumulés sur plusieurs années — d'une hétérogénéité extrême (modèles issus de fusions/acquisitions, typologies licence, maintenance, SaaS, cloud…) et dispersés sur plusieurs dépôts SharePoint multi-pays. La recherche manuelle dans ces milliers de documents était chronophage, non traçable et non scalable.",
      "L'objectif : transformer ce patrimoine en données structurées et fiables, exploitables dans le CRM avec traçabilité complète vers les sources."
    ], [
      "To populate its new unified CRM, SBS had to integrate 50,000 PDF contracts accumulated over years — extremely heterogeneous (templates inherited from mergers and acquisitions; licence, maintenance, SaaS and cloud types) and scattered across several multi-country SharePoint repositories. Manual search through thousands of documents was slow, untraceable and unscalable.",
      "The objective: turn this legacy into structured, reliable data usable in the CRM with full traceability back to the sources."
    ]),
    solution: p([
      "Chargement : ingestion automatisée des 50 000 PDF depuis les dépôts SharePoint multi-pays via connecteurs API, avec normalisation des formats et dé-duplication.",
      "Reconnaissance & normalisation : extraction du texte par OCR (scans et manuscrits) puis structuration sémantique des champs contractuels (client, produit, dates, montants) par LLM, robuste à l'absence de modèle unique.",
      "Matching & enrichissement : croisement avec les référentiels clients/produits via matching intelligent (résolution d'entités, fuzzy matching et scoring de ressemblance) tolérant aux variations issues des fusions/acquisitions.",
      "Contrôle & validation : détection d'anomalies et human-in-the-loop tracé pour la levée de doute sur les cas à faible confiance.",
      "Injection & archivage : alimentation automatique du CRM (payload structuré) avec lien tracé vers le PDF source — le tout orchestré, monitoré et entièrement auditable."
    ], [
      "Loading: automated ingestion of the 50,000 PDFs from multi-country SharePoint repositories through API connectors, with format normalisation and de-duplication.",
      "Recognition & normalisation: OCR text extraction (scans and handwriting) then LLM semantic structuring of contractual fields (client, product, dates, amounts), robust to the absence of a single template.",
      "Matching & enrichment: cross-referencing with client/product master data through intelligent matching (entity resolution, fuzzy matching and similarity scoring) tolerant to merger-and-acquisition variations.",
      "Control & validation: anomaly detection and traced human-in-the-loop review for low-confidence cases.",
      "Injection & archiving: automatic CRM feed (structured payload) with a traced link to the source PDF — all orchestrated, monitored and fully auditable."
    ]),
    benefits: p(["Accès immédiat aux informations contractuelles dans le CRM", "Recherche avancée par client, produit, date, filiale, pays", "Données fiabilisées malgré les fusions et acquisitions", "Temps de préparation commerciale et d'audit fortement réduit", "Traçabilité complète de l'origine des données"], ["Immediate access to contractual information in the CRM", "Advanced search by client, product, date, subsidiary, country", "Reliable data despite mergers and acquisitions", "Sharply reduced sales-preparation and audit time", "Full traceability of data origin"]),
    process: [
      { t: p("Chargement", "Loading"), d: p("Connexion aux multiples dépôts SharePoint multi-pays et ingestion des 50 000 contrats PDF scannés.", "Connection to the multi-country SharePoint repositories and ingestion of 50,000 scanned PDF contracts.") },
      { t: p("Reconnaissance & normalisation", "Recognition & normalisation"), d: p("Extraction des métadonnées par OCR et LLM. Défi : multiplicité des modèles, écriture manuscrite, absence de template unique.", "Metadata extraction by OCR and LLM. Challenge: many templates, handwriting, no single format.") },
      { t: p("Matching & enrichissement", "Matching & enrichment"), d: p("Croisement avec le référentiel clients (score de ressemblance) et le référentiel produits (licence, maintenance, service, SaaS, cloud).", "Cross-referencing with client master data (similarity score) and the product catalogue (licence, maintenance, service, SaaS, cloud).") },
      { t: p("Contrôle & validation", "Control & validation"), d: p("Vérification de cohérence, levée de doute assistée, préparation du payload d'injection.", "Consistency checks, assisted review of doubtful cases, preparation of the injection payload.") },
      { t: p("Injection CRM & archivage", "CRM injection & archiving"), d: p("Alimentation automatique du nouveau CRM, avec lien tracé vers le PDF source et piste d'audit.", "Automatic feed into the new CRM, with a traced link to the source PDF and an audit trail.") }
    ],
    synthesis: {
      output: p(["Fichier d'enrichissement structuré (JSON/XML/Excel) prêt pour le CRM", "Score de confiance par champ (nom client, produit, date, montant)", "Log de matching client/produit avec alerte en cas de faible ressemblance", "Tableau de bord de suivi des 50 000 contrats traités", "Lien tracé entre le contrat PDF et les données injectées"], ["Structured enrichment file (JSON/XML/Excel) ready for the CRM", "Confidence score per field (client name, product, date, amount)", "Client/product matching log with alerts on weak similarity", "Dashboard tracking the 50,000 processed contracts", "Traced link between the PDF contract and the injected data"]),
      value: p(["Accès immédiat aux informations contractuelles dans le CRM", "Recherche avancée et rapide par client, produit, date, filiale, pays, type de contrat", "Unification et fiabilisation des données issues de fusions/acquisitions", "Réduction drastique du temps de préparation commerciale et de réponse aux audits", "Traçabilité complète des origines des données"], ["Immediate access to contractual information in the CRM", "Fast advanced search by client, product, date, subsidiary, country, contract type", "Unified, reliable data across mergers and acquisitions", "Drastically less time spent preparing sales files and answering audits", "Full traceability of data origins"]),
      ai: p(["Vision & OCR : extraction et normalisation sémantique de champs complexes", "Matching intelligent : score de ressemblance robuste sur les raisons sociales", "Orchestration multi-modèles : adaptation à la diversité des typologies", "Contrôle assisté : détection d'anomalies et suggestion de correspondance", "Human-in-the-loop : validation tracée avant injection définitive"], ["Vision & OCR: extraction and semantic normalisation of complex fields", "Intelligent matching: robust similarity scoring on company names", "Multi-model orchestration: adapts to the diversity of product types", "Assisted control: anomaly detection and match suggestions", "Human-in-the-loop: traced validation before final injection"])
    }
  },
  {
    id: "tlf-kyc", client: "Tunisie Leasing & Factoring", sector: "finance", year: "2026", uc: "uc-11",
    title: p("Contrôle automatisé des fiches KYC (LCB-FT)", "Automated KYC file control (AML-CTF)"),
    about: p("Tunisie Leasing & Factoring est un établissement de financement spécialisé leader dans son secteur. Créé en 1984, il a toujours cherché à tirer avantage de la technologie pour améliorer l'expérience de ses clients.", "Tunisie Leasing & Factoring is a leading specialised finance institution. Founded in 1984, it has consistently used technology to improve its customers' experience."),
    tags: ["OCR", "GenIA", "NLP", "LLM", "IA agentique"],
    need: p([
      "TLF souhaite implémenter un applicatif utilisant des agents IA permettant l'automatisation des contrôles des fiches KYC pour s'assurer de leur conformité par rapport aux exigences légales et réglementaires.",
      "TLF dispose de 4 modèles de fiches KYC avec une partie commune à toutes les fiches et quelques spécificités : clients personnes morales, clients personnes physiques, repreneurs personnes morales, repreneurs personnes physiques."
    ], [
      "TLF wanted an application using AI agents to automate KYC file controls and ensure compliance with legal and regulatory requirements.",
      "TLF uses four KYC form templates sharing a common core with a few specifics: corporate clients, individual clients, corporate transferees, individual transferees."
    ]),
    solution: p([
      "Analyse fonctionnelle et conception technique de la plateforme.",
      "L'agent IA réalise l'OCR des fiches KYC scannées et extrait les rubriques champ par champ.",
      "Contrôle de cohérence des valeurs de champs avec les valeurs saisies dans l'ERP leasing ou factoring (indicateur de ressemblance pour les champs texte).",
      "Proposition du niveau de criticité pour les écarts, puis d'une décision de contrôle champ par champ et d'une décision de validation de la fiche.",
      "Développement de l'IA agentique en charge de l'analyse."
    ], [
      "Functional analysis and technical design of the platform.",
      "The AI agent performs OCR on scanned KYC forms and extracts each field.",
      "Consistency checks between field values and the data entered in the leasing or factoring ERP (similarity indicator for text fields).",
      "Proposed criticality level for each discrepancy, then a field-level control decision and an overall validation decision.",
      "Development of the agentic AI performing the analysis."
    ]),
    benefits: p(["Automatiser les travaux de mise à jour de la fiche KYC du client, en vue d'automatiser à terme sa prise en charge et l'alimentation du système dans le cadre d'une entrée en relation et d'une mise à jour full digitale."], ["Automate KYC file updates, paving the way for fully digital onboarding and system feeding."]),
    process: [
      { t: p("Chargement", "Loading"), d: p("Fiche KYC PDF et sélection du client (leasing / factoring).", "KYC PDF form and client selection (leasing / factoring).") },
      { t: p("Reconnaissance", "Recognition"), d: p("Extraction structurée des champs par OCR et IA. Défi : écriture manuscrite.", "Structured field extraction by OCR and AI. Challenge: handwriting.") },
      { t: p("Contrôles", "Controls"), d: p("Comparaison aux données ERP, score de ressemblance, criticité.", "Comparison with ERP data, similarity score, criticality.") },
      { t: p("Validation", "Validation"), d: p("Forçage tracé, commentaires obligatoires, jugement global.", "Traced overrides, mandatory comments, overall verdict.") },
      { t: p("Archivage", "Archiving"), d: p("Stockage sécurisé, piste d'audit, export PDF de l'état.", "Secure storage, audit trail, PDF export of the statement.") }
    ],
    synthesis: {
      output: p(["Écran de validation interactif champ par champ (résultat, criticité, ressemblance)", "Verdict global automatique : fiche KYC conforme ou non conforme", "État PDF imprimable avec utilisateur et horodatage", "Base de données traçable avec piste d'audit et flag de conformité"], ["Interactive field-by-field validation screen (result, criticality, similarity)", "Automatic overall verdict: KYC file compliant or non-compliant", "Printable PDF statement with user and timestamp", "Traceable database with audit trail and compliance flag"]),
      value: p(["Conformité renforcée aux exigences KYC et LCB-FT", "Productivité accrue : forte réduction du temps de contrôle manuel", "Fiabilité homogène quel que soit le modèle de fiche", "Traçabilité complète et piste d'audit consolidée"], ["Stronger KYC and AML-CTF compliance", "Higher productivity: far less manual control time", "Consistent reliability whatever the form template", "Full traceability and a consolidated audit trail"]),
      ai: p(["Vision & OCR : extraction des fiches scannées", "Matching sémantique : score de ressemblance robuste", "Agents IA : orchestration des contrôles", "Décision assistée : criticité et verdict en temps réel", "Human-in-the-loop : forçage tracé des faux écarts"], ["Vision & OCR: extraction from scanned forms", "Semantic matching: robust similarity scoring", "AI agents: orchestration of the controls", "Assisted decisioning: criticality and verdict in real time", "Human-in-the-loop: traced override of false discrepancies"])
    }
  },
  {
    id: "calf", client: "Crédit Agricole Leasing & Factoring", sector: "finance", year: "2026", uc: "uc-10",
    title: p("Agent IA d'analyse de dossiers d'affacturage", "AI agent for factoring file analysis"),
    about: p("Crédit Agricole Leasing & Factoring (CAL&F) est la filiale de financement spécialisé du groupe Crédit Agricole, dédiée au crédit-bail et à l'affacturage. Comptant parmi les leaders français de l'affacturage et du leasing, elle finance entreprises, professionnels et acteurs publics en France et à l'international.", "Crédit Agricole Leasing & Factoring (CAL&F) is the Crédit Agricole group's specialised finance subsidiary for leasing and factoring. Among the French leaders in both, it finances companies, professionals and public bodies in France and abroad."),
    tags: ["GenIA", "RAG", "OCR", "LLM", "IA agentique"],
    need: p([
      "Le traitement des demandes d'affacturage repose sur l'analyse manuelle de documents hétérogènes — factures et contrats en formats multiples (PDF, PNG, WPD) — que les équipes doivent extraire, vérifier et rapprocher un à un. Chaque dossier suppose de contrôler la conformité juridique (mentions légales) et contractuelle (contrat-cadre), puis de vérifier le plafond et l'encours du débiteur avant de statuer sur l'éligibilité et le montant finançable.",
      "Ce processus chronophage ralentit la prise de décision, expose au risque de non-paiement à la cession et complique l'industrialisation des dossiers ainsi que la traçabilité."
    ], [
      "Factoring requests rely on the manual analysis of heterogeneous documents — invoices and contracts in multiple formats (PDF, PNG, WPD) — that teams must extract, check and reconcile one by one. Each file requires legal compliance checks (statutory mentions) and contractual checks (framework agreement), then verification of the debtor's limit and outstanding balance before ruling on eligibility and the financeable amount.",
      "This time-consuming process slows decisions, exposes the lender to non-payment risk at assignment and hampers both industrialisation and traceability."
    ]),
    solution: p([
      "Wevioo a conçu un agent IA d'analyse d'affacturage orchestrant l'ensemble du traitement en cinq étapes : dépôt des documents, lecture OCR, contrôle de conformité, vérification du solde client et décision.",
      "La solution combine Vision & OCR pour extraire les données de factures et contrats multi-formats, des vérifications IA juridiques, contractuelles et de solvabilité, et une décision assistée calculant en temps réel le statut d'éligibilité (accepté, partiel ou refusé) et le montant finançable.",
      "Un chatbot explicatif justifie chaque décision et conserve une piste d'audit complète des contrôles et du raisonnement."
    ], [
      "Wevioo designed an AI factoring-analysis agent orchestrating the whole process in five steps: document upload, OCR reading, compliance control, client balance verification and decision.",
      "The solution combines Vision & OCR to extract data from multi-format invoices and contracts, AI legal, contractual and solvency checks, and assisted decisioning computing the eligibility status (accepted, partial or refused) and the financeable amount in real time.",
      "An explanatory chatbot justifies every decision and keeps a full audit trail of the controls and the reasoning."
    ]),
    benefits: p(["Sécurisation du risque de non-paiement à la cession", "Décision quasi-instantanée vs traitement manuel ralenti", "Scalabilité : industrialisation des dossiers de cession", "Conformité et traçabilité renforcées pour l'auditeur"], ["Non-payment risk secured at assignment", "Near-instant decision versus slow manual processing", "Scalability: industrialised assignment files", "Stronger compliance and traceability for auditors"]),
    process: [
      { t: p("Dépôt", "Upload"), d: p("Upload facture et contrat (PDF, PNG, WPD).", "Invoice and contract upload (PDF, PNG, WPD).") },
      { t: p("Lecture OCR", "OCR reading"), d: p("Extraction structurée des données par OCR et IA. Défi : formats hétérogènes.", "Structured data extraction by OCR and AI. Challenge: heterogeneous formats.") },
      { t: p("Conformité", "Compliance"), d: p("Validation juridique (mentions légales) et contractuelle (contrat-cadre).", "Legal (statutory mentions) and contractual (framework agreement) validation.") },
      { t: p("Solde client", "Client balance"), d: p("Vérification du plafond et de l'encours du débiteur.", "Verification of the debtor's limit and outstanding balance.") },
      { t: p("Décision", "Decision"), d: p("Statut d'éligibilité, montant finançable et justification.", "Eligibility status, financeable amount and justification.") }
    ],
    synthesis: {
      output: p(["Statut d'éligibilité : accepté, partiel ou refusé", "Montant finançable calculé en temps réel", "Chatbot explicatif justifiant chaque décision", "Piste d'audit complète : contrôles et raisonnement tracés"], ["Eligibility status: accepted, partial or refused", "Financeable amount computed in real time", "Explanatory chatbot justifying every decision", "Full audit trail: controls and reasoning traced"]),
      value: p(["Sécurisation du risque de non-paiement à la cession", "Décision quasi-instantanée vs traitement manuel ralenti", "Scalabilité : industrialisation des dossiers de cession", "Conformité et traçabilité renforcées pour l'auditeur"], ["Non-payment risk secured at assignment", "Near-instant decision versus slow manual processing", "Scalability: industrialised assignment files", "Stronger compliance and traceability for auditors"]),
      ai: p(["Vision & OCR : extraction des factures et contrats multi-formats", "Vérifications IA : juridique, contractuel et solvabilité", "Décision assistée : éligibilité et montant finançable en temps réel", "Agents IA : orchestration du pipeline en 5 étapes", "Explicabilité : chatbot qui justifie chaque décision"], ["Vision & OCR: extraction from multi-format invoices and contracts", "AI checks: legal, contractual and solvency", "Assisted decisioning: eligibility and financeable amount in real time", "AI agents: orchestration of the five-step pipeline", "Explainability: a chatbot justifying every decision"])
    }
  },
  {
    id: "wevioo-rh", client: "Wevioo RH", sector: "tech", year: "2025", uc: "uc-07",
    title: p("Plateforme intelligente d'évaluation et de scoring des CV", "Intelligent CV assessment and scoring platform"),
    about: p("L'équipe RH de Wevioo gère un volume important de candidatures lors des campagnes de recrutement (PFE, stages, emplois) en Tunisie et en France.", "Wevioo's HR team handles high application volumes during recruitment campaigns (final-year projects, internships, jobs) in Tunisia and France."),
    tags: ["GenIA", "OCR", "Matching sémantique", "Scoring IA"],
    need: p([
      "L'équipe RH de Wevioo souhaite disposer d'un outil permettant de gérer efficacement le volume important de CV reçus lors des campagnes de recrutement et de limiter la perte de temps sur des tâches à faible valeur ajoutée liées au tri des candidatures.",
      "L'objectif est d'automatiser et de fiabiliser le tri des candidatures grâce à l'IA générative afin d'analyser, évaluer et classer les CV selon leur adéquation avec les critères définis par l'équipe RH."
    ], [
      "Wevioo's HR team wanted a tool to manage the high volume of CVs received during recruitment campaigns and cut the time lost on low-value screening tasks.",
      "The goal: automate and improve CV screening with generative AI, analysing, assessing and ranking CVs against the criteria defined by HR."
    ]),
    solution: p([
      "Centraliser et gérer les fiches de stage (sujet, compétences attendues, durée) avec mise à jour à tout moment.",
      "Importer et consulter les CV via une interface simple et structurée.",
      "Analyser automatiquement les candidatures en comparant les CV aux exigences des fiches afin de mettre en évidence les points forts et les points à surveiller.",
      "Attribuer un score de pertinence et générer un résumé de profil grâce à l'IA générative.",
      "Exporter les résultats d'évaluation (scores et résumés) au format Excel pour faciliter le partage et l'analyse par l'équipe RH."
    ], [
      "Centralise and manage position sheets (topic, expected skills, duration) with updates at any time.",
      "Import and review CVs through a simple, structured interface.",
      "Automatically analyse applications against the position requirements, highlighting strengths and points to watch.",
      "Assign a relevance score and generate a profile summary using generative AI.",
      "Export assessment results (scores and summaries) to Excel for sharing and analysis by HR."
    ]),
    benefits: p(["Gain de temps dans le tri des CV", "Décisions RH facilitées", "Processus de recrutement optimisé", "Classement intelligent des CV"], ["Time saved on CV screening", "Easier HR decisions", "Optimised recruitment process", "Intelligent CV ranking"]),
    process: [
      { t: p("Chargement", "Loading"), d: p("Upload des CV (PDF) et sélection de la fiche de poste (PFE, stage, emploi).", "CV upload (PDF) and selection of the position sheet (final-year project, internship, job).") },
      { t: p("Extraction", "Extraction"), d: p("Parsing structuré des CV par OCR et IA. Défi : formats hétérogènes.", "Structured CV parsing by OCR and AI. Challenge: heterogeneous formats.") },
      { t: p("Analyse", "Analysis"), d: p("Comparaison aux exigences de la fiche, score d'adéquation profil–poste.", "Comparison with the position requirements, profile-to-role fit score.") },
      { t: p("Synthèse", "Summary"), d: p("Génération de résumés : points forts et points de vigilance.", "Summary generation: strengths and points to watch.") }
    ],
    synthesis: {
      output: p(["Interface de consultation structurée des CV importés", "Score de pertinence par candidat et classement automatique", "Résumé synthétique : points forts et points de vigilance", "Export Excel des scores et résumés pour partage RH"], ["Structured review interface for imported CVs", "Relevance score per candidate and automatic ranking", "Concise summary: strengths and points to watch", "Excel export of scores and summaries for HR sharing"]),
      value: p(["Réduction massive du temps de tri manuel des candidatures", "Évaluation objective et homogène sur critères RH définis", "Détection des meilleurs profils, sans perte de talents", "Productivité RH accrue sur les campagnes PFE, stages, emplois"], ["Far less manual screening time", "Objective, consistent assessment against defined HR criteria", "Best profiles detected, no talent lost", "Higher HR productivity across campaigns"]),
      ai: p(["Vision & OCR : extraction des CV en formats variés", "Matching sémantique : score d'adéquation profil–poste robuste", "LLM génératif : résumés clairs et synthétiques", "Décision assistée : score et classement automatiques", "Personnalisation : critères RH adaptables par campagne"], ["Vision & OCR: extraction from varied CV formats", "Semantic matching: robust profile-to-role fit score", "Generative LLM: clear, concise summaries", "Assisted decisioning: automatic scoring and ranking", "Customisation: HR criteria adaptable per campaign"])
    }
  },
  {
    id: "maghrebia", client: "Assurances Maghrebia", sector: "assurance", year: "2025", uc: "uc-01",
    title: p("MAGH_IA : trois cas d'usage GenAI sur une plateforme documentaire", "MAGH_IA: three GenAI use cases on one document platform"),
    about: p("Assurances Maghrebia est une compagnie d'assurance et de réassurance tunisienne de référence, reconnue pour son expertise, son offre de produits innovants et son réseau de proximité à travers la Tunisie.", "Assurances Maghrebia is a leading Tunisian insurance and reinsurance company, recognised for its expertise, innovative products and nationwide network."),
    tags: ["GenIA", "RAG", "NLP", "Llama 3.1"],
    need: p([
      "L'objectif principal de la plateforme est de fournir un accès rapide et sécurisé aux documents et informations, afin d'assister efficacement les collaborateurs et responsables de Maghrebia.",
      "Cas d'usage 1 : les collaborateurs ont besoin d'un accès rapide et sécurisé aux documents pertinents pour accomplir leurs tâches efficacement, sans recherche manuelle dans plusieurs sources.",
      "Cas d'usage 2 : les responsables spécialisés ont besoin de créer rapidement des documents personnalisés (rapports).",
      "Cas d'usage 3 : les responsables juridiques ont besoin de rechercher rapidement des informations critiques et de vérifier les clauses des contrats."
    ], [
      "The platform's main goal is fast, secure access to documents and information to support Maghrebia's employees and managers.",
      "Use case 1: employees need fast, secure access to relevant documents without searching several sources manually.",
      "Use case 2: business managers need to create tailored documents (reports) quickly.",
      "Use case 3: legal managers need to find critical information quickly and verify contract clauses."
    ]),
    solution: p([
      "MAGH_IA est une plateforme GenAI basée sur Llama 3.1, exploitant les modèles de langage via une approche RAG pour créer des applications alimentées par les connaissances, documents et données spécifiques de l'assurance.",
      "La plateforme combine trois fonctions principales : chatbot, génération de documents et vérification des clauses de contrats, répondant aux besoins des différents profils utilisateurs.",
      "Pour les collaborateurs : accès rapide et sécurisé aux documents avec recherche contextuelle avancée.",
      "Pour les responsables spécialisés : automatisation de la création de rapports.",
      "Pour les responsables juridiques : assistant spécialisé capable de vérifier automatiquement les clauses des contrats."
    ], [
      "MAGH_IA is a GenAI platform based on Llama 3.1, using language models through a RAG approach to build applications powered by the insurer's own knowledge, documents and data.",
      "It combines three main functions: chatbot, document generation and contract clause verification, serving different user profiles.",
      "For employees: fast, secure document access with advanced contextual search.",
      "For business managers: automated report creation.",
      "For legal managers: a specialised assistant that automatically checks contract clauses."
    ]),
    benefits: p(["Accès rapide à l'information", "Réponses précises et pertinentes", "Adaptabilité aux besoins", "Gain de temps"], ["Fast access to information", "Precise, relevant answers", "Adaptability to needs", "Time savings"]),
    process: [], synthesis: null
  },
  {
    id: "star-genai", client: "Assurances STAR", sector: "assurance", year: "2024", uc: "uc-06",
    title: p("Solution GenAI : chatbot et private document chat", "GenAI solution: chatbot and private document chat"),
    about: p("Filiale de Groupama, STAR (Société Tunisienne d'Assurances et de Réassurance) est le leader du marché de l'assurance en Tunisie depuis plus de 60 ans et offre une gamme de produits complète et variée.", "A Groupama subsidiary, STAR has led the Tunisian insurance market for over 60 years with a complete and varied product range."),
    tags: ["GenIA", "RAG", "NLP", "LLM"],
    need: p([
      "L'objectif principal de l'application est d'apporter une assistance prompte aux collaborateurs tout en contribuant à la réduction significative du nombre de tickets GLPI.",
      "Les collaborateurs ont besoin d'un accès rapide et facile à l'information pertinente pour résoudre leurs problèmes sans ouvrir de ticket, et de réponses précises fournies par la base de connaissances grâce à l'IA générative, sans attendre une assistance humaine."
    ], [
      "The application's main goal is prompt support for employees while significantly reducing the number of GLPI tickets.",
      "Employees need quick, easy access to relevant information to solve problems without opening a ticket, and precise answers from the knowledge base through generative AI rather than waiting for human support."
    ]),
    solution: p([
      "La plateforme joue à la fois le rôle d'un chatbot et d'un private document chat.",
      "Le chatbot utilise des techniques d'IA, notamment le NLP et l'apprentissage automatique, pour comprendre et interpréter les requêtes des utilisateurs et leur fournir des réponses pertinentes.",
      "Le private document chat est un assistant de recherche qui aide l'utilisateur à trouver des réponses à ses questions sur les documents alimentés dans la plateforme."
    ], [
      "The platform acts both as a chatbot and as a private document chat.",
      "The chatbot uses AI techniques — notably NLP and machine learning — to understand user queries and provide relevant answers.",
      "The private document chat is a search assistant helping users find answers within the documents loaded into the platform."
    ]),
    benefits: p(["Accès rapide à l'information", "Réponses précises et pertinentes", "Adaptabilité aux besoins", "Disponibilité 24/7", "Facilité d'utilisation", "Monitoring"], ["Fast access to information", "Precise, relevant answers", "Adaptability to needs", "24/7 availability", "Ease of use", "Monitoring"]),
    process: [], synthesis: null
  },
  {
    id: "star-clustering", client: "Assurances STAR", sector: "assurance", year: "2024", uc: null,
    title: p("Clustering et ciblage des clients", "Customer clustering and targeting"),
    about: p("Filiale de Groupama, STAR (Société Tunisienne d'Assurances et de Réassurance) est le leader du marché de l'assurance en Tunisie depuis plus de 60 ans.", "A Groupama subsidiary, STAR has led the Tunisian insurance market for over 60 years."),
    tags: ["ML", "MLOps", "Kubeflow", "Python"],
    need: p([
      "Cas d'usage 1 : segmentation des clients dits « dormants », c'est-à-dire ceux qui n'ont pas changé de conditions d'assurance pendant une période déterminée, en groupes définis par leur comportement ou leur historique d'interaction avec la STAR.",
      "Cas d'usage 2 : segmentation des assurés pour en dégager des portraits robots (personas) afin de leur proposer les Next Best Offers, et personnaliser produits et services par segment."
    ], [
      "Use case 1: segmentation of \"dormant\" customers — those who have not changed their insurance terms over a defined period — into groups based on behaviour or interaction history with STAR.",
      "Use case 2: segmentation of policyholders into personas in order to offer Next Best Offers and tailor products and services per segment."
    ]),
    solution: p(["Développement de modèles de clustering et de personas sur la base clients, industrialisés en MLOps (Kubeflow, Python) et intégrés aux campagnes marketing."], ["Development of clustering and persona models on the customer base, industrialised with MLOps (Kubeflow, Python) and fed into marketing campaigns."]),
    benefits: p(["Optimiser la gestion de la relation client", "Amélioration de la rétention", "Personnalisation des offres", "Maximisation de l'efficacité des ressources marketing", "Meilleure compréhension des besoins client"], ["Better customer relationship management", "Improved retention", "Personalised offers", "Marketing resources used more effectively", "Better understanding of customer needs"]),
    process: [], synthesis: null
  },
  {
    id: "mitsubishi", client: "Mitsubishi Electric Europe", sector: "industrie", year: "2025", uc: "uc-15",
    title: p("Chatbot intelligent : assistance technique et troubleshooting interactif", "Intelligent chatbot: technical support and interactive troubleshooting"),
    about: p("Mitsubishi Electric Europe est un acteur majeur de l'industrie électrotechnique, spécialisé dans les solutions et équipements électriques pour l'automatisation industrielle, le bâtiment et les systèmes d'énergie.", "Mitsubishi Electric Europe is a major electrotechnical player specialising in electrical solutions and equipment for industrial automation, buildings and energy systems."),
    tags: ["RAG", "LLM", "Azure Doc Intelligence", "FastAPI"],
    need: p(["Mise en place d'un chatbot intelligent capable de répondre aux questions techniques relatives aux appareils électriques de Mitsubishi Electric Europe. L'objectif est de faciliter l'accès à l'information pour les clients et les équipes internes, tout en réduisant les réclamations et les questions répétitives, notamment en assistance technique."], ["Deployment of an intelligent chatbot able to answer technical questions about Mitsubishi Electric Europe's electrical equipment, making information easier to access for customers and internal teams while reducing complaints and repetitive questions in technical support."]),
    solution: p([
      "Application backend développée avec FastAPI et déployée dans un environnement Azure complet, avec un chat généraliste et un mode troubleshooting interactif.",
      "Pipeline intelligent d'indexation pour traiter les documents techniques complexes (PDF longs, tableaux, schémas, images).",
      "Azure Container Registry & Container Apps pour le packaging et le déploiement, Azure DevOps CI/CD pour l'automatisation.",
      "Azure Blob Storage, Azure Document Intelligence, chunking sémantique, vectorisation puis Azure AI Search.",
      "Azure OpenAI pour la génération des réponses, Cosmos DB pour les métadonnées, Service Bus pour l'orchestration asynchrone.",
      "Application Insights et OpenTelemetry pour le monitoring, la traçabilité et la performance."
    ], [
      "FastAPI backend deployed on a full Azure environment, with a general chat and an interactive troubleshooting mode.",
      "Intelligent indexing pipeline for complex technical documents (long PDFs, tables, diagrams, images).",
      "Azure Container Registry & Container Apps for packaging and deployment, Azure DevOps CI/CD for automation.",
      "Azure Blob Storage, Azure Document Intelligence, semantic chunking, vectorisation then Azure AI Search.",
      "Azure OpenAI for answer generation, Cosmos DB for metadata, Service Bus for asynchronous orchestration.",
      "Application Insights and OpenTelemetry for monitoring, traceability and performance."
    ]),
    benefits: p(["Réduction significative des sollicitations support grâce à un assistant capable de traiter automatiquement les demandes récurrentes et les problèmes techniques courants.", "Accès rapide et autonome à l'information produit, même sur des documents complexes, améliorant l'expérience et la satisfaction client."], ["Significantly fewer support requests thanks to an assistant handling recurring queries and common technical issues automatically.", "Fast, self-service access to product information even in complex documents, improving experience and satisfaction."]),
    process: [], synthesis: null
  },
  {
    id: "mercedes", client: "Mercedes-Benz", sector: "industrie", year: "2024", uc: null,
    title: p("POC solution Data Quality basée sur l'IA", "AI-based Data Quality POC"),
    about: p("Mercedes-Benz est un constructeur automobile mondial de premier plan, reconnu pour son innovation technologique, sa qualité de fabrication et son engagement dans la transformation numérique.", "Mercedes-Benz is a leading global carmaker recognised for technological innovation, manufacturing quality and its commitment to digital transformation."),
    tags: ["Data Quality", "ML", "Collibra", "Python"],
    need: p(["Mercedes souhaite disposer d'un système automatisé pour surveiller en continu la qualité des données issues des logs de ses véhicules. L'objectif est de détecter rapidement les anomalies ou changements structurels, d'identifier les problèmes potentiels, et de permettre aux équipes d'en tirer des conclusions opérationnelles et de créer des cas d'usage métier pertinents basés sur des rapports fiables."], ["Mercedes wanted an automated system to continuously monitor the quality of data from its vehicle logs: detect anomalies or structural changes quickly, identify potential issues, and let teams draw operational conclusions and build business use cases on reliable reports."]),
    solution: p([
      "Collecte des données : intégration avec les API du système de gestion de flotte Mercedes pour extraire les logs des véhicules.",
      "Exploration et préparation des données en Python (analyse exploratoire et transformation).",
      "Surveillance automatisée et détection d'anomalies avec Collibra : monitoring de la qualité, détection basée sur l'IA, notifications en cas de dérive."
    ], [
      "Data collection: integration with Mercedes fleet-management APIs to extract vehicle logs.",
      "Data exploration and preparation in Python (exploratory analysis and transformation).",
      "Automated monitoring and anomaly detection with Collibra: data-quality monitoring, AI-based detection, drift notifications."
    ]),
    benefits: p(["Amélioration proactive de la fiabilité des véhicules grâce à la détection précoce des anomalies dans les données.", "Accélération de la prise de décision métier via des rapports automatisés issus d'une surveillance continue de la qualité des données."], ["Proactive improvement of vehicle reliability through early detection of data anomalies.", "Faster business decisions through automated reports from continuous data-quality monitoring."]),
    process: [], synthesis: null
  },
  {
    id: "bmw", client: "BMW Group", sector: "industrie", year: "2024", uc: null,
    title: p("Recommandation contextuelle de contenu multimédia", "Contextual multimedia content recommendation"),
    about: p("BMW Group, à travers ses marques BMW, Mini et Rolls-Royce, offre une gamme diversifiée d'automobiles et de motocyclettes, incarnant l'excellence, l'innovation et le raffinement dans l'industrie automobile de luxe.", "Through BMW, Mini and Rolls-Royce, BMW Group offers a diverse range of cars and motorcycles embodying excellence, innovation and refinement in the luxury automotive industry."),
    tags: ["ML", "MLOps", "Kubeflow", "AWS"],
    need: p(["Développement d'un système de recommandation contextuelle de contenu multimédia intégrant les technologies d'apprentissage automatique (ML/MLOps) pour répondre aux besoins de BMW Group Allemagne."], ["Development of a contextual multimedia content recommendation system using machine learning and MLOps technologies for BMW Group Germany."]),
    solution: p([
      "Configuration de l'environnement Kubeflow pour l'entraînement du modèle, basé sur Sentence Transformers.",
      "Développement et entraînement du modèle de recommandation contextuel avec Kubeflow.",
      "Développement d'une API pour l'intégration dans les applications BMW Group, conteneurisée avec Docker.",
      "Déploiement sur AWS via Amazon ECS, workflow GitHub pour la gestion des versions.",
      "Automatisation des tests (unitaires, intégration, end-to-end) et du déploiement avec GitHub Actions, pipeline CI/CD.",
      "Surveillance continue du modèle en production et documentation complète pour la maintenance."
    ], [
      "Kubeflow environment set up for model training based on Sentence Transformers.",
      "Development and training of the contextual recommendation model with Kubeflow.",
      "API development for smooth integration into BMW Group applications, containerised with Docker.",
      "Deployment on AWS via Amazon ECS, GitHub workflow for version management.",
      "Automated testing (unit, integration, end-to-end) and deployment with GitHub Actions, CI/CD pipeline.",
      "Continuous monitoring of the production model and full documentation for maintenance."
    ]),
    benefits: p(["Personnalisation avancée : des recommandations hautement personnalisées avec le modèle contextuel, améliorant l'expérience utilisateur.", "Efficacité opérationnelle : automatisation du cycle de vie du modèle avec des technologies ML/MLOps, réduisant les coûts opérationnels et assurant une gestion évolutive sur AWS."], ["Advanced personalisation: highly tailored recommendations from the contextual model, improving user experience.", "Operational efficiency: automated model lifecycle with ML/MLOps, lowering operating costs and ensuring scalable management on AWS."]),
    process: [], synthesis: null
  },
  {
    id: "carrefour", client: "Carrefour", sector: "tech", year: "2024", uc: null,
    title: p("Optimisation des ventes au détail : recommandation de produit", "Retail sales optimisation: product recommendation"),
    about: p("Carrefour est un groupe français du secteur de la grande distribution, pionnier du concept d'hypermarché en 1963.", "Carrefour is a French mass-retail group, pioneer of the hypermarket concept in 1963."),
    tags: ["ML", "Recommandation hybride", "MLOps"],
    need: p(["Développer une solution de recommandation basée sur le machine learning, permettant d'offrir aux clients de Carrefour des suggestions de produits personnalisées, diversifiées et précises, avec pour objectif d'optimiser les ventes et d'améliorer l'efficacité opérationnelle."], ["Build a machine-learning recommendation solution offering Carrefour customers personalised, diverse and accurate product suggestions, to optimise sales and improve operational efficiency."]),
    solution: p([
      "Collecte et prétraitement des données clients et produits.",
      "Choix d'un modèle de recommandation hybride intégrant approches collaboratives et basées sur le contenu.",
      "Entraînement du modèle hybride, optimisant sa capacité à générer des recommandations précises et diversifiées.",
      "Intégration dans l'infrastructure retail existante.",
      "Test et validation des recommandations générées, puis documentation complète pour la maintenance."
    ], [
      "Collection and pre-processing of customer and product data.",
      "Selection of a hybrid recommendation model combining collaborative and content-based approaches.",
      "Training of the hybrid model to generate accurate, diverse recommendations.",
      "Integration into the existing retail infrastructure.",
      "Testing and validation of the recommendations, then full documentation for maintenance."
    ]),
    benefits: p(["Personnalisation avancée : des recommandations adaptées aux besoins spécifiques de chaque client.", "Optimisation des ventes : maximisation des opportunités grâce à des suggestions précises et diversifiées.", "Efficacité opérationnelle : automatisation pour libérer du temps, renforcer la fidélité client et améliorer l'expérience d'achat."], ["Advanced personalisation: recommendations tailored to each customer's needs.", "Sales optimisation: more opportunities captured through accurate, diverse suggestions.", "Operational efficiency: automation frees up time, strengthens loyalty and improves the shopping experience."]),
    process: [], synthesis: null
  },
  {
    id: "ancs", client: "ANCS (Tunisie)", sector: "public", year: "2023", uc: "uc-16",
    title: p("SmartDoc : vérification automatique des rapports d'audit de sécurité informatique", "SmartDoc: automated review of IT security audit reports"),
    about: p("L'ANCS (anciennement ANSI), en tant que coordinateur national, œuvre à développer un climat de confiance des technologies de l'information pour rassurer les utilisateurs, l'État et les investisseurs, et protéger les citoyens et les biens publics et privés contre toute menace cybernétique.", "As national coordinator, ANCS (formerly ANSI) works to build trust in information technology — reassuring users, the state and investors, and protecting citizens and public and private assets against cyber threats."),
    tags: ["Doc Intelligence", "OCR", "NLP", "ML", "MLOps"],
    need: p([
      "Développer un module de numérisation avancé doté de technologies OCR et Computer Vision, capable d'identifier de manière précise les sections clés des rapports.",
      "Ce module doit également être pourvu d'une intelligence et d'une capacité d'apprentissage, lui permettant de classifier automatiquement les constats d'audits par type, tout en distinguant les bonnes pratiques des vulnérabilités."
    ], [
      "Build an advanced digitisation module with OCR and computer vision able to precisely identify the key sections of the reports.",
      "The module also needs intelligence and learning capability to automatically classify audit findings by type while distinguishing good practices from vulnerabilities."
    ]),
    solution: p([
      "Intégration des technologies OCR et Computer Vision pour numériser précisément les rapports.",
      "Développement du module d'extraction des sections des rapports.",
      "Classification automatique par l'IA des constats d'audit par type, avec identification des bonnes pratiques et des vulnérabilités.",
      "Module d'indexation et de recherche avancée, optimisé par un thésaurus pour une recherche tolérante aux fautes de frappe.",
      "Optimisation continue basée sur les retours utilisateurs et les performances du système en production."
    ], [
      "Integration of OCR and computer vision to digitise the reports accurately.",
      "Development of the report-section extraction module.",
      "AI classification of audit findings by type, identifying good practices and vulnerabilities.",
      "Indexing and advanced search module, boosted by a thesaurus for typo-tolerant search.",
      "Continuous optimisation based on user feedback and production performance."
    ]),
    benefits: p(["Optimisation du temps : numérisation rapide et classification automatisée.", "Précision et fiabilité : identification précise des constats d'audit, réduisant les erreurs.", "Accès rapide : indexation complète et recherche avancée pour un accès instantané à l'information."], ["Time optimisation: fast digitisation and automated classification.", "Precision and reliability: accurate identification of audit findings, fewer errors.", "Fast access: full indexing and advanced search for instant access to information."]),
    process: [], synthesis: null
  },
  {
    id: "tlf-financial", client: "Tunisie Leasing & Factoring", sector: "finance", year: "2026", uc: "uc-12",
    title: p("Agent IA pour l'analyse des agrégats et ratios financiers", "AI agent for financial aggregate and ratio analysis"),
    about: p("Tunisie Leasing & Factoring (TLF) est un acteur majeur du financement en Tunisie, spécialisé dans les solutions de leasing et de factoring destinées aux entreprises et particuliers. Forte de plusieurs décennies d'expérience, TLF s'engage dans une dynamique de digitalisation afin d'offrir à ses clients une expérience fluide et moderne.", "Tunisie Leasing & Factoring (TLF) is a major financing player in Tunisia, specialising in leasing and factoring for companies and individuals. With decades of experience, TLF is pursuing digitalisation to offer its clients a smooth, modern experience."),
    tags: ["RAG", "GenIA", "NLP", "LLM", "IA agentique"],
    need: p(["TLF souhaite développer un agent IA capable d'analyser les agrégats et ratios financiers en vue d'automatiser l'analyse financière et d'harmoniser son contenu. Cet agent IA sera l'assistant de l'analyste de crédit, qui aura la possibilité de valider l'analyse proposée."], ["TLF wanted an AI agent able to analyse financial aggregates and ratios in order to automate financial analysis and harmonise its content. The agent assists the credit analyst, who validates the proposed analysis."]),
    solution: p([
      "Définition des agrégats et ratios à analyser.",
      "Choix du LLM le plus approprié dans une logique open source, on-premise.",
      "Développement de l'agent IA dans une logique agile, avec ajustement du choix du LLM.",
      "L'analyse des agrégats et ratios calculés par l'application est automatisée via l'agent IA, qui apporte une analyse poussée dans le cadre des données disponibles tout en assurant l'harmonisation du texte pour l'ensemble des dossiers."
    ], [
      "Definition of the aggregates and ratios to analyse.",
      "Selection of the most suitable LLM within an open-source, on-premise approach.",
      "Agile development of the AI agent, with adjustment of the LLM choice.",
      "Analysis of the aggregates and ratios computed by the application is automated through the AI agent, which delivers in-depth analysis on the available data while harmonising wording across all files."
    ]),
    benefits: p(["Réduction du temps nécessaire à l'analyse crédit", "Augmentation de la productivité par analyste", "Harmonisation du contenu de l'analyse", "Amélioration de la satisfaction client et collaborateur"], ["Shorter credit analysis time", "Higher productivity per analyst", "Harmonised analysis content", "Improved client and employee satisfaction"]),
    process: [], synthesis: null
  },
  {
    id: "sodexca", client: "SODEXCA (Bénin)", sector: "finance", year: "2025", uc: "uc-13",
    title: p("Plateforme de pré-comptabilité", "Pre-accounting platform"),
    about: p("Fondée au Bénin en 2008, SODEXCA est un cabinet qui exerce ses activités dans l'audit et le commissariat aux comptes, l'expertise comptable, le conseil juridique et fiscal, la formation et les études et conseils.", "Founded in Benin in 2008, SODEXCA is a firm active in audit and statutory audit, accounting, legal and tax advisory, training, and studies and consulting."),
    tags: ["OCR", "ML", "MLOps", "NLP"],
    need: p(["Consciente des opportunités offertes par l'IA, SODEXCA souhaite exploiter ces technologies pour moderniser et optimiser la gestion des activités des Centres de Gestion Agréés (CGA). Plus précisément, elle ambitionne d'améliorer la productivité dans les processus de pré-comptabilité et de réduire les risques d'erreurs dans les traitements comptables."], ["Aware of the opportunities AI offers, SODEXCA wanted to modernise and optimise the management of Approved Management Centres (CGA) — specifically to improve pre-accounting productivity and reduce the risk of errors in accounting processing."]),
    solution: p([
      "Extraire les données clés d'une facture via OCR intelligent (fournisseur, montant, date) à partir de documents scannés.",
      "Définir des règles de classification : à partir d'un jeu de factures déjà classifiées, analyser et identifier les règles permettant d'optimiser la précision des recommandations de comptes.",
      "Offrir une recommandation comptable automatique : proposer le compte comptable adapté en fonction des informations extraites et d'un historique de données récupéré depuis SYGMEF, en s'appuyant sur des techniques de machine learning."
    ], [
      "Extract key invoice data through intelligent OCR (supplier, amount, date) from scanned documents.",
      "Define classification rules: from a set of already classified invoices, analyse and identify rules improving the accuracy of account recommendations.",
      "Provide automatic accounting recommendations: propose the right ledger account from the extracted information and historical data retrieved from SYGMEF, using machine learning."
    ]),
    benefits: p(["Renforcer son image d'acteur innovant auprès de ses clients et partenaires.", "Gagner de nouveaux marchés en se démarquant par une offre technologique avancée."], ["Strengthen its image as an innovative player with clients and partners.", "Win new business by standing out with an advanced technology offering."]),
    process: [], synthesis: null
  },
  {
    id: "asin", client: "ASIN (Bénin)", sector: "public", year: "2025", uc: "uc-05",
    title: p("GPT BJ : socle d'assistants conversationnels pour les e-services publics", "GPT BJ: a conversational assistant foundation for public e-services"),
    about: p("L'ASIN est une agence gouvernementale chargée d'assurer la mise en œuvre opérationnelle des programmes et projets entrant dans le cadre des stratégies de développement des services et systèmes d'information sécurisés au Bénin.", "ASIN is a government agency responsible for the operational implementation of programmes and projects under Benin's strategies for secure information services and systems."),
    tags: ["GenIA", "RAG", "NLP", "LLM"],
    need: p([
      "L'objectif principal du projet est d'accélérer le déploiement du prototype GPT BJ, qui permettait de répondre aux questions relatives au code général des impôts, au code du numérique, au code du travail et au code pénal du Bénin.",
      "Le projet consiste à concevoir, développer et intégrer GPT BJ, déployé à la fois sous forme d'un site web autonome et de deux widgets (iframe) embarqués au sein des plateformes d'e-services béninois, afin d'améliorer l'accessibilité et l'accompagnement des usagers."
    ], [
      "The main goal was to accelerate the deployment of the GPT BJ prototype, which answered questions on Benin's general tax code, digital code, labour code and criminal code.",
      "The project covers the design, development and integration of GPT BJ, deployed both as a standalone website and as two embedded widgets (iframes) within Benin's e-service platforms, to improve accessibility and user guidance."
    ]),
    solution: p([
      "Un assistant unique capable de répondre aux questions relatives à trois cas d'usage : support et assistance aux entreprises et investisseurs ; assistance aux démarches administratives et orientation vers les services gouvernementaux ; assistance unique répondant aux questions du citoyen quel que soit le cas d'usage."
    ], [
      "A single assistant covering three use cases: support for companies and investors; help with administrative procedures and routing to government services; and a single assistant answering citizens' questions whatever the topic."
    ]),
    benefits: p(["Disponibilité 24/7", "Réponses précises et pertinentes", "Facilité d'utilisation", "Monitoring"], ["24/7 availability", "Precise, relevant answers", "Ease of use", "Monitoring"]),
    process: [], synthesis: null
  },
  {
    id: "wuri", client: "WURI / APDP (Bénin)", sector: "public", year: "2026", uc: "uc-04",
    title: p("Plateforme e-learning sur la protection des données avec chatbot intelligent", "Data-protection e-learning platform with an intelligent chatbot"),
    about: p("L'APDP est l'autorité au Bénin chargée de la protection des données personnelles et du respect des lois relatives à la vie privée et aux traitements de données. WURI est un programme ouest-africain visant à fournir une identité unique aux populations, afin de faciliter l'accès aux services et de renforcer l'intégration régionale.", "APDP is Benin's authority for personal data protection and compliance with privacy and data-processing laws. WURI is a West African programme providing unique identity to populations, easing access to services and strengthening regional integration."),
    tags: ["GenIA", "RAG", "NLP", "LLM", "Speech-to-speech"],
    need: p([
      "Le projet a pour objectif de mettre à disposition une plateforme e-learning spécialisée dans la protection des données.",
      "Plutôt qu'une simple plateforme e-learning, WURI/APDP souhaite proposer une expérience permettant un accès plus rapide à l'information et un parcours d'apprentissage fluide.",
      "Les utilisateurs ont besoin d'un accompagnement non seulement pour comprendre les principes de protection des données, mais aussi pour naviguer et utiliser la plateforme de manière efficace."
    ], [
      "The project provides an e-learning platform specialised in data protection.",
      "Rather than a plain e-learning platform, WURI/APDP wanted an experience giving faster access to information and a smooth learning path.",
      "Users need guidance both to understand data-protection principles and to navigate and use the platform effectively."
    ]),
    solution: p([
      "Un chatbot intelligent multilingue prenant en charge le français, l'anglais et le fon.",
      "Multimodal : interactions text-to-text et speech-to-speech pour une expérience plus naturelle.",
      "Un module de dashboarding offrant aux administrateurs une visibilité en temps réel sur l'activité des utilisateurs et l'utilisation du chatbot.",
      "Deux cas d'usage : sensibilisation à la protection des données, et assistance à l'utilisation de la plateforme."
    ], [
      "A multilingual intelligent chatbot supporting French, English and Fon.",
      "Multimodal: text-to-text and speech-to-speech interactions for a more natural experience.",
      "A dashboarding module giving administrators real-time visibility on user activity and chatbot usage.",
      "Two use cases: data-protection awareness, and help using the platform."
    ]),
    benefits: p(["Accès rapide à l'information", "Réponses précises et pertinentes", "Orientation simple et claire", "Sensibilisation à la protection des données"], ["Fast access to information", "Precise, relevant answers", "Simple, clear guidance", "Data-protection awareness"]),
    process: [], synthesis: null
  },
  {
    id: "tdf", client: "TDF (Arabie saoudite)", sector: "tourisme", year: "2026", uc: "uc-14",
    title: p("Plateforme d'innovation ouverte IA avec agent autonome (POC)", "AI open-innovation platform with an autonomous agent (POC)"),
    about: p("Créé par décret royal en juin 2020, le Fonds de Développement Touristique (TDF) accompagne l'essor de l'un des secteurs les plus dynamiques du Royaume. Doté d'un capital de 4 milliards de dollars, il a pour mission de faciliter l'accès des investisseurs locaux et internationaux aux opportunités touristiques à fort potentiel.", "Created by royal decree in June 2020, the Tourism Development Fund (TDF) supports the growth of one of the Kingdom's most dynamic sectors. With $4 billion in capital, its mission is to give local and international investors access to high-potential tourism opportunities."),
    tags: ["GenIA", "NLP", "LLM", "IA agentique", "RAG"],
    need: p([
      "L'objectif principal est de moderniser et structurer le processus d'innovation au sein du TDF. Aujourd'hui, les échanges d'idées sont souvent fragmentés entre courriels et appels, ce qui génère des délais et des contraintes de disponibilité.",
      "Les investisseurs ont besoin d'un accompagnement en temps réel pour structurer et renforcer leurs propositions, d'une évaluation plus rapide et plus cohérente, tout en préservant une validation humaine pour assurer la gouvernance et l'alignement stratégique. Un accès 24h/24, un suivi transparent des statuts et des retours clairs sont essentiels."
    ], [
      "The main goal is to modernise and structure TDF's innovation process. Today, idea exchanges are fragmented across emails and calls, creating delays and availability constraints.",
      "Investors need real-time support to structure and strengthen their proposals, plus faster and more consistent assessment, while human validation preserves governance and strategic alignment. Round-the-clock access, transparent status tracking and clear feedback are essential."
    ]),
    solution: p([
      "La plateforme IA d'innovation ouverte V1.0 remplace les échanges fragmentés par une plateforme centralisée, interactive et accessible en permanence. Elle combine l'IA générative, des modèles de scoring structurés et une architecture sécurisée.",
      "Assistant de soumission basé sur l'IA : une interface conversationnelle qui guide les investisseurs pour garantir des soumissions structurées et complètes.",
      "Assistant d'amélioration basé sur l'IA : renforce la clarté, évalue la faisabilité, identifie les axes d'amélioration et aligne les propositions sur les critères d'évaluation prédéfinis.",
      "Moteur d'évaluation piloté par l'IA : applique des objectifs de scoring standardisés et génère des notes automatiques ainsi que des analyses pertinentes.",
      "La validation finale reste assurée par les examinateurs humains du TDF, garantissant gouvernance et alignement stratégique."
    ], [
      "The Open Innovation AI Platform V1.0 replaces fragmented exchanges with a centralised, interactive and always-available platform, combining generative AI, structured scoring models and a secure architecture.",
      "AI submission assistant: a conversational interface guiding investors towards structured, complete submissions.",
      "AI improvement assistant: strengthens clarity, assesses feasibility, identifies areas to improve and aligns proposals with predefined evaluation criteria.",
      "AI-driven evaluation engine: applies standardised scoring objectives and generates automatic scores and relevant analysis.",
      "Final validation remains with TDF's human reviewers, ensuring governance and strategic alignment."
    ]),
    benefits: p(["Dépôt structuré et interactif des idées", "Évaluation intelligente par IA", "Évaluation simplifiée des idées", "Décisions accélérées", "Disponibilité 24h/24 et 7j/7", "Suivi et traçabilité simplifiés"], ["Structured, interactive idea submission", "Intelligent AI assessment", "Simplified idea evaluation", "Faster decisions", "24/7 availability", "Simpler tracking and traceability"]),
    process: [], synthesis: null
  },
  {
    id: "social", client: "Assurance (anonymat préservé)", sector: "assurance", year: "2025", uc: "uc-08",
    title: p("Gestion intelligente et centralisée des interactions issues des réseaux sociaux", "Intelligent, centralised management of social-media interactions"),
    about: p("Client du secteur de l'assurance — anonymat préservé à la demande du client.", "An insurance-sector client — anonymity preserved at the client's request."),
    tags: ["GenIA", "NLP", "Llama 3.1", "Analyse de sentiment"],
    need: p([
      "L'objectif du projet est d'optimiser la gestion des interactions sur les réseaux sociaux grâce à une centralisation et une priorisation intelligente des commentaires.",
      "Il consiste à déployer une solution d'IA capable de collecter les messages multicanaux, d'en analyser l'urgence et le sentiment, puis de générer des réponses contextualisées afin d'améliorer la réactivité, la qualité des échanges et la maîtrise de l'e-réputation."
    ], [
      "The project optimises social-media interaction handling through centralisation and intelligent prioritisation of comments.",
      "It deploys an AI solution collecting multichannel messages, analysing urgency and sentiment, then generating contextual replies to improve responsiveness, exchange quality and reputation control."
    ]),
    solution: p([
      "Plateforme d'IA basée sur Llama 3.1 et des technologies avancées de traitement du langage naturel.",
      "Collecte des statuts et commentaires multicanaux (Facebook, Instagram, X), analyse sémantique et émotionnelle, classement automatique par niveau d'urgence et sentiment.",
      "Quatre capacités clés : centralisation multiréseaux, priorisation intelligente, supervision temps réel via tableau de bord décisionnel, et génération assistée de réponses avec validation humaine avant publication."
    ], [
      "AI platform based on Llama 3.1 and advanced natural language processing.",
      "Collection of multichannel posts and comments (Facebook, Instagram, X), semantic and emotional analysis, automatic classification by urgency and sentiment.",
      "Four key capabilities: multi-network centralisation, intelligent prioritisation, real-time supervision through a decision dashboard, and assisted reply generation with human validation before publishing."
    ]),
    benefits: p(["Disponibilité 24/7", "Centralisation des interactions sociales", "Priorisation intelligente des messages", "Réponses rapides et contextualisées", "Supervision en temps réel"], ["24/7 availability", "Centralised social interactions", "Intelligent message prioritisation", "Fast, contextual replies", "Real-time supervision"]),
    process: [], synthesis: null
  },
  {
    id: "ao", client: "Client anonyme (services)", sector: "tech", year: "2025", uc: "uc-09",
    title: p("Assistant IA pour l'élaboration des appels d'offres", "AI assistant for tender preparation"),
    about: p("Client du secteur des services — anonymat préservé à la demande du client.", "A services-sector client — anonymity preserved at the client's request."),
    tags: ["GenIA", "Matching sémantique", "Scoring IA"],
    need: p(["Les équipes commerciales doivent identifier rapidement les profils adaptés aux appels d'offres, mais les CV sont dispersés et l'analyse des cahiers des charges est manuelle, longue et peu systématique. Le client a besoin d'une solution pour centraliser les CV, extraire automatiquement les profils recherchés et accélérer la sélection des candidats pertinents."], ["Sales teams need to identify suitable profiles for tenders quickly, but CVs are scattered and requirement analysis is manual, slow and inconsistent. The client needed a solution to centralise CVs, automatically extract the required profiles and speed up candidate selection."]),
    solution: p([
      "Plateforme d'intelligence artificielle permettant l'analyse automatisée des cahiers des charges afin d'identifier les compétences clés, les profils recherchés et les niveaux d'expérience attendus.",
      "La solution compare ces besoins aux CV internes centralisés et réalise un matching intelligent basé sur un score de pertinence, facilitant l'identification rapide des candidats les plus adaptés.",
      "Extraction automatique des compétences, identification des rôles recherchés et génération d'un scoring de pertinence avec validation humaine."
    ], [
      "An AI platform automatically analysing tender specifications to identify key skills, required profiles and expected experience levels.",
      "The solution compares these needs with the centralised internal CV base and performs intelligent matching based on a relevance score, quickly surfacing the best-suited candidates.",
      "Automatic skill extraction, identification of required roles and relevance scoring with human validation."
    ]),
    benefits: p(["Gain de temps pour les équipes commerciales", "Sélection rapide et fiable des profils", "Meilleure valorisation des talents internes"], ["Time saved for sales teams", "Fast, reliable profile selection", "Better use of internal talent"]),
    process: [], synthesis: null
  },
  {
    id: "cimf", client: "CIMF (Ministère des Finances, Tunisie)", sector: "public", year: "2021", uc: null,
    title: p("Clustering avancé des déclarations d'impôts", "Advanced clustering of tax returns"),
    about: p("Le Centre Informatique du Ministère des Finances de Tunisie contribue à renforcer l'efficacité opérationnelle, la sécurité des données et la modernisation des processus financiers.", "The IT Centre of Tunisia's Ministry of Finance strengthens operational efficiency, data security and the modernisation of financial processes."),
    tags: ["ML", "MLOps", "Python", "Clustering"],
    need: p(["Implémentation d'une solution basée sur le machine learning pour anticiper et optimiser le contrôle des fausses déclarations fiscales, avec pour objectif la classification efficace des contribuables en groupes homogènes en vue d'une gestion plus ciblée."], ["Implementation of a machine-learning solution to anticipate and optimise the control of false tax returns, classifying taxpayers into homogeneous groups for more targeted management."]),
    solution: p([
      "Collecte et préparation des données fiscales nécessaires.",
      "Choix d'un modèle de clustering adapté et entraînement sur les données préparées.",
      "Intégration de la solution dans le système existant, assurant une interaction fluide avec les processus de contrôle fiscal.",
      "Déploiement opérationnel, puis évaluation continue et procédures de maintenance régulières pour assurer la stabilité du modèle."
    ], [
      "Collection and preparation of the required tax data.",
      "Selection of a suitable clustering model and training on the prepared data.",
      "Integration into the existing system, ensuring smooth interaction with tax control processes.",
      "Operational deployment, then continuous evaluation and regular maintenance to keep the model stable."
    ]),
    benefits: p(["Optimisation des contrôles fiscaux grâce à une classification précise.", "Réduction des erreurs humaines et économie de temps.", "Gestion ciblée des contribuables pour prévenir les fausses déclarations.", "Amélioration de la conformité fiscale et évolutivité de la solution."], ["Optimised tax controls through accurate classification.", "Fewer human errors and time saved.", "Targeted taxpayer management to prevent false returns.", "Better tax compliance and a scalable solution."]),
    process: [], synthesis: null
  },
  {
    id: "ftusa", client: "FTUSA", sector: "assurance", year: "2025", uc: null,
    title: p("Plateforme de prédiction de la valeur marchande d'un véhicule", "Vehicle market-value prediction platform"),
    about: p("La Fédération tunisienne des sociétés d'assurances est une association représentant les 15 entreprises d'assurance et de réassurance en Tunisie. Elle a pour mission principale de faciliter l'échange de travaux, d'expertises et d'informations entre ses membres.", "The Tunisian Federation of Insurance Companies represents the country's 15 insurance and reinsurance companies, with the primary mission of facilitating the exchange of work, expertise and information among its members."),
    tags: ["Scraping", "API", "ML", "MLOps", "Python"],
    need: p([
      "Les compagnies d'assurance en Tunisie sont confrontées à un défi structurel en raison de l'absence d'un référentiel officiel (argus) permettant de déterminer de manière homogène la valeur vénale des véhicules. Cette lacune engendre des écarts significatifs dans l'évaluation des véhicules à assurer : sous-capitalisation des contrats, coûts additionnels liés à l'intervention d'experts, allongement des délais de traitement et divergences d'estimation entre les compagnies.",
      "Dans ce contexte, les assureurs, sous l'impulsion de la FTUSA, envisagent la mise en place d'une plateforme centralisée d'évaluation automatique des véhicules."
    ], [
      "Tunisian insurers face a structural challenge: there is no official reference guide to determine vehicle market value consistently. This gap creates significant valuation discrepancies — under-insured contracts, extra costs from expert appraisals, longer processing times and diverging estimates between companies.",
      "In this context, insurers, driven by FTUSA, planned a centralised platform for automatic vehicle valuation."
    ]),
    solution: p([
      "Construction d'un référentiel automobile via des robots de scraping des véhicules et de leurs caractéristiques techniques (marque, modèle, finition, motorisation, énergie, options).",
      "Développement de robots de scraping des annonces d'occasion : collecte quotidienne depuis une vingtaine de sites marchands, nettoyage et validation des données.",
      "Machine learning : développement et tests d'algorithmes estimant la valeur marchande d'un véhicule selon ses caractéristiques techniques et les prix du marché ; plusieurs modèles comparés avant sélection.",
      "Développement des workflows d'évaluation et mise en place d'API sécurisées permettant aux SI des compagnies d'interroger la plateforme.",
      "Dashboards de suivi de la tendance du marché, de l'utilisation de la plateforme, des robots de scraping et de la performance des serveurs."
    ], [
      "Construction of a vehicle reference base through scraping robots collecting vehicles and their technical characteristics (make, model, trim, engine, fuel, options).",
      "Development of second-hand listing scrapers: daily collection from about twenty marketplaces, with data cleaning and validation.",
      "Machine learning: development and testing of algorithms estimating a vehicle's market value from its technical characteristics and market prices; several models compared before selection.",
      "Development of valuation workflows and secure APIs letting insurers' systems query the platform.",
      "Dashboards tracking market trends, platform usage, scraping robots and server performance."
    ]),
    benefits: p(["Amélioration du chiffre d'affaires en réduisant le manque à gagner lié à la sous-capitalisation.", "Standardisation des méthodes de calcul de la valeur marchande d'un véhicule.", "Rationalisation du processus de souscription : automatisation du calcul de la valeur vénale permettant une évaluation instantanée et fiable."], ["Higher revenue by reducing losses linked to under-insurance.", "Standardised methods for calculating a vehicle's market value.", "Streamlined underwriting: automated market-value calculation enabling instant, reliable valuation."]),
    process: [], synthesis: null
  },
  {
    id: "ennakl", client: "Ennakl Automobiles", sector: "tech", year: "2022", uc: null,
    title: p("Argus Ennakl : application d'estimation de la valeur vénale d'un véhicule", "Argus Ennakl: vehicle market-value estimation application"),
    about: p("Ennakl Automobiles est l'importateur officiel et le concessionnaire en Tunisie des marques Volkswagen, Volkswagen Utilitaires, Audi, Porsche, SEAT, Škoda et Dasweltauto.", "Ennakl Automobiles is the official importer and dealer in Tunisia for Volkswagen, Volkswagen Commercial Vehicles, Audi, Porsche, SEAT, Škoda and Dasweltauto."),
    tags: ["Scraping", "NLP", "ML", "MLOps", "Python"],
    need: p([
      "Ennakl, premier concessionnaire automobile en Tunisie, souhaite établir au plus juste le prix d'une voiture d'occasion dans le cadre de son processus de reprise, en fonction de ses caractéristiques, en collectant et synthétisant les prix sur les différents sites marchands tunisiens.",
      "Ces données sont enrichies par d'autres informations liées au marché : variations du prix du neuf, taxes, qualité, historique de l'entretien, état général de la voiture et historique des transactions pour le même modèle."
    ], [
      "Ennakl, Tunisia's leading car dealer, wanted to price second-hand vehicles accurately for its trade-in process, based on their characteristics, by collecting and consolidating prices from Tunisian marketplaces.",
      "This data is enriched with other market information: new-car price variations, taxes, quality, maintenance history, general condition and transaction history for the same model."
    ]),
    solution: p([
      "Analyse fonctionnelle et conception technique de la plateforme, puis développement de l'Argus Ennakl.",
      "Collecte automatique et quotidienne des annonces de vente de véhicules d'occasion et des prix des voitures neuves à partir de 13 sites marchands tunisiens.",
      "Traitement intelligent (NLP) des données collectées.",
      "Estimation de la valeur vénale du véhicule (prix technique et prix du marché).",
      "Reporting et suivi de l'activité de reprise avec l'outil Knowage."
    ], [
      "Functional analysis and technical design of the platform, then development of Argus Ennakl.",
      "Automatic daily collection of second-hand listings and new-car prices from 13 Tunisian marketplaces.",
      "Intelligent NLP processing of the collected data.",
      "Estimation of the vehicle's market value (technical price and market price).",
      "Reporting and monitoring of trade-in activity with Knowage."
    ]),
    benefits: p(["Obtention rapide et précise de la valeur d'un véhicule sans recherche manuelle ni consultation de sources multiples.", "Réduction des risques d'erreur lors de l'estimation du prix d'un véhicule.", "Suivi de l'activité de reprise de véhicules d'occasion."], ["Fast, accurate vehicle valuation without manual search across multiple sources.", "Lower risk of error when estimating a vehicle's price.", "Monitoring of second-hand trade-in activity."]),
    process: [], synthesis: null
  }
];
