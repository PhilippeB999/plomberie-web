/* ============================================================
   PlomberieQuest — Données du programme DEP 5333 (Plomberie et chauffage)
   Données converties depuis l'app source vers le moteur web (PWA).
   Format moteur: COMPETENCIES[].tiers[].questions[] avec choices[{fr,en,correct}].
   Les questions QCM sont des EXEMPLES à valider par les enseignants du programme.
   ============================================================ */

const PROGRAM = {
  fr: { title: "Plomberie et chauffage", subtitle: "DEP 5333 — 1680 heures — 112 unités" },
  en: { title: "Plumbing and Heating", subtitle: "DVS 5333 — 1680 hours — 112 credits" }
};

function ch(fr, en, correct) { return { fr, en, correct: !!correct }; }

/* Question de type vrai/faux: affirmation à juger. */
function tf(fr, en, isTrue) { return { type: "tf", fr, en, isTrue: !!isTrue }; }

/* Question de type "association de termes": l'élève touche un terme puis
   sa définition correspondante. pairs: tableau de
   { term_fr, term_en, def_fr, def_en }. Toutes les paires doivent être
   associées correctement pour que la question soit considérée réussie. */
function pair(term_fr, term_en, def_fr, def_en) { return { term_fr, term_en, def_fr, def_en }; }
function match(fr, en, pairs) { return { type: "match", fr, en, pairs }; }

/* Question de type "situation complexe" (mise en situation): un court
   scénario réaliste suivi d'un choix multiple basé sur le jugement
   professionnel. Réutilise le même format "choices" qu'un QCM standard. */
function scenario(fr, en, choices) { return { type: "scenario", fr, en, choices }; }

/* Paliers de difficulté d'une quête. Chaque compétence est maintenant
   divisée en 3 paliers progressifs (tiers[]), débloqués l'un après l'autre:
   Débutant -> Intermédiaire -> Avancé. Réussir le palier 1 d'une compétence
   déverrouille la compétence suivante sur la carte; réussir le palier 3
   (Avancé) accorde le badge de maîtrise de la compétence. */
const TIER_META = [
  { level: 1, name_fr: "Débutant", name_en: "Beginner", icon: "🌱" },
  { level: 2, name_fr: "Intermédiaire", name_en: "Intermediate", icon: "⚙️" },
  { level: 3, name_fr: "Avancé", name_en: "Advanced", icon: "🏆" }
];

/* Chaque compétence = une "quête". order = ordre de déblocage. */
const COMPETENCIES = [
 {
  "id": "plomb01",
  "order": 1,
  "title_fr": "Métier, formation et communication en milieu de travail",
  "title_en": "Trade, Training and Workplace Communication",
  "icon": "🧭",
  "tiers": [
   {
    "level": 1,
    "questions": [
     {
      "fr": "Quel diplôme obtient-on à la fin du programme Plomberie et chauffage 5333?",
      "en": "What diploma is awarded at the end of the Plumbing and Heating 5333 program?",
      "choices": [
       {
        "fr": "Un diplôme d'études professionnelles (DEP)",
        "en": "A Diploma of Vocational Studies (DVS)",
        "correct": true
       },
       {
        "fr": "Un diplôme d'études collégiales (DEC)",
        "en": "A Diploma of College Studies (DEC)",
        "correct": false
       },
       {
        "fr": "Une attestation d'études collégiales (AEC)",
        "en": "An Attestation of College Studies (AEC)",
        "correct": false
       },
       {
        "fr": "Un baccalauréat",
        "en": "A Bachelor's degree",
        "correct": false
       }
      ]
     },
     {
      "fr": "Quel métier ce programme prépare-t-il principalement à exercer?",
      "en": "What trade does this program mainly prepare students for?",
      "choices": [
       {
        "fr": "Tuyauteur(euse)-plombier(ère)",
        "en": "Pipefitter-plumber",
        "correct": true
       },
       {
        "fr": "Électricien du bâtiment",
        "en": "Building electrician",
        "correct": false
       },
       {
        "fr": "Charpentier-menuisier",
        "en": "Carpenter",
        "correct": false
       },
       {
        "fr": "Comptable",
        "en": "Accountant",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Le programme Plomberie et chauffage 5333 comporte 18 modules.",
      "en": "The Plumbing and Heating 5333 program has 18 modules.",
      "isTrue": false
     }
    ]
   },
   {
    "level": 2,
    "questions": [
     {
      "fr": "Combien d'heures totalise le programme Plomberie et chauffage 5333?",
      "en": "How many hours does the Plumbing and Heating 5333 program total?",
      "choices": [
       {
        "fr": "1680 heures",
        "en": "1680 hours",
        "correct": true
       },
       {
        "fr": "1800 heures",
        "en": "1800 hours",
        "correct": false
       },
       {
        "fr": "1650 heures",
        "en": "1650 hours",
        "correct": false
       },
       {
        "fr": "900 heures",
        "en": "900 hours",
        "correct": false
       }
      ]
     },
     {
      "fr": "Combien d'unités totalise le programme (1 unité = 15 heures)?",
      "en": "How many credits does the program total (1 credit = 15 hours)?",
      "choices": [
       {
        "fr": "112 unités",
        "en": "112 credits",
        "correct": true
       },
       {
        "fr": "120 unités",
        "en": "120 credits",
        "correct": false
       },
       {
        "fr": "110 unités",
        "en": "110 credits",
        "correct": false
       },
       {
        "fr": "60 unités",
        "en": "60 credits",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Le programme comporte deux spécialités: la plomberie et le chauffage.",
      "en": "The program includes two specialties: plumbing and heating.",
      "isTrue": true
     }
    ]
   },
   {
    "level": 3,
    "questions": [
     {
      "fr": "Le module « Installation de réseaux d'évacuation » dure 120 heures. Combien d'unités cela représente-t-il?",
      "en": "The 'Drainage System Installation' module lasts 120 hours. How many credits does that represent?",
      "choices": [
       {
        "fr": "8 unités",
        "en": "8 credits",
        "correct": true
       },
       {
        "fr": "6 unités",
        "en": "6 credits",
        "correct": false
       },
       {
        "fr": "7 unités",
        "en": "7 credits",
        "correct": false
       },
       {
        "fr": "5 unités",
        "en": "5 credits",
        "correct": false
       }
      ]
     },
     {
      "fr": "Quelle proportion des heures du programme est consacrée aux compétences directement liées aux tâches du métier?",
      "en": "What proportion of the program's hours is dedicated to competencies directly tied to trade tasks?",
      "choices": [
       {
        "fr": "1050 heures sur 1680, le reste étant des compétences générales",
        "en": "1050 out of 1680 hours, with the rest being general competencies",
        "correct": true
       },
       {
        "fr": "Toutes les heures sans exception",
        "en": "All hours without exception",
        "correct": false
       },
       {
        "fr": "Moins de 100 heures",
        "en": "Less than 100 hours",
        "correct": false
       },
       {
        "fr": "Aucune heure spécifique n'est prévue",
        "en": "No specific hours are allocated",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Le tuyauteur-plombier effectue des travaux d'installation, de modification, de réparation et d'entretien de réseaux de plomberie et de chauffage.",
      "en": "A pipefitter-plumber performs installation, modification, repair and maintenance work on plumbing and heating systems.",
      "isTrue": true
     }
    ]
   }
  ]
 },
 {
  "id": "plomb02",
  "order": 2,
  "title_fr": "Santé et sécurité sur les chantiers de construction",
  "title_en": "Construction Site Health and Safety",
  "icon": "🦺",
  "tiers": [
   {
    "level": 1,
    "questions": [
     {
      "fr": "Quel équipement de protection individuelle (EPI) est essentiel sur un chantier de construction?",
      "en": "What personal protective equipment (PPE) is essential on a construction site?",
      "choices": [
       {
        "fr": "Le casque, les lunettes de sécurité et les bottes à cap d'acier",
        "en": "A hard hat, safety glasses and steel-toe boots",
        "correct": true
       },
       {
        "fr": "Aucun équipement n'est requis",
        "en": "No equipment is required",
        "correct": false
       },
       {
        "fr": "Uniquement des gants de jardinage",
        "en": "Only gardening gloves",
        "correct": false
       },
       {
        "fr": "Uniquement une casquette",
        "en": "Only a cap",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi la carte ASP Construction est-elle obligatoire pour travailler sur un chantier?",
      "en": "Why is the ASP Construction card mandatory to work on a job site?",
      "choices": [
       {
        "fr": "Elle atteste d'une formation de base en santé et sécurité",
        "en": "It attests to basic health and safety training",
        "correct": true
       },
       {
        "fr": "Cela dépend uniquement des préférences esthétiques du client",
        "en": "It only depends on the client's aesthetic preferences",
        "correct": false
       },
       {
        "fr": "Elle sert uniquement de carte d'identité",
        "en": "It's only used as an ID card",
        "correct": false
       },
       {
        "fr": "Elle n'est requise que pour les grands chantiers industriels",
        "en": "It's only required on large industrial sites",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "La signalisation de sécurité sur un chantier informe des dangers présents.",
      "en": "Safety signage on a job site informs workers of present hazards.",
      "isTrue": true
     }
    ]
   },
   {
    "level": 2,
    "questions": [
     {
      "fr": "Pourquoi porter un masque lors de travaux générant de la poussière ou des vapeurs?",
      "en": "Why wear a mask during work that generates dust or fumes?",
      "choices": [
       {
        "fr": "Pour éviter d'inhaler des particules ou vapeurs potentiellement nocives",
        "en": "To avoid inhaling potentially harmful particles or fumes",
        "correct": true
       },
       {
        "fr": "Cela ne concerne que les très gros chantiers commerciaux",
        "en": "It only concerns very large commercial job sites",
        "correct": false
       },
       {
        "fr": "Pour respecter une habitude sans lien avec la sécurité",
        "en": "To follow a habit unrelated to safety",
        "correct": false
       },
       {
        "fr": "Le risque respiratoire ne concerne que les chantiers extérieurs",
        "en": "Respiratory risk only concerns outdoor job sites",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi respecter les procédures de cadenassage avant d'intervenir sur un système sous pression?",
      "en": "Why follow lockout procedures before working on a pressurized system?",
      "choices": [
       {
        "fr": "Pour éviter une libération accidentelle de pression dangereuse",
        "en": "To avoid an accidental release of dangerous pressure",
        "correct": true
       },
       {
        "fr": "C'est surtout une question de rapidité d'exécution, pas de sécurité",
        "en": "It's mainly a matter of speed, not safety",
        "correct": false
       },
       {
        "fr": "Uniquement pour suivre une préférence personnelle",
        "en": "Only to follow a personal preference",
        "correct": false
       },
       {
        "fr": "Le risque ne concerne que les systèmes à très haute pression industrielle",
        "en": "The risk only concerns very high-pressure industrial systems",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Un espace clos (comme certains vides sanitaires) peut présenter des risques particuliers nécessitant des précautions spéciales.",
      "en": "A confined space (like some crawl spaces) can present particular risks requiring special precautions.",
      "isTrue": true
     }
    ]
   },
   {
    "level": 3,
    "questions": [
     {
      "fr": "Un collègue ne porte pas son équipement de protection sur le chantier. Quelle est la bonne pratique?",
      "en": "A coworker isn't wearing their protective equipment on the job site. What is the correct practice?",
      "choices": [
       {
        "fr": "L'aviser du danger et, si nécessaire, en informer le superviseur",
        "en": "Warning them of the danger and, if necessary, informing the supervisor",
        "correct": true
       },
       {
        "fr": "Ignorer la situation",
        "en": "Ignoring the situation",
        "correct": false
       },
       {
        "fr": "Se moquer de lui",
        "en": "Making fun of them",
        "correct": false
       },
       {
        "fr": "Faire pareil pour ne pas se démarquer",
        "en": "Doing the same to avoid standing out",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi la santé et sécurité est-elle une compétence transversale essentielle en plomberie et chauffage?",
      "en": "Why is health and safety an essential transferable skill in plumbing and heating?",
      "choices": [
       {
        "fr": "Le métier implique des risques variés (chantiers, gaz, systèmes sous pression) à gérer en tout temps",
        "en": "The trade involves varied risks (job sites, gas, pressurized systems) to manage at all times",
        "correct": true
       },
       {
        "fr": "Cela concerne surtout l'apparence finale du travail",
        "en": "It mostly concerns the final appearance of the work",
        "correct": false
       },
       {
        "fr": "Les risques ne concernent que les gros chantiers industriels",
        "en": "The risks only concern large industrial sites",
        "correct": false
       },
       {
        "fr": "Pour respecter une exigence purement esthétique",
        "en": "To meet a purely aesthetic requirement",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "La culture de sécurité sur un chantier repose uniquement sur le superviseur, jamais sur les autres travailleurs.",
      "en": "A job site's safety culture relies solely on the supervisor, never on the other workers.",
      "isTrue": false
     }
    ]
   }
  ]
 },
 {
  "id": "plomb03",
  "order": 3,
  "title_fr": "Manutention d'équipements, de matériaux et de produits",
  "title_en": "Handling Equipment, Materials and Products",
  "icon": "📦",
  "tiers": [
   {
    "level": 1,
    "questions": [
     {
      "fr": "Pourquoi utiliser une technique de levage appropriée pour déplacer des matériaux lourds?",
      "en": "Why use proper lifting technique to move heavy materials?",
      "choices": [
       {
        "fr": "Pour éviter les blessures musculo-squelettiques",
        "en": "To avoid musculoskeletal injuries",
        "correct": true
       },
       {
        "fr": "Cela sert uniquement à respecter une habitude de l'entreprise",
        "en": "It's only meant to follow a company habit",
        "correct": false
       },
       {
        "fr": "Pour réduire le prix facturé au client",
        "en": "To reduce the price billed to the client",
        "correct": false
       },
       {
        "fr": "Les techniques de levage n'ont aucun effet",
        "en": "Lifting techniques have no effect",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi entreposer les matériaux de plomberie de façon organisée sur un chantier?",
      "en": "Why store plumbing materials in an organized way on a job site?",
      "choices": [
       {
        "fr": "Pour retrouver rapidement les matériaux et éviter les dommages",
        "en": "To quickly find materials and avoid damage",
        "correct": true
       },
       {
        "fr": "Cela ne concerne que les installations les plus anciennes",
        "en": "It only concerns the oldest installations",
        "correct": false
       },
       {
        "fr": "Pour respecter une exigence esthétique uniquement",
        "en": "To meet an aesthetic requirement only",
        "correct": false
       },
       {
        "fr": "L'organisation n'influence que l'apparence du chantier, jamais l'efficacité",
        "en": "Organization only affects how the site looks, never its efficiency",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Certains matériaux (comme les tuyaux en PVC) doivent être protégés du soleil et du gel lors de l'entreposage.",
      "en": "Some materials (like PVC pipes) must be protected from sun and frost during storage.",
      "isTrue": true
     }
    ]
   },
   {
    "level": 2,
    "questions": [
     {
      "fr": "Pourquoi vérifier la capacité de charge d'un équipement de levage avant de l'utiliser?",
      "en": "Why check a lifting device's load capacity before using it?",
      "choices": [
       {
        "fr": "Pour éviter une surcharge dangereuse",
        "en": "To avoid a dangerous overload",
        "correct": true
       },
       {
        "fr": "C'est une exigence propre à certains fabricants seulement",
        "en": "It's a requirement specific to certain manufacturers only",
        "correct": false
       },
       {
        "fr": "Pour respecter une habitude sans lien avec la sécurité",
        "en": "To follow a habit unrelated to safety",
        "correct": false
       },
       {
        "fr": "La capacité de charge n'existe pas vraiment",
        "en": "Load capacity doesn't really exist",
        "correct": false
       }
      ]
     },
     {
      "fr": "Que doit-on vérifier avant de transporter des équipements fragiles ou sensibles (ex. appareils de chauffage)?",
      "en": "What should be checked before transporting fragile or sensitive equipment (e.g. heating appliances)?",
      "choices": [
       {
        "fr": "Leur fixation sécuritaire et leur protection contre les chocs",
        "en": "Their secure fastening and protection against impacts",
        "correct": true
       },
       {
        "fr": "Uniquement le prix d'achat de la pièce",
        "en": "Only the part's purchase price",
        "correct": false
       },
       {
        "fr": "Uniquement la marque de l'équipement",
        "en": "Only the equipment's brand",
        "correct": false
       },
       {
        "fr": "Uniquement la météo du jour",
        "en": "Only the day's weather",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Une bonne planification de la manutention n'a aucun effet sur les risques de dommages, seulement sur la rapidité du travail.",
      "en": "Good handling planning has no effect on the risk of damage, only on how quickly the work gets done.",
      "isTrue": false
     }
    ]
   },
   {
    "level": 3,
    "questions": [
     {
      "fr": "Un matériau livré sur le chantier est plus lourd que prévu selon une nouvelle estimation. Quelle est la bonne pratique?",
      "en": "A material delivered to the job site is heavier than expected according to a new estimate. What is the correct practice?",
      "choices": [
       {
        "fr": "Vérifier la capacité de l'équipement disponible et ajuster le plan de manutention avant de continuer",
        "en": "Checking the available equipment's capacity and adjusting the handling plan before continuing",
        "correct": true
       },
       {
        "fr": "Manipuler le matériau quand même sans vérification",
        "en": "Handling the material anyway with no check",
        "correct": false
       },
       {
        "fr": "Ignorer le nouveau poids estimé",
        "en": "Ignoring the new estimated weight",
        "correct": false
       },
       {
        "fr": "Abandonner le projet",
        "en": "Abandoning the project",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi une bonne manutention des équipements et matériaux contribue-t-elle à l'efficacité globale d'un chantier?",
      "en": "Why does good equipment and material handling contribute to a job site's overall efficiency?",
      "choices": [
       {
        "fr": "Elle évite les délais liés aux dommages, pertes ou blessures",
        "en": "It avoids delays caused by damage, losses or injuries",
        "correct": true
       },
       {
        "fr": "Cela dépend uniquement des préférences esthétiques du client",
        "en": "It only depends on the client's aesthetic preferences",
        "correct": false
       },
       {
        "fr": "La manutention ne ralentit jamais un chantier",
        "en": "Handling never slows down a job site",
        "correct": false
       },
       {
        "fr": "Pour compliquer inutilement le travail",
        "en": "To needlessly complicate the work",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "La maîtrise des techniques de manutention élimine complètement tout risque de blessure sur un chantier.",
      "en": "Mastering handling techniques completely eliminates all risk of injury on a job site.",
      "isTrue": false
     }
    ]
   }
  ]
 },
 {
  "id": "plomb04",
  "order": 4,
  "title_fr": "Systèmes de mécanique de tuyauterie",
  "title_en": "Piping Mechanical Systems",
  "icon": "🔧",
  "tiers": [
   {
    "level": 1,
    "questions": [
     {
      "fr": "Quel outil sert à couper un tuyau de cuivre proprement?",
      "en": "What tool is used to cleanly cut a copper pipe?",
      "choices": [
       {
        "fr": "Un coupe-tube",
        "en": "A tube cutter",
        "correct": true
       },
       {
        "fr": "Un marteau",
        "en": "A hammer",
        "correct": false
       },
       {
        "fr": "Une pince",
        "en": "Pliers",
        "correct": false
       },
       {
        "fr": "Un tournevis",
        "en": "A screwdriver",
        "correct": false
       }
      ]
     },
     {
      "fr": "Quel matériau de tuyauterie est couramment utilisé pour l'alimentation en eau résidentielle?",
      "en": "What piping material is commonly used for residential water supply?",
      "choices": [
       {
        "fr": "Le cuivre ou le PEX",
        "en": "Copper or PEX",
        "correct": true
       },
       {
        "fr": "Le carton",
        "en": "Cardboard",
        "correct": false
       },
       {
        "fr": "Le tissu",
        "en": "Fabric",
        "correct": false
       },
       {
        "fr": "Le bois",
        "en": "Wood",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Un raccord mal serré peut causer une fuite dans un système de tuyauterie.",
      "en": "A poorly tightened fitting can cause a leak in a piping system.",
      "isTrue": true
     }
    ]
   },
   {
    "level": 2,
    "questions": [
     {
      "fr": "Pourquoi respecter la pente recommandée pour un tuyau d'évacuation?",
      "en": "Why follow the recommended slope for a drain pipe?",
      "choices": [
       {
        "fr": "Pour assurer un bon écoulement des eaux usées par gravité",
        "en": "To ensure proper wastewater flow by gravity",
        "correct": true
       },
       {
        "fr": "Cela ne concerne que les très gros chantiers commerciaux",
        "en": "It only concerns very large commercial job sites",
        "correct": false
       },
       {
        "fr": "Pour respecter une préférence esthétique du client",
        "en": "To meet a client's aesthetic preference",
        "correct": false
       },
       {
        "fr": "La pente n'affecte que le bruit de l'écoulement, jamais son efficacité",
        "en": "Slope only affects the flow's noise, never its efficiency",
        "correct": false
       }
      ]
     },
     {
      "fr": "Quel type d'assemblage est couramment utilisé pour joindre des tuyaux de cuivre?",
      "en": "What type of joint is commonly used to connect copper pipes?",
      "choices": [
       {
        "fr": "Le soudage (brasage) ou les raccords à compression",
        "en": "Soldering (brazing) or compression fittings",
        "correct": true
       },
       {
        "fr": "Le collage avec du ruban adhésif",
        "en": "Gluing with tape",
        "correct": false
       },
       {
        "fr": "Le collage à froid remplace toujours le soudage ou le brasage",
        "en": "Cold gluing always replaces soldering or brazing",
        "correct": false
       },
       {
        "fr": "Le nouage avec de la corde",
        "en": "Tying with rope",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "La dilatation thermique des tuyaux doit être prise en compte lors de la conception d'un système de tuyauterie.",
      "en": "Thermal expansion of pipes must be considered when designing a piping system.",
      "isTrue": true
     }
    ]
   },
   {
    "level": 3,
    "questions": [
     {
      "fr": "Un système de tuyauterie complexe combine plusieurs matériaux différents. Quelle est une bonne pratique?",
      "en": "A complex piping system combines several different materials. What is a good practice?",
      "choices": [
       {
        "fr": "Utiliser des raccords de transition appropriés pour éviter la corrosion galvanique",
        "en": "Using appropriate transition fittings to avoid galvanic corrosion",
        "correct": true
       },
       {
        "fr": "Connecter les matériaux directement sans précaution",
        "en": "Connecting the materials directly with no precaution",
        "correct": false
       },
       {
        "fr": "Ignorer les incompatibilités entre matériaux",
        "en": "Ignoring incompatibilities between materials",
        "correct": false
       },
       {
        "fr": "Utiliser un seul type de raccord pour tout",
        "en": "Using a single type of fitting for everything",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi la compréhension des systèmes de mécanique de tuyauterie est-elle fondamentale pour tout le reste du programme?",
      "en": "Why is understanding piping mechanical systems fundamental to the rest of the program?",
      "choices": [
       {
        "fr": "La plupart des installations ultérieures (chauffage, plomberie) reposent sur ces principes de base",
        "en": "Most later installations (heating, plumbing) rely on these basic principles",
        "correct": true
       },
       {
        "fr": "Cela ne s'applique qu'aux très grands projets",
        "en": "It only applies to very large projects",
        "correct": false
       },
       {
        "fr": "C'est la seule compétence utile du programme",
        "en": "It is the only useful skill in the program",
        "correct": false
       },
       {
        "fr": "Elle ne nécessite aucune compétence acquise précédemment",
        "en": "It requires no previously acquired skills",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "La maîtrise des systèmes de mécanique de tuyauterie n'est utile que pour l'examen final, sans lien avec les autres modules du programme.",
      "en": "Mastering piping mechanical systems is only useful for the final exam, with no connection to the program's other modules.",
      "isTrue": false
     }
    ]
   }
  ]
 },
 {
  "id": "plomb05",
  "order": 5,
  "title_fr": "Installation de composants électriques",
  "title_en": "Electrical Component Installation",
  "icon": "🔌",
  "tiers": [
   {
    "level": 1,
    "questions": [
     {
      "fr": "Pourquoi un tuyauteur-plombier doit-il connaître des notions électriques de base?",
      "en": "Why must a pipefitter-plumber know basic electrical concepts?",
      "choices": [
       {
        "fr": "Certains équipements de chauffage et de plomberie nécessitent des connexions électriques",
        "en": "Some heating and plumbing equipment requires electrical connections",
        "correct": true
       },
       {
        "fr": "Uniquement pour obtenir une carte de compétence supplémentaire",
        "en": "Only to obtain an extra competency card",
        "correct": false
       },
       {
        "fr": "Les notions électriques ne servent qu'à la facturation des travaux",
        "en": "Electrical concepts are only used for billing the work",
        "correct": false
       },
       {
        "fr": "L'électricité n'est utilisée que dans les systèmes de climatisation, jamais de chauffage",
        "en": "Electricity is only used in air conditioning systems, never heating ones",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi couper l'alimentation électrique avant de travailler sur un composant électrique?",
      "en": "Why cut the power before working on an electrical component?",
      "choices": [
       {
        "fr": "Pour éviter les risques de choc électrique",
        "en": "To avoid the risk of electric shock",
        "correct": true
       },
       {
        "fr": "C'est surtout une question de rapidité d'exécution, pas de sécurité",
        "en": "It's mainly a matter of speed, not safety",
        "correct": false
       },
       {
        "fr": "Uniquement pour suivre une préférence personnelle",
        "en": "Only to follow a personal preference",
        "correct": false
       },
       {
        "fr": "Uniquement lorsqu'un client le demande explicitement",
        "en": "Only when a client explicitly asks for it",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Un multimètre peut aider à vérifier qu'un circuit est bien hors tension avant d'y travailler.",
      "en": "A multimeter can help verify a circuit is de-energized before working on it.",
      "isTrue": true
     }
    ]
   },
   {
    "level": 2,
    "questions": [
     {
      "fr": "Pourquoi respecter le code électrique lors de l'installation de composants électriques liés à un système de chauffage?",
      "en": "Why follow the electrical code when installing electrical components related to a heating system?",
      "choices": [
       {
        "fr": "Pour assurer la sécurité et la conformité de l'installation",
        "en": "To ensure the installation's safety and compliance",
        "correct": true
       },
       {
        "fr": "Cela sert uniquement à respecter une habitude de l'entreprise",
        "en": "It's only meant to follow a company habit",
        "correct": false
       },
       {
        "fr": "Uniquement pour suivre une habitude de l'entreprise",
        "en": "Only to follow a company habit",
        "correct": false
       },
       {
        "fr": "Le code électrique ne s'applique jamais à ce type d'installation",
        "en": "The electrical code never applies to this type of installation",
        "correct": false
       }
      ]
     },
     {
      "fr": "Que doit-on vérifier avant de raccorder un thermostat à un système de chauffage?",
      "en": "What should be checked before connecting a thermostat to a heating system?",
      "choices": [
       {
        "fr": "La compatibilité du thermostat avec le système et le bon câblage",
        "en": "The thermostat's compatibility with the system and proper wiring",
        "correct": true
       },
       {
        "fr": "Uniquement la marque du fabricant",
        "en": "Only the manufacturer's brand",
        "correct": false
       },
       {
        "fr": "Uniquement la marque du thermostat",
        "en": "Only the thermostat's brand",
        "correct": false
       },
       {
        "fr": "Uniquement le nombre d'employés présents sur le chantier",
        "en": "Only the number of employees on site",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Tous les travaux électriques liés à la plomberie et au chauffage peuvent toujours être réalisés par le tuyauteur-plombier seul, sans jamais requérir un électricien.",
      "en": "All electrical work related to plumbing and heating can always be done by the pipefitter-plumber alone, never requiring an electrician.",
      "isTrue": false
     }
    ]
   },
   {
    "level": 3,
    "questions": [
     {
      "fr": "Un composant électrique installé sur un système de chauffage ne fonctionne pas comme prévu. Quelle est la bonne pratique?",
      "en": "An electrical component installed on a heating system isn't working as expected. What is the correct practice?",
      "choices": [
       {
        "fr": "Vérifier méthodiquement le câblage et les connexions avant de conclure à une pièce défectueuse",
        "en": "Methodically checking the wiring and connections before concluding a part is defective",
        "correct": true
       },
       {
        "fr": "Remplacer le composant sans vérification",
        "en": "Replacing the component with no check",
        "correct": false
       },
       {
        "fr": "Ignorer le problème",
        "en": "Ignoring the problem",
        "correct": false
       },
       {
        "fr": "Deviner la cause sans vérification",
        "en": "Guessing at the cause with no verification",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi les limites de compétence entre plomberie et électricité doivent-elles être bien comprises par un tuyauteur-plombier?",
      "en": "Why must the boundaries of competence between plumbing and electrical work be well understood by a pipefitter-plumber?",
      "choices": [
       {
        "fr": "Pour respecter les réglementations et référer certains travaux à un électricien qualifié si nécessaire",
        "en": "To comply with regulations and refer certain work to a qualified electrician if necessary",
        "correct": true
       },
       {
        "fr": "Cela ne concerne que les installations les plus anciennes",
        "en": "It only concerns the oldest installations",
        "correct": false
       },
       {
        "fr": "Un tuyauteur-plombier peut toujours faire tous les travaux électriques sans limite",
        "en": "A pipefitter-plumber can always do all electrical work with no limit",
        "correct": false
       },
       {
        "fr": "Pour suivre une habitude sans fondement technique",
        "en": "To follow a habit with no technical basis",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "La compréhension des composants électriques est utile uniquement pour les systèmes de chauffage au gaz, jamais pour les systèmes électriques modernes.",
      "en": "Understanding electrical components is only useful for gas heating systems, never for modern electrical systems.",
      "isTrue": false
     }
    ]
   }
  ]
 },
 {
  "id": "plomb06",
  "order": 6,
  "title_fr": "Interprétation de plans et devis",
  "title_en": "Blueprint and Specification Reading",
  "icon": "📐",
  "tiers": [
   {
    "level": 1,
    "questions": [
     {
      "fr": "Qu'est-ce qu'un plan de plomberie?",
      "en": "What is a plumbing drawing?",
      "choices": [
       {
        "fr": "Un document technique qui montre l'emplacement et le tracé des réseaux de tuyauterie",
        "en": "A technical document showing the location and routing of piping networks",
        "correct": true
       },
       {
        "fr": "Une facture de matériaux",
        "en": "A materials invoice",
        "correct": false
       },
       {
        "fr": "Un contrat de vente",
        "en": "A sales contract",
        "correct": false
       },
       {
        "fr": "Une garantie de fabricant",
        "en": "A manufacturer's warranty",
        "correct": false
       }
      ]
     },
     {
      "fr": "Qu'est-ce qu'un devis dans un projet de construction?",
      "en": "What is a specification in a construction project?",
      "choices": [
       {
        "fr": "Un document qui détaille les exigences techniques et les matériaux à utiliser",
        "en": "A document detailing the technical requirements and materials to use",
        "correct": true
       },
       {
        "fr": "Une carte postale",
        "en": "A postcard",
        "correct": false
       },
       {
        "fr": "Un reçu de caisse",
        "en": "A sales receipt",
        "correct": false
       },
       {
        "fr": "Un calendrier scolaire",
        "en": "A school calendar",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Un plan de plomberie utilise des symboles normalisés pour représenter différents composants.",
      "en": "A plumbing drawing uses standardized symbols to represent different components.",
      "isTrue": true
     }
    ]
   },
   {
    "level": 2,
    "questions": [
     {
      "fr": "Pourquoi vérifier les cotes d'un plan avant de commencer l'installation de tuyauterie?",
      "en": "Why check a drawing's dimensions before starting piping installation?",
      "choices": [
       {
        "fr": "Pour éviter les erreurs coûteuses d'installation",
        "en": "To avoid costly installation errors",
        "correct": true
       },
       {
        "fr": "C'est une exigence propre à certains fabricants seulement",
        "en": "It's a requirement specific to certain manufacturers only",
        "correct": false
       },
       {
        "fr": "Pour réduire le prix facturé au client",
        "en": "To reduce the price billed to the client",
        "correct": false
       },
       {
        "fr": "Pour compliquer l'installation",
        "en": "To complicate installation",
        "correct": false
       }
      ]
     },
     {
      "fr": "Que faire si le devis et le plan semblent se contredire sur un point technique?",
      "en": "What should you do if the specification and drawing seem to contradict each other on a technical point?",
      "choices": [
       {
        "fr": "Vérifier auprès du concepteur ou du superviseur avant de procéder",
        "en": "Checking with the designer or supervisor before proceeding",
        "correct": true
       },
       {
        "fr": "Choisir arbitrairement une des deux versions",
        "en": "Arbitrarily choosing one of the two versions",
        "correct": false
       },
       {
        "fr": "Ignorer l'incohérence",
        "en": "Ignoring the inconsistency",
        "correct": false
       },
       {
        "fr": "Deviner la bonne interprétation",
        "en": "Guessing at the right interpretation",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Les plans mécaniques et architecturaux d'un bâtiment doivent souvent être consultés ensemble.",
      "en": "A building's mechanical and architectural drawings often need to be consulted together.",
      "isTrue": true
     }
    ]
   },
   {
    "level": 3,
    "questions": [
     {
      "fr": "Un plan complexe comporte plusieurs systèmes (plomberie, chauffage, ventilation) sur le même bâtiment. Pourquoi est-ce important à comprendre?",
      "en": "A complex drawing shows several systems (plumbing, heating, ventilation) in the same building. Why is this important to understand?",
      "choices": [
       {
        "fr": "Pour éviter les conflits d'installation entre les différents systèmes",
        "en": "To avoid installation conflicts between the different systems",
        "correct": true
       },
       {
        "fr": "Pour compliquer inutilement le plan",
        "en": "To needlessly complicate the drawing",
        "correct": false
       },
       {
        "fr": "Une seule vue serait toujours suffisante",
        "en": "A single view would always be enough",
        "correct": false
       },
       {
        "fr": "Cela n'apporte aucune information utile",
        "en": "It provides no useful information",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi la lecture précise de plans et devis est-elle particulièrement critique dans les grands projets de construction?",
      "en": "Why is precise blueprint and specification reading particularly critical on large construction projects?",
      "choices": [
       {
        "fr": "Une erreur d'interprétation peut entraîner des coûts et délais importants pour corriger le problème",
        "en": "A misinterpretation can lead to significant costs and delays to fix the problem",
        "correct": true
       },
       {
        "fr": "Cela n'est important que pour les tout petits projets résidentiels",
        "en": "It's only important on very small residential projects",
        "correct": false
       },
       {
        "fr": "Les grands projets n'utilisent jamais de plans détaillés",
        "en": "Large projects never use detailed drawings",
        "correct": false
       },
       {
        "fr": "Pour respecter une exigence purement esthétique",
        "en": "To meet a purely aesthetic requirement",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Une bonne interprétation des plans et devis est utile uniquement lors de la conception, jamais lors de l'installation elle-même.",
      "en": "Good blueprint and specification reading is only useful during design, never during the installation itself.",
      "isTrue": false
     }
    ]
   }
  ]
 },
 {
  "id": "plomb07",
  "order": 7,
  "title_fr": "Installation de réseaux d'évacuation",
  "title_en": "Drainage System Installation",
  "icon": "🚰",
  "tiers": [
   {
    "level": 1,
    "questions": [
     {
      "fr": "Quel est le rôle d'un réseau d'évacuation dans un bâtiment?",
      "en": "What is a drainage system's role in a building?",
      "choices": [
       {
        "fr": "Évacuer les eaux usées vers l'égout ou le système septique",
        "en": "Removing wastewater to the sewer or septic system",
        "correct": true
       },
       {
        "fr": "Distribuer l'eau potable",
        "en": "Distributing drinking water",
        "correct": false
       },
       {
        "fr": "Chauffer le bâtiment",
        "en": "Heating the building",
        "correct": false
       },
       {
        "fr": "Ventiler l'air du bâtiment",
        "en": "Ventilating the building's air",
        "correct": false
       }
      ]
     },
     {
      "fr": "Qu'est-ce qu'un siphon en plomberie?",
      "en": "What is a trap in plumbing?",
      "choices": [
       {
        "fr": "Un dispositif qui empêche les gaz d'égout de remonter dans le bâtiment",
        "en": "A device that prevents sewer gases from rising into the building",
        "correct": true
       },
       {
        "fr": "Un type de robinet",
        "en": "A type of faucet",
        "correct": false
       },
       {
        "fr": "Un appareil de chauffage",
        "en": "A heating appliance",
        "correct": false
       },
       {
        "fr": "Un outil de mesure",
        "en": "A measuring tool",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "La pente d'un tuyau d'évacuation doit permettre un écoulement efficace par gravité.",
      "en": "A drain pipe's slope must allow for efficient flow by gravity.",
      "isTrue": true
     }
    ]
   },
   {
    "level": 2,
    "questions": [
     {
      "fr": "Pourquoi installer un évent (ventilation de plomberie) dans un réseau d'évacuation?",
      "en": "Why install a vent in a drainage system?",
      "choices": [
       {
        "fr": "Pour équilibrer la pression et éviter que les siphons ne se vident",
        "en": "To equalize pressure and prevent traps from being siphoned dry",
        "correct": true
       },
       {
        "fr": "Cela sert uniquement à respecter une habitude sans lien avec la sécurité",
        "en": "It only serves to follow a habit unrelated to safety",
        "correct": false
       },
       {
        "fr": "Pour réduire le coût des matériaux utilisés",
        "en": "To reduce the cost of the materials used",
        "correct": false
       },
       {
        "fr": "L'évent n'affecte que le bruit du système, jamais son fonctionnement",
        "en": "The vent only affects the system's noise, never its operation",
        "correct": false
       }
      ]
     },
     {
      "fr": "Quel diamètre de tuyau est généralement requis pour évacuer les eaux d'une toilette?",
      "en": "What pipe diameter is generally required to drain a toilet?",
      "choices": [
       {
        "fr": "Un diamètre plus grand que pour un lavabo, en raison du volume à évacuer",
        "en": "A larger diameter than for a sink, due to the volume to be drained",
        "correct": true
       },
       {
        "fr": "Toujours le même diamètre peu importe l'appareil",
        "en": "Always the same diameter regardless of the fixture",
        "correct": false
       },
       {
        "fr": "Le diamètre n'importe que pour les tuyaux extérieurs",
        "en": "Diameter only matters for outdoor pipes",
        "correct": false
       },
       {
        "fr": "Un diamètre plus petit qu'un lavabo",
        "en": "A smaller diameter than a sink",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Le code de plomberie précise les exigences minimales pour la conception d'un réseau d'évacuation.",
      "en": "The plumbing code specifies the minimum requirements for designing a drainage system.",
      "isTrue": true
     }
    ]
   },
   {
    "level": 3,
    "questions": [
     {
      "fr": "Un réseau d'évacuation complexe dessert plusieurs étages d'un bâtiment. Quelle est une bonne pratique de conception?",
      "en": "A complex drainage system serves several floors of a building. What is a good design practice?",
      "choices": [
       {
        "fr": "Planifier soigneusement les pentes, diamètres et points de ventilation pour chaque section",
        "en": "Carefully planning the slopes, diameters and vent points for each section",
        "correct": true
       },
       {
        "fr": "Ignorer les différences entre les étages",
        "en": "Ignoring the differences between floors",
        "correct": false
       },
       {
        "fr": "Utiliser un seul diamètre pour tout le réseau",
        "en": "Using a single diameter for the entire network",
        "correct": false
       },
       {
        "fr": "Omettre les évents pour simplifier",
        "en": "Omitting the vents to simplify",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi un réseau d'évacuation mal conçu peut-il causer des problèmes sérieux à long terme?",
      "en": "Why can a poorly designed drainage system cause serious long-term problems?",
      "choices": [
       {
        "fr": "Il peut causer des blocages, des odeurs ou des dégâts d'eau",
        "en": "It can cause blockages, odours or water damage",
        "correct": true
       },
       {
        "fr": "Cela n'affecte que la durée du chantier, jamais la qualité du travail",
        "en": "It only affects the job's duration, never the quality of the work",
        "correct": false
       },
       {
        "fr": "Un réseau mal conçu s'améliore toujours avec le temps",
        "en": "A poorly designed system always improves over time",
        "correct": false
       },
       {
        "fr": "Pour suivre une habitude sans fondement technique",
        "en": "To follow a habit with no technical basis",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Une installation rigoureuse des réseaux d'évacuation est surtout une question d'apparence esthétique, sans lien avec la salubrité du bâtiment.",
      "en": "Rigorous drainage system installation is mainly a matter of appearance, unrelated to the building's sanitation.",
      "isTrue": false
     }
    ]
   }
  ]
 },
 {
  "id": "plomb08",
  "order": 8,
  "title_fr": "Installation de réseaux de ventilation",
  "title_en": "Ventilation System Installation",
  "icon": "💨",
  "tiers": [
   {
    "level": 1,
    "questions": [
     {
      "fr": "Pourquoi un réseau de ventilation est-il important en plomberie?",
      "en": "Why is a ventilation network important in plumbing?",
      "choices": [
       {
        "fr": "Il permet d'équilibrer la pression et d'évacuer les gaz du réseau d'évacuation",
        "en": "It helps equalize pressure and vent gases from the drainage system",
        "correct": true
       },
       {
        "fr": "Il n'a aucun lien avec la plomberie",
        "en": "It has no connection to plumbing",
        "correct": false
       },
       {
        "fr": "Il sert uniquement à chauffer l'air",
        "en": "It's only used to heat the air",
        "correct": false
       },
       {
        "fr": "Il remplace le réseau d'évacuation",
        "en": "It replaces the drainage system",
        "correct": false
       }
      ]
     },
     {
      "fr": "Où débouche généralement un conduit de ventilation de plomberie?",
      "en": "Where does a plumbing vent pipe typically terminate?",
      "choices": [
       {
        "fr": "Au-dessus du toit du bâtiment",
        "en": "Above the building's roof",
        "correct": true
       },
       {
        "fr": "Dans le sous-sol uniquement",
        "en": "In the basement only",
        "correct": false
       },
       {
        "fr": "Dans la cuisine",
        "en": "In the kitchen",
        "correct": false
       },
       {
        "fr": "Il ne débouche jamais nulle part",
        "en": "It never terminates anywhere",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Un réseau de ventilation mal installé peut causer des siphons vides et des odeurs désagréables.",
      "en": "A poorly installed ventilation network can cause dry traps and unpleasant odours.",
      "isTrue": true
     }
    ]
   },
   {
    "level": 2,
    "questions": [
     {
      "fr": "Pourquoi respecter les distances minimales entre un évent de plomberie et une fenêtre ou une prise d'air?",
      "en": "Why follow the minimum distances between a plumbing vent and a window or air intake?",
      "choices": [
       {
        "fr": "Pour éviter que des gaz ou odeurs désagréables n'entrent dans le bâtiment",
        "en": "To prevent gases or unpleasant odours from entering the building",
        "correct": true
       },
       {
        "fr": "Cela dépend uniquement des préférences esthétiques du client",
        "en": "It only depends on the client's aesthetic preferences",
        "correct": false
       },
       {
        "fr": "Pour respecter une préférence esthétique du client",
        "en": "To meet a client's aesthetic preference",
        "correct": false
       },
       {
        "fr": "La distance n'importe que pour les évents situés au sous-sol",
        "en": "Distance only matters for vents located in the basement",
        "correct": false
       }
      ]
     },
     {
      "fr": "Que doit-on vérifier après avoir installé un réseau de ventilation complexe?",
      "en": "What should be checked after installing a complex ventilation network?",
      "choices": [
       {
        "fr": "Que chaque section du réseau d'évacuation est correctement ventilée",
        "en": "That each section of the drainage system is properly vented",
        "correct": true
       },
       {
        "fr": "Uniquement la date d'achat inscrite sur la facture",
        "en": "Only the purchase date on the invoice",
        "correct": false
       },
       {
        "fr": "Uniquement la longueur totale des conduits installés",
        "en": "Only the total length of the ducts installed",
        "correct": false
       },
       {
        "fr": "Uniquement la météo du jour",
        "en": "Only the day's weather",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Le code de plomberie ne précise aucune exigence concernant la conception des réseaux de ventilation; ce point est laissé entièrement à la discrétion de l'installateur.",
      "en": "The plumbing code specifies no requirements at all for ventilation network design; this is left entirely to the installer's discretion.",
      "isTrue": false
     }
    ]
   },
   {
    "level": 3,
    "questions": [
     {
      "fr": "Un bâtiment complexe présente des contraintes architecturales qui compliquent l'installation d'évents traditionnels. Quelle est une bonne pratique?",
      "en": "A complex building has architectural constraints that complicate installing traditional vents. What is a good practice?",
      "choices": [
       {
        "fr": "Envisager des solutions alternatives conformes au code, comme des évents mécaniques homologués",
        "en": "Considering code-compliant alternative solutions, like approved mechanical vents",
        "correct": true
       },
       {
        "fr": "Omettre la ventilation pour simplifier",
        "en": "Omitting ventilation to simplify",
        "correct": false
       },
       {
        "fr": "Ignorer les contraintes architecturales",
        "en": "Ignoring the architectural constraints",
        "correct": false
       },
       {
        "fr": "Installer les évents n'importe où sans vérification",
        "en": "Installing vents anywhere with no check",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi une bonne installation de ventilation contribue-t-elle à la durabilité d'un réseau de plomberie?",
      "en": "Why does good ventilation installation contribute to a plumbing system's durability?",
      "choices": [
       {
        "fr": "Elle prévient les problèmes de pression qui peuvent endommager les composants à long terme",
        "en": "It prevents pressure problems that can damage components over the long term",
        "correct": true
       },
       {
        "fr": "Cela ne concerne que les très gros chantiers commerciaux",
        "en": "It only concerns very large commercial job sites",
        "correct": false
       },
       {
        "fr": "La ventilation n'affecte jamais la durabilité du système",
        "en": "Ventilation never affects the system's durability",
        "correct": false
       },
       {
        "fr": "Pour respecter une exigence purement esthétique",
        "en": "To meet a purely aesthetic requirement",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Une installation rigoureuse des réseaux de ventilation est essentielle au bon fonctionnement global d'un système de plomberie.",
      "en": "Rigorous ventilation network installation is essential to a plumbing system's overall proper function.",
      "isTrue": true
     }
    ]
   }
  ]
 },
 {
  "id": "plomb09",
  "order": 9,
  "title_fr": "Dispositifs électriques et électroniques",
  "title_en": "Electrical and Electronic Devices",
  "icon": "⚡",
  "tiers": [
   {
    "level": 1,
    "questions": [
     {
      "fr": "Quel dispositif électronique régule automatiquement la température d'un système de chauffage?",
      "en": "What electronic device automatically regulates a heating system's temperature?",
      "choices": [
       {
        "fr": "Un thermostat",
        "en": "A thermostat",
        "correct": true
       },
       {
        "fr": "Un tournevis",
        "en": "A screwdriver",
        "correct": false
       },
       {
        "fr": "Une pince",
        "en": "Pliers",
        "correct": false
       },
       {
        "fr": "Un coupe-tube",
        "en": "A tube cutter",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi certains systèmes de chauffage modernes intègrent-ils des dispositifs électroniques avancés?",
      "en": "Why do some modern heating systems include advanced electronic devices?",
      "choices": [
       {
        "fr": "Pour améliorer l'efficacité énergétique et le confort",
        "en": "To improve energy efficiency and comfort",
        "correct": true
       },
       {
        "fr": "Cela n'est utile que pour les chantiers commerciaux, jamais résidentiels",
        "en": "It's only useful on commercial sites, never residential ones",
        "correct": false
       },
       {
        "fr": "Pour compliquer inutilement le système",
        "en": "To needlessly complicate the system",
        "correct": false
       },
       {
        "fr": "Les dispositifs électroniques ne sont utilisés que dans les systèmes commerciaux, jamais résidentiels",
        "en": "Electronic devices are only used in commercial systems, never residential ones",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Un capteur de température défectueux peut causer un mauvais fonctionnement d'un système de chauffage.",
      "en": "A faulty temperature sensor can cause a heating system to malfunction.",
      "isTrue": true
     }
    ]
   },
   {
    "level": 2,
    "questions": [
     {
      "fr": "Pourquoi tester un dispositif électronique avant de l'installer définitivement dans un système?",
      "en": "Why test an electronic device before permanently installing it in a system?",
      "choices": [
       {
        "fr": "Pour vérifier son bon fonctionnement avant un travail plus difficile à défaire",
        "en": "To check it works properly before work that's harder to undo",
        "correct": true
       },
       {
        "fr": "C'est surtout utile pour accélérer la facturation",
        "en": "It's mainly useful for speeding up billing",
        "correct": false
       },
       {
        "fr": "Uniquement pour suivre une habitude de l'entreprise",
        "en": "Only to follow a company habit",
        "correct": false
       },
       {
        "fr": "Les dispositifs électroniques ne tombent jamais en panne",
        "en": "Electronic devices never fail",
        "correct": false
       }
      ]
     },
     {
      "fr": "Que doit-on vérifier avant de remplacer un module de commande électronique défectueux?",
      "en": "What should be checked before replacing a faulty electronic control module?",
      "choices": [
       {
        "fr": "Que le nouveau module est compatible avec le système existant",
        "en": "That the new module is compatible with the existing system",
        "correct": true
       },
       {
        "fr": "Uniquement le prix d'achat de la pièce",
        "en": "Only the part's purchase price",
        "correct": false
       },
       {
        "fr": "Uniquement le numéro de série du module",
        "en": "Only the module's serial number",
        "correct": false
       },
       {
        "fr": "Uniquement le nombre d'employés présents sur le chantier",
        "en": "Only the number of employees on site",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Une fois installés, les dispositifs électroniques modernes de chauffage doivent être programmés uniquement par le fabricant, jamais par le tuyauteur-plombier sur place.",
      "en": "Once installed, modern heating electronic devices must be programmed only by the manufacturer, never by the pipefitter-plumber on site.",
      "isTrue": false
     }
    ]
   },
   {
    "level": 3,
    "questions": [
     {
      "fr": "Un dispositif électronique de contrôle présente un comportement erratique. Quelle est la bonne pratique?",
      "en": "An electronic control device shows erratic behaviour. What is the correct practice?",
      "choices": [
       {
        "fr": "Vérifier méthodiquement l'alimentation, le câblage et les connexions avant de le remplacer",
        "en": "Methodically checking the power supply, wiring and connections before replacing it",
        "correct": true
       },
       {
        "fr": "Remplacer le dispositif sans vérification",
        "en": "Replacing the device with no check",
        "correct": false
       },
       {
        "fr": "Ignorer le problème",
        "en": "Ignoring the problem",
        "correct": false
       },
       {
        "fr": "Deviner la cause sans vérification",
        "en": "Guessing at the cause with no verification",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi la connaissance des dispositifs électroniques est-elle de plus en plus importante en plomberie et chauffage moderne?",
      "en": "Why is knowledge of electronic devices increasingly important in modern plumbing and heating?",
      "choices": [
       {
        "fr": "Les systèmes intègrent de plus en plus de composants électroniques pour l'efficacité et le confort",
        "en": "Systems increasingly integrate electronic components for efficiency and comfort",
        "correct": true
       },
       {
        "fr": "C'est surtout une question de rapidité d'exécution, pas de sécurité",
        "en": "It's mainly a matter of speed, not safety",
        "correct": false
       },
       {
        "fr": "Les systèmes modernes n'utilisent jamais l'électronique",
        "en": "Modern systems never use electronics",
        "correct": false
       },
       {
        "fr": "Pour suivre une habitude sans fondement technique",
        "en": "To follow a habit with no technical basis",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "La maîtrise des dispositifs électriques et électroniques complète efficacement les compétences mécaniques d'un tuyauteur-plombier.",
      "en": "Mastering electrical and electronic devices effectively complements a pipefitter-plumber's mechanical skills.",
      "isTrue": true
     }
    ]
   }
  ]
 },
 {
  "id": "plomb10",
  "order": 10,
  "title_fr": "Soudage et brasage",
  "title_en": "Welding and Brazing",
  "icon": "🔥",
  "tiers": [
   {
    "level": 1,
    "questions": [
     {
      "fr": "Qu'est-ce que le brasage en plomberie?",
      "en": "What is brazing in plumbing?",
      "choices": [
       {
        "fr": "Une technique d'assemblage de tuyaux à l'aide d'un métal d'apport fondu",
        "en": "A pipe joining technique using melted filler metal",
        "correct": true
       },
       {
        "fr": "Une technique de peinture",
        "en": "A painting technique",
        "correct": false
       },
       {
        "fr": "Une méthode de mesure",
        "en": "A measurement method",
        "correct": false
       },
       {
        "fr": "Un type de colle spéciale",
        "en": "A special type of glue",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi porter des lunettes de sécurité lors du soudage ou du brasage?",
      "en": "Why wear safety glasses during welding or brazing?",
      "choices": [
       {
        "fr": "Pour se protéger des étincelles et de la lumière intense",
        "en": "To protect against sparks and intense light",
        "correct": true
       },
       {
        "fr": "Cela sert uniquement à respecter une habitude de l'entreprise",
        "en": "It's only meant to follow a company habit",
        "correct": false
       },
       {
        "fr": "Pour améliorer la précision du travail",
        "en": "To improve work precision",
        "correct": false
       },
       {
        "fr": "Seulement lors de la toute première installation, jamais ensuite",
        "en": "Only during the very first installation, never afterward",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Le brasage est couramment utilisé pour assembler des tuyaux de cuivre en plomberie.",
      "en": "Brazing is commonly used to join copper pipes in plumbing.",
      "isTrue": true
     }
    ]
   },
   {
    "level": 2,
    "questions": [
     {
      "fr": "Pourquoi bien nettoyer les surfaces à souder ou braser avant de commencer?",
      "en": "Why thoroughly clean the surfaces to be welded or brazed before starting?",
      "choices": [
       {
        "fr": "Pour assurer une bonne adhérence et éviter les joints faibles",
        "en": "To ensure good adhesion and avoid weak joints",
        "correct": true
       },
       {
        "fr": "Cela ne concerne que les installations les plus anciennes",
        "en": "It only concerns the oldest installations",
        "correct": false
       },
       {
        "fr": "Pour respecter une exigence esthétique uniquement",
        "en": "To meet an aesthetic requirement only",
        "correct": false
       },
       {
        "fr": "Le nettoyage n'affecte que l'apparence du joint, jamais sa solidité",
        "en": "Cleaning only affects the joint's appearance, never its strength",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi éviter de braser à proximité de matériaux inflammables?",
      "en": "Why avoid brazing near flammable materials?",
      "choices": [
       {
        "fr": "En raison du risque d'incendie lié aux flammes et à la chaleur produites",
        "en": "Due to the fire risk from the flames and heat produced",
        "correct": true
       },
       {
        "fr": "C'est une exigence propre à certains fabricants seulement",
        "en": "It's a requirement specific to certain manufacturers only",
        "correct": false
       },
       {
        "fr": "Pour respecter une habitude sans lien avec la sécurité",
        "en": "To follow a habit unrelated to safety",
        "correct": false
       },
       {
        "fr": "Le risque ne concerne que les systèmes très anciens",
        "en": "The risk only concerns very old systems",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Un joint brasé de mauvaise qualité peut causer une fuite d'eau ou de gaz.",
      "en": "A poor-quality brazed joint can cause a water or gas leak.",
      "isTrue": true
     }
    ]
   },
   {
    "level": 3,
    "questions": [
     {
      "fr": "Un joint brasé présente une fuite après le refroidissement. Quelle est une cause probable?",
      "en": "A brazed joint shows a leak after cooling. What is a likely cause?",
      "choices": [
       {
        "fr": "Un nettoyage insuffisant des surfaces ou une température de brasage inadéquate",
        "en": "Insufficient surface cleaning or inadequate brazing temperature",
        "correct": true
       },
       {
        "fr": "La couleur du métal",
        "en": "The metal's colour",
        "correct": false
       },
       {
        "fr": "Le prix du métal d'apport",
        "en": "The price of the filler metal",
        "correct": false
       },
       {
        "fr": "La couleur des plinthes",
        "en": "The colour of the baseboard heaters",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi le brasage à proximité de composants sensibles à la chaleur nécessite-t-il des précautions particulières?",
      "en": "Why does brazing near heat-sensitive components require particular precautions?",
      "choices": [
       {
        "fr": "La chaleur excessive peut endommager des composants électroniques ou des matériaux voisins",
        "en": "Excessive heat can damage electronic components or nearby materials",
        "correct": true
       },
       {
        "fr": "Cela dépend uniquement des préférences esthétiques du client",
        "en": "It only depends on the client's aesthetic preferences",
        "correct": false
       },
       {
        "fr": "La chaleur n'affecte jamais les composants environnants",
        "en": "Heat never affects surrounding components",
        "correct": false
       },
       {
        "fr": "Pour respecter une exigence purement esthétique",
        "en": "To meet a purely aesthetic requirement",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Le soudage et le brasage sont des compétences accessoires en plomberie, rarement utilisées pour assembler la tuyauterie.",
      "en": "Welding and brazing are minor, rarely used skills in plumbing for joining piping.",
      "isTrue": false
     }
    ]
   }
  ]
 },
 {
  "id": "plomb11",
  "order": 11,
  "title_fr": "Installation de systèmes de distribution d'eau chaude et d'eau froide, d'équipements sanitaires et d'accessoires",
  "title_en": "Hot and Cold Water Distribution, Fixture and Accessory Installation",
  "icon": "🚿",
  "tiers": [
   {
    "level": 1,
    "questions": [
     {
      "fr": "Quel équipement fait partie d'une installation sanitaire typique?",
      "en": "What equipment is part of a typical sanitary installation?",
      "choices": [
       {
        "fr": "Un lavabo, une toilette ou une douche",
        "en": "A sink, a toilet or a shower",
        "correct": true
       },
       {
        "fr": "Un four à micro-ondes",
        "en": "A microwave oven",
        "correct": false
       },
       {
        "fr": "Un climatiseur",
        "en": "An air conditioner",
        "correct": false
       },
       {
        "fr": "Une télévision",
        "en": "A television",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi installer des soupapes d'arrêt près de chaque appareil sanitaire?",
      "en": "Why install shut-off valves near each sanitary fixture?",
      "choices": [
       {
        "fr": "Pour pouvoir couper l'eau localement lors d'un entretien ou d'une réparation",
        "en": "To be able to shut off water locally during maintenance or a repair",
        "correct": true
       },
       {
        "fr": "Cela sert uniquement à respecter une habitude sans lien avec la sécurité",
        "en": "It only serves to follow a habit unrelated to safety",
        "correct": false
       },
       {
        "fr": "Pour réduire le coût des matériaux utilisés",
        "en": "To reduce the cost of the materials used",
        "correct": false
       },
       {
        "fr": "Les soupapes d'arrêt ne sont utiles que pour les gros immeubles",
        "en": "Shut-off valves are only useful for large buildings",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Un système de distribution d'eau doit fournir de l'eau chaude et de l'eau froide séparément aux différents appareils.",
      "en": "A water distribution system must supply hot and cold water separately to different fixtures.",
      "isTrue": true
     }
    ]
   },
   {
    "level": 2,
    "questions": [
     {
      "fr": "Pourquoi vérifier la pression d'eau après l'installation d'un nouveau système de distribution?",
      "en": "Why check water pressure after installing a new distribution system?",
      "choices": [
       {
        "fr": "Pour s'assurer d'une pression adéquate à tous les points d'utilisation",
        "en": "To ensure adequate pressure at all points of use",
        "correct": true
       },
       {
        "fr": "Cela ne concerne que les très gros chantiers commerciaux",
        "en": "It only concerns very large commercial job sites",
        "correct": false
       },
       {
        "fr": "Pour respecter une préférence esthétique du client",
        "en": "To meet a client's aesthetic preference",
        "correct": false
       },
       {
        "fr": "La pression d'eau n'a besoin d'être vérifiée que dans les immeubles de plus de dix étages",
        "en": "Water pressure only needs to be checked in buildings over ten storeys",
        "correct": false
       }
      ]
     },
     {
      "fr": "Que faire si un appareil sanitaire n'est pas parfaitement de niveau lors de l'installation?",
      "en": "What should you do if a sanitary fixture isn't perfectly level during installation?",
      "choices": [
       {
        "fr": "L'ajuster avant de finaliser l'installation",
        "en": "Adjusting it before finalizing the installation",
        "correct": true
       },
       {
        "fr": "L'installer tel quel sans ajustement",
        "en": "Installing it as-is with no adjustment",
        "correct": false
       },
       {
        "fr": "Ignorer le problème",
        "en": "Ignoring the problem",
        "correct": false
       },
       {
        "fr": "Recommencer tout le projet",
        "en": "Starting the entire project over",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Le raccordement d'un chauffe-eau n'est soumis à aucune norme de sécurité particulière, contrairement aux autres appareils de plomberie.",
      "en": "Connecting a water heater is not subject to any particular safety standard, unlike other plumbing appliances.",
      "isTrue": false
     }
    ]
   },
   {
    "level": 3,
    "questions": [
     {
      "fr": "Un système de distribution d'eau chaude et froide dessert plusieurs salles de bain simultanément. Quelle est une bonne pratique de conception?",
      "en": "A hot and cold water distribution system serves several bathrooms simultaneously. What is a good design practice?",
      "choices": [
       {
        "fr": "Dimensionner correctement les tuyaux pour maintenir une pression adéquate partout",
        "en": "Correctly sizing the pipes to maintain adequate pressure everywhere",
        "correct": true
       },
       {
        "fr": "Utiliser un seul petit diamètre pour tout le système",
        "en": "Using a single small diameter for the entire system",
        "correct": false
       },
       {
        "fr": "Ignorer la demande simultanée en eau",
        "en": "Ignoring simultaneous water demand",
        "correct": false
       },
       {
        "fr": "Ne pas tenir compte du nombre d'appareils",
        "en": "Disregarding the number of fixtures",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi l'installation d'équipements sanitaires exige-t-elle une attention particulière à l'étanchéité?",
      "en": "Why does installing sanitary fixtures require particular attention to watertightness?",
      "choices": [
       {
        "fr": "Une fuite non détectée peut causer des dommages importants au bâtiment",
        "en": "An undetected leak can cause significant damage to the building",
        "correct": true
       },
       {
        "fr": "C'est surtout une question de rapidité d'exécution, pas de sécurité",
        "en": "It's mainly a matter of speed, not safety",
        "correct": false
       },
       {
        "fr": "Les fuites ne causent jamais de dommages",
        "en": "Leaks never cause damage",
        "correct": false
       },
       {
        "fr": "Pour suivre une habitude sans fondement technique",
        "en": "To follow a habit with no technical basis",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "L'installation des systèmes de distribution d'eau et des équipements sanitaires n'a aucune influence sur la sécurité des occupants, seulement sur leur confort.",
      "en": "Installing water distribution systems and sanitary fixtures has no influence on occupant safety, only on their comfort.",
      "isTrue": false
     }
    ]
   }
  ]
 },
 {
  "id": "plomb12",
  "order": 12,
  "title_fr": "Entretien et réparation de la tuyauterie, des équipements sanitaires et des accessoires",
  "title_en": "Piping, Fixture and Accessory Maintenance and Repair",
  "icon": "🛠️",
  "tiers": [
   {
    "level": 1,
    "questions": [
     {
      "fr": "Quelle est une réparation courante en plomberie résidentielle?",
      "en": "What is a common residential plumbing repair?",
      "choices": [
       {
        "fr": "La réparation d'un robinet qui coule",
        "en": "Repairing a leaking faucet",
        "correct": true
       },
       {
        "fr": "Le remplacement du système audio",
        "en": "Replacing the audio system",
        "correct": false
       },
       {
        "fr": "La peinture des murs",
        "en": "Painting the walls",
        "correct": false
       },
       {
        "fr": "Le remplacement des fenêtres",
        "en": "Replacing the windows",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi couper l'alimentation en eau avant de réparer un tuyau ou un accessoire?",
      "en": "Why shut off the water supply before repairing a pipe or fixture?",
      "choices": [
       {
        "fr": "Pour éviter les dégâts d'eau pendant la réparation",
        "en": "To avoid water damage during the repair",
        "correct": true
       },
       {
        "fr": "Cela sert uniquement à respecter une habitude de l'entreprise",
        "en": "It's only meant to follow a company habit",
        "correct": false
       },
       {
        "fr": "Pour justifier des frais supplémentaires au client",
        "en": "To justify additional fees to the client",
        "correct": false
       },
       {
        "fr": "Uniquement lorsqu'un client le demande explicitement",
        "en": "Only when a client explicitly asks for it",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Un joint d'étanchéité usé est une cause rare de fuite dans un robinet; les fuites proviennent presque toujours d'un bris du tuyau principal.",
      "en": "A worn seal is a rare cause of a faucet leak; leaks almost always come from a break in the main pipe.",
      "isTrue": false
     }
    ]
   },
   {
    "level": 2,
    "questions": [
     {
      "fr": "Pourquoi diagnostiquer soigneusement la cause d'une fuite avant de procéder à une réparation?",
      "en": "Why carefully diagnose the cause of a leak before proceeding with a repair?",
      "choices": [
       {
        "fr": "Pour s'assurer de régler le vrai problème et non seulement un symptôme",
        "en": "To ensure fixing the actual problem, not just a symptom",
        "correct": true
       },
       {
        "fr": "Cela ne concerne que les installations les plus anciennes",
        "en": "It only concerns the oldest installations",
        "correct": false
       },
       {
        "fr": "Pour justifier des frais supplémentaires au client",
        "en": "To justify additional fees to the client",
        "correct": false
       },
       {
        "fr": "Un diagnostic n'est nécessaire que pour les pannes majeures, jamais les petites fuites",
        "en": "A diagnosis is only necessary for major breakdowns, never small leaks",
        "correct": false
       }
      ]
     },
     {
      "fr": "Que doit-on vérifier après avoir réparé une fuite dans un mur ou un plancher?",
      "en": "What should be checked after repairing a leak in a wall or floor?",
      "choices": [
       {
        "fr": "L'absence de nouvelles fuites et l'état des matériaux environnants",
        "en": "The absence of new leaks and the condition of surrounding materials",
        "correct": true
       },
       {
        "fr": "Uniquement la marque du fabricant",
        "en": "Only the manufacturer's brand",
        "correct": false
       },
       {
        "fr": "Uniquement le prix du tuyau utilisé",
        "en": "Only the price of the pipe used",
        "correct": false
       },
       {
        "fr": "Uniquement la météo du jour",
        "en": "Only the day's weather",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Un entretien préventif régulier peut réduire le risque de pannes majeures de plomberie.",
      "en": "Regular preventive maintenance can reduce the risk of major plumbing breakdowns.",
      "isTrue": true
     }
    ]
   },
   {
    "level": 3,
    "questions": [
     {
      "fr": "Une réparation de tuyauterie ne règle pas complètement le symptôme initial signalé par le client. Quelle est la bonne pratique?",
      "en": "A piping repair doesn't completely resolve the symptom initially reported by the client. What is the correct practice?",
      "choices": [
       {
        "fr": "Reprendre le diagnostic pour identifier une cause additionnelle",
        "en": "Resuming the diagnosis to identify an additional cause",
        "correct": true
       },
       {
        "fr": "Livrer le travail tel quel sans vérification supplémentaire",
        "en": "Delivering the work as-is with no further check",
        "correct": false
       },
       {
        "fr": "Ignorer le symptôme restant",
        "en": "Ignoring the remaining symptom",
        "correct": false
       },
       {
        "fr": "Facturer une nouvelle réparation sans diagnostic",
        "en": "Billing for a new repair with no diagnosis",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi l'entretien préventif est-il souvent plus économique pour le client à long terme?",
      "en": "Why is preventive maintenance often more cost-effective for the client in the long run?",
      "choices": [
       {
        "fr": "Il permet d'éviter des réparations majeures coûteuses causées par des problèmes négligés",
        "en": "It helps avoid costly major repairs caused by neglected problems",
        "correct": true
       },
       {
        "fr": "Cela n'affecte que l'apparence du travail, jamais son coût",
        "en": "It only affects the appearance of the work, never its cost",
        "correct": false
       },
       {
        "fr": "L'entretien préventif coûte toujours plus cher qu'une panne majeure",
        "en": "Preventive maintenance always costs more than a major breakdown",
        "correct": false
       },
       {
        "fr": "Pour justifier un tarif d'entretien plus élevé",
        "en": "To justify a higher maintenance fee",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "La rigueur en entretien et réparation influence uniquement les coûts, jamais la sécurité du client.",
      "en": "Rigour in maintenance and repair only affects costs, never the client's safety.",
      "isTrue": false
     }
    ]
   }
  ]
 },
 {
  "id": "plomb13",
  "order": 13,
  "title_fr": "Information relative aux notions d'énergie et de chauffage",
  "title_en": "Energy and Heating Concepts",
  "icon": "🔋",
  "tiers": [
   {
    "level": 1,
    "questions": [
     {
      "fr": "Quelles sont les principales sources d'énergie utilisées pour le chauffage résidentiel au Québec?",
      "en": "What are the main energy sources used for residential heating in Quebec?",
      "choices": [
       {
        "fr": "L'électricité, le gaz naturel, le mazout et le bois",
        "en": "Electricity, natural gas, oil and wood",
        "correct": true
       },
       {
        "fr": "Uniquement l'énergie solaire",
        "en": "Only solar energy",
        "correct": false
       },
       {
        "fr": "Uniquement l'énergie nucléaire",
        "en": "Only nuclear energy",
        "correct": false
       },
       {
        "fr": "Aucune source d'énergie n'est utilisée",
        "en": "No energy source is used",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi comprendre les notions de base de transfert de chaleur en chauffage?",
      "en": "Why understand basic heat transfer concepts in heating?",
      "choices": [
       {
        "fr": "Pour mieux concevoir et diagnostiquer les systèmes de chauffage",
        "en": "To better design and diagnose heating systems",
        "correct": true
       },
       {
        "fr": "Cela n'est utile que pour les chantiers commerciaux, jamais résidentiels",
        "en": "It's only useful on commercial sites, never residential ones",
        "correct": false
       },
       {
        "fr": "Pour respecter un programme d'études sans lien réel avec le métier",
        "en": "To follow a curriculum with no real connection to the trade",
        "correct": false
       },
       {
        "fr": "Le transfert de chaleur n'a aucun lien avec le chauffage",
        "en": "Heat transfer has no connection to heating",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "L'efficacité énergétique d'un système de chauffage influence les coûts d'exploitation à long terme.",
      "en": "A heating system's energy efficiency influences long-term operating costs.",
      "isTrue": true
     }
    ]
   },
   {
    "level": 2,
    "questions": [
     {
      "fr": "Pourquoi certains systèmes de chauffage sont-ils plus efficaces énergétiquement que d'autres?",
      "en": "Why are some heating systems more energy-efficient than others?",
      "choices": [
       {
        "fr": "Leur conception et leur technologie permettent de mieux convertir l'énergie en chaleur utile",
        "en": "Their design and technology better convert energy into useful heat",
        "correct": true
       },
       {
        "fr": "C'est une exigence propre à certains fabricants seulement",
        "en": "It's a requirement specific to certain manufacturers only",
        "correct": false
       },
       {
        "fr": "Tous les systèmes de chauffage sont toujours identiques",
        "en": "All heating systems are always identical",
        "correct": false
       },
       {
        "fr": "L'efficacité énergétique n'existe pas vraiment",
        "en": "Energy efficiency doesn't really exist",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi informer un client des options énergétiques disponibles pour son système de chauffage?",
      "en": "Why inform a client of the energy options available for their heating system?",
      "choices": [
       {
        "fr": "Pour l'aider à faire un choix éclairé selon ses besoins et son budget",
        "en": "To help them make an informed choice based on their needs and budget",
        "correct": true
       },
       {
        "fr": "Cela dépend uniquement des préférences esthétiques du client",
        "en": "It only depends on the client's aesthetic preferences",
        "correct": false
       },
       {
        "fr": "Pour compliquer inutilement sa décision",
        "en": "To needlessly complicate their decision",
        "correct": false
       },
       {
        "fr": "Seuls les clients commerciaux ont besoin de cette information",
        "en": "Only commercial clients need this information",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Les notions d'énergie et de chauffage aident à orienter le choix du système le mieux adapté à un bâtiment donné.",
      "en": "Energy and heating concepts help guide the choice of the system best suited to a given building.",
      "isTrue": true
     }
    ]
   },
   {
    "level": 3,
    "questions": [
     {
      "fr": "Un client hésite entre plusieurs sources d'énergie pour chauffer sa nouvelle maison. Quelle est une bonne pratique de conseil?",
      "en": "A client is torn between several energy sources to heat their new home. What is a good advisory practice?",
      "choices": [
       {
        "fr": "Présenter les avantages et inconvénients de chaque option selon ses besoins spécifiques",
        "en": "Presenting the pros and cons of each option based on their specific needs",
        "correct": true
       },
       {
        "fr": "Imposer un seul choix sans explication",
        "en": "Imposing a single choice with no explanation",
        "correct": false
       },
       {
        "fr": "Ignorer sa question",
        "en": "Ignoring their question",
        "correct": false
       },
       {
        "fr": "Choisir au hasard pour lui",
        "en": "Choosing at random for them",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi la compréhension des notions d'énergie devient-elle de plus en plus importante avec la transition énergétique?",
      "en": "Why is understanding energy concepts becoming increasingly important with the energy transition?",
      "choices": [
       {
        "fr": "Les clients recherchent de plus en plus des solutions plus écoénergétiques et durables",
        "en": "Clients increasingly seek more energy-efficient and sustainable solutions",
        "correct": true
       },
       {
        "fr": "Cela ne concerne que les très gros chantiers commerciaux",
        "en": "It only concerns very large commercial job sites",
        "correct": false
       },
       {
        "fr": "La transition énergétique n'affecte jamais ce métier",
        "en": "The energy transition never affects this trade",
        "correct": false
       },
       {
        "fr": "Pour respecter une exigence purement esthétique",
        "en": "To meet a purely aesthetic requirement",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "La compréhension des notions d'énergie et de chauffage est réservée aux ingénieurs; elle n'est jamais utile à un tuyauteur-plombier pour conseiller ses clients.",
      "en": "Understanding energy and heating concepts is reserved for engineers; it is never useful for a pipefitter-plumber advising clients.",
      "isTrue": false
     }
    ]
   }
  ]
 },
 {
  "id": "plomb14",
  "order": 14,
  "title_fr": "Installation, entretien et réparation d'appareils alimentés au mazout",
  "title_en": "Oil-Fired Appliance Installation, Maintenance and Repair",
  "icon": "🛢️",
  "tiers": [
   {
    "level": 1,
    "questions": [
     {
      "fr": "Qu'est-ce qu'un appareil alimenté au mazout?",
      "en": "What is an oil-fired appliance?",
      "choices": [
       {
        "fr": "Un appareil de chauffage qui brûle du mazout pour produire de la chaleur",
        "en": "A heating appliance that burns oil to produce heat",
        "correct": true
       },
       {
        "fr": "Un appareil alimenté uniquement à l'électricité",
        "en": "An appliance powered only by electricity",
        "correct": false
       },
       {
        "fr": "Un appareil de climatisation",
        "en": "An air conditioning unit",
        "correct": false
       },
       {
        "fr": "Un appareil de plomberie sans lien avec le chauffage",
        "en": "A plumbing device unrelated to heating",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi vérifier régulièrement le brûleur d'un appareil au mazout?",
      "en": "Why regularly check an oil appliance's burner?",
      "choices": [
       {
        "fr": "Pour assurer une combustion efficace et sécuritaire",
        "en": "To ensure efficient and safe combustion",
        "correct": true
       },
       {
        "fr": "C'est surtout une question de rapidité d'exécution, pas de sécurité",
        "en": "It's mainly a matter of speed, not safety",
        "correct": false
       },
       {
        "fr": "Pour respecter une habitude sans lien avec la sécurité",
        "en": "To follow a habit unrelated to safety",
        "correct": false
       },
       {
        "fr": "Le brûleur n'a besoin d'être vérifié qu'à l'achat de l'appareil",
        "en": "The burner only needs to be checked when the appliance is purchased",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Un réservoir de mazout doit être inspecté régulièrement pour prévenir les fuites.",
      "en": "An oil tank must be regularly inspected to prevent leaks.",
      "isTrue": true
     }
    ]
   },
   {
    "level": 2,
    "questions": [
     {
      "fr": "Pourquoi respecter les normes environnementales lors de l'installation d'un réservoir de mazout?",
      "en": "Why follow environmental standards when installing an oil tank?",
      "choices": [
       {
        "fr": "Pour prévenir la contamination du sol en cas de fuite",
        "en": "To prevent soil contamination in case of a leak",
        "correct": true
       },
       {
        "fr": "Cela sert uniquement à respecter une habitude de l'entreprise",
        "en": "It's only meant to follow a company habit",
        "correct": false
       },
       {
        "fr": "Uniquement pour suivre une habitude de l'entreprise",
        "en": "Only to follow a company habit",
        "correct": false
       },
       {
        "fr": "Les normes environnementales ne s'appliquent jamais à ce type d'installation",
        "en": "Environmental standards never apply to this type of installation",
        "correct": false
       }
      ]
     },
     {
      "fr": "Que doit-on vérifier lors de l'entretien annuel d'un appareil au mazout?",
      "en": "What should be checked during an oil appliance's annual maintenance?",
      "choices": [
       {
        "fr": "Le filtre, la buse du brûleur et l'efficacité de la combustion",
        "en": "The filter, the burner nozzle and combustion efficiency",
        "correct": true
       },
       {
        "fr": "Uniquement la date d'achat inscrite sur la facture",
        "en": "Only the purchase date on the invoice",
        "correct": false
       },
       {
        "fr": "Uniquement le prix d'achat de l'appareil",
        "en": "Only the appliance's purchase price",
        "correct": false
       },
       {
        "fr": "Uniquement le nombre d'employés présents sur le chantier",
        "en": "Only the number of employees on site",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Un mauvais réglage du brûleur d'un appareil au mazout peut réduire son efficacité énergétique.",
      "en": "A poorly adjusted oil appliance burner can reduce its energy efficiency.",
      "isTrue": true
     }
    ]
   },
   {
    "level": 3,
    "questions": [
     {
      "fr": "Un appareil au mazout montre une combustion inefficace malgré un entretien récent. Quelle est la bonne pratique?",
      "en": "An oil appliance shows inefficient combustion despite recent maintenance. What is the correct practice?",
      "choices": [
       {
        "fr": "Effectuer un diagnostic approfondi du système d'alimentation et de combustion",
        "en": "Performing an in-depth diagnosis of the fuel and combustion system",
        "correct": true
       },
       {
        "fr": "Ignorer le problème",
        "en": "Ignoring the problem",
        "correct": false
       },
       {
        "fr": "Remplacer des pièces au hasard",
        "en": "Replacing parts at random",
        "correct": false
       },
       {
        "fr": "Supposer que l'appareil fonctionne correctement sans vérification",
        "en": "Assuming the appliance works properly with no verification",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi la réglementation entourant les appareils au mazout est-elle particulièrement stricte?",
      "en": "Why is regulation around oil appliances particularly strict?",
      "choices": [
       {
        "fr": "En raison des risques environnementaux et de sécurité liés à ce type de combustible",
        "en": "Due to the environmental and safety risks associated with this type of fuel",
        "correct": true
       },
       {
        "fr": "Cela ne concerne que les installations les plus anciennes",
        "en": "It only concerns the oldest installations",
        "correct": false
       },
       {
        "fr": "Il n'existe aucune réglementation particulière",
        "en": "No particular regulation exists",
        "correct": false
       },
       {
        "fr": "Pour compliquer inutilement le travail",
        "en": "To needlessly complicate the work",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "L'entretien des appareils au mazout n'a aucun effet sur les risques environnementaux, seulement sur la performance de l'appareil.",
      "en": "Maintaining oil appliances has no effect on environmental risks, only on the appliance's performance.",
      "isTrue": false
     }
    ]
   }
  ]
 },
 {
  "id": "plomb15",
  "order": 15,
  "title_fr": "Installation et réparation de systèmes de chauffage directs et renversés",
  "title_en": "Direct and Indirect-Fired Heating System Installation and Repair",
  "icon": "🔥",
  "tiers": [
   {
    "level": 1,
    "questions": [
     {
      "fr": "Quelle est une différence entre un système de chauffage direct et un système renversé?",
      "en": "What is a difference between a direct-fired and an indirect-fired heating system?",
      "choices": [
       {
        "fr": "Le mode de transfert de la chaleur produite vers l'espace à chauffer diffère",
        "en": "The method of transferring the produced heat to the space being heated differs",
        "correct": true
       },
       {
        "fr": "Il n'y a aucune différence entre les deux",
        "en": "There is no difference between the two",
        "correct": false
       },
       {
        "fr": "Un système direct n'a besoin d'entretien qu'une seule fois, à l'installation",
        "en": "A direct system only needs maintenance once, at installation",
        "correct": false
       },
       {
        "fr": "Un système renversé ne produit jamais de chaleur",
        "en": "An indirect system never produces heat",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi vérifier l'efficacité de la combustion d'un système de chauffage direct?",
      "en": "Why check the combustion efficiency of a direct-fired heating system?",
      "choices": [
       {
        "fr": "Pour assurer un fonctionnement sécuritaire et économique",
        "en": "To ensure safe and economical operation",
        "correct": true
       },
       {
        "fr": "C'est une exigence propre à certains fabricants seulement",
        "en": "It's a requirement specific to certain manufacturers only",
        "correct": false
       },
       {
        "fr": "Uniquement pour prolonger la durée de la visite d'entretien",
        "en": "Only to lengthen the maintenance visit",
        "correct": false
       },
       {
        "fr": "Elle n'a besoin d'être vérifiée qu'à l'installation initiale, jamais par la suite",
        "en": "It only needs to be checked at initial installation, never afterward",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Un système de chauffage renversé transfère la chaleur à travers un échangeur avant de la diffuser dans l'espace.",
      "en": "An indirect-fired heating system transfers heat through an exchanger before diffusing it into the space.",
      "isTrue": true
     }
    ]
   },
   {
    "level": 2,
    "questions": [
     {
      "fr": "Pourquoi certains bâtiments privilégient-ils un système de chauffage renversé plutôt que direct?",
      "en": "Why do some buildings prefer an indirect-fired heating system over a direct one?",
      "choices": [
       {
        "fr": "Pour éviter que les produits de combustion n'entrent en contact direct avec l'air ambiant",
        "en": "To avoid combustion products coming into direct contact with the ambient air",
        "correct": true
       },
       {
        "fr": "Cela dépend uniquement des préférences esthétiques du client",
        "en": "It only depends on the client's aesthetic preferences",
        "correct": false
       },
       {
        "fr": "Un système renversé est toujours moins performant",
        "en": "An indirect system is always less efficient",
        "correct": false
       },
       {
        "fr": "Il n'y a jamais de raison particulière",
        "en": "There is never a particular reason",
        "correct": false
       }
      ]
     },
     {
      "fr": "Que doit-on vérifier après avoir réparé un système de chauffage direct ou renversé?",
      "en": "What should be checked after repairing a direct or indirect-fired heating system?",
      "choices": [
       {
        "fr": "Le bon fonctionnement et la sécurité de la combustion",
        "en": "Proper operation and combustion safety",
        "correct": true
       },
       {
        "fr": "Uniquement le prix d'achat de la pièce",
        "en": "Only the part's purchase price",
        "correct": false
       },
       {
        "fr": "Uniquement le prix d'achat de l'appareil",
        "en": "Only the appliance's purchase price",
        "correct": false
       },
       {
        "fr": "Uniquement la météo du jour",
        "en": "Only the day's weather",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "La ventilation des systèmes de chauffage à combustion est une question purement esthétique, sans lien avec la sécurité.",
      "en": "Ventilation of combustion heating systems is a purely aesthetic matter, unrelated to safety.",
      "isTrue": false
     }
    ]
   },
   {
    "level": 3,
    "questions": [
     {
      "fr": "Un système de chauffage direct présente un risque potentiel de monoxyde de carbone. Quelle est la bonne pratique?",
      "en": "A direct-fired heating system presents a potential carbon monoxide risk. What is the correct practice?",
      "choices": [
       {
        "fr": "Vérifier immédiatement la ventilation et la combustion, et installer un détecteur si nécessaire",
        "en": "Immediately checking ventilation and combustion, and installing a detector if necessary",
        "correct": true
       },
       {
        "fr": "Ignorer le risque potentiel",
        "en": "Ignoring the potential risk",
        "correct": false
       },
       {
        "fr": "Continuer le travail sans vérification",
        "en": "Continuing the work with no check",
        "correct": false
       },
       {
        "fr": "Reporter la vérification à plus tard",
        "en": "Postponing the check to later",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi le choix entre un système direct et renversé dépend-il souvent de l'usage du bâtiment?",
      "en": "Why does the choice between a direct and indirect system often depend on the building's use?",
      "choices": [
       {
        "fr": "Certains usages exigent une qualité d'air intérieur plus stricte que d'autres",
        "en": "Some uses require stricter indoor air quality than others",
        "correct": true
       },
       {
        "fr": "Cela ne concerne que les très gros chantiers commerciaux",
        "en": "It only concerns very large commercial job sites",
        "correct": false
       },
       {
        "fr": "Le choix ne dépend jamais de l'usage du bâtiment",
        "en": "The choice never depends on the building's use",
        "correct": false
       },
       {
        "fr": "Pour compliquer inutilement la conception",
        "en": "To needlessly complicate the design",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Le choix entre un système de chauffage direct et renversé n'a aucun lien avec la sécurité des occupants, seulement avec le coût d'installation.",
      "en": "The choice between a direct and indirect-fired heating system has no connection to occupant safety, only to installation cost.",
      "isTrue": false
     }
    ]
   }
  ]
 },
 {
  "id": "plomb16",
  "order": 16,
  "title_fr": "Installation et réparation de systèmes de chauffage périmétriques",
  "title_en": "Baseboard Heating System Installation and Repair",
  "icon": "🌡️",
  "tiers": [
   {
    "level": 1,
    "questions": [
     {
      "fr": "Qu'est-ce qu'un système de chauffage périmétrique?",
      "en": "What is a baseboard heating system?",
      "choices": [
       {
        "fr": "Un système de chauffage installé le long des murs, souvent à eau chaude",
        "en": "A heating system installed along the walls, often hot-water-based",
        "correct": true
       },
       {
        "fr": "Un système de climatisation central",
        "en": "A central air conditioning system",
        "correct": false
       },
       {
        "fr": "Un système de ventilation uniquement",
        "en": "A ventilation system only",
        "correct": false
       },
       {
        "fr": "Un système sans lien avec le chauffage",
        "en": "A system unrelated to heating",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi installer les plinthes chauffantes le long des murs extérieurs?",
      "en": "Why install baseboard heaters along exterior walls?",
      "choices": [
       {
        "fr": "Pour contrer efficacement les pertes de chaleur près des surfaces froides",
        "en": "To effectively counter heat loss near cold surfaces",
        "correct": true
       },
       {
        "fr": "C'est surtout une question de rapidité d'exécution, pas de sécurité",
        "en": "It's mainly a matter of speed, not safety",
        "correct": false
       },
       {
        "fr": "Pour réduire le coût des matériaux utilisés",
        "en": "To reduce the cost of the materials used",
        "correct": false
       },
       {
        "fr": "Seule la couleur des plinthes influence le confort de la pièce",
        "en": "Only the colour of the baseboard heaters affects room comfort",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Un système de chauffage périmétrique à eau chaude nécessite une circulation efficace du liquide dans les tuyaux.",
      "en": "A hot-water baseboard heating system requires efficient fluid circulation in the pipes.",
      "isTrue": true
     }
    ]
   },
   {
    "level": 2,
    "questions": [
     {
      "fr": "Pourquoi purger l'air d'un système de chauffage périmétrique à eau chaude?",
      "en": "Why bleed air from a hot-water baseboard heating system?",
      "choices": [
       {
        "fr": "De l'air emprisonné peut réduire l'efficacité du chauffage",
        "en": "Trapped air can reduce heating efficiency",
        "correct": true
       },
       {
        "fr": "Cela sert uniquement à respecter une habitude de l'entreprise",
        "en": "It's only meant to follow a company habit",
        "correct": false
       },
       {
        "fr": "Pour respecter une habitude sans lien avec la sécurité",
        "en": "To follow a habit unrelated to safety",
        "correct": false
       },
       {
        "fr": "L'air n'affecte jamais le système",
        "en": "Air never affects the system",
        "correct": false
       }
      ]
     },
     {
      "fr": "Que faire si une plinthe chauffante ne dégage plus assez de chaleur?",
      "en": "What should you do if a baseboard heater no longer produces enough heat?",
      "choices": [
       {
        "fr": "Vérifier la circulation d'eau, la purge d'air et l'état de l'élément chauffant",
        "en": "Checking water circulation, air bleeding and the heating element's condition",
        "correct": true
       },
       {
        "fr": "Remplacer la plinthe sans diagnostic",
        "en": "Replacing the baseboard heater with no diagnosis",
        "correct": false
       },
       {
        "fr": "Ignorer le problème",
        "en": "Ignoring the problem",
        "correct": false
       },
       {
        "fr": "Augmenter la température ailleurs pour compenser",
        "en": "Increasing the temperature elsewhere to compensate",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "L'entretien d'un système de chauffage périmétrique peut inclure le nettoyage des ailettes de la plinthe.",
      "en": "Maintaining a baseboard heating system can include cleaning the baseboard's fins.",
      "isTrue": true
     }
    ]
   },
   {
    "level": 3,
    "questions": [
     {
      "fr": "Une pièce chauffée par plinthes périmétriques montre une répartition inégale de la chaleur. Quelle est une cause possible?",
      "en": "A room heated by baseboard heaters shows uneven heat distribution. What is a possible cause?",
      "choices": [
       {
        "fr": "Un déséquilibrage du système de circulation ou de l'air emprisonné dans certaines sections",
        "en": "An imbalance in the circulation system or trapped air in certain sections",
        "correct": true
       },
       {
        "fr": "La couleur des plinthes",
        "en": "The colour of the baseboard heaters",
        "correct": false
       },
       {
        "fr": "Le prix de l'installation",
        "en": "The price of the installation",
        "correct": false
       },
       {
        "fr": "Un mauvais calibrage du thermostat de la pièce",
        "en": "Incorrect calibration of the room's thermostat",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi le dimensionnement correct des plinthes chauffantes est-il important lors de la conception d'un système?",
      "en": "Why is correctly sizing baseboard heaters important when designing a system?",
      "choices": [
       {
        "fr": "Pour assurer un confort thermique adéquat dans chaque pièce",
        "en": "To ensure adequate thermal comfort in each room",
        "correct": true
       },
       {
        "fr": "Cela ne concerne que les installations les plus anciennes",
        "en": "It only concerns the oldest installations",
        "correct": false
       },
       {
        "fr": "La taille des plinthes n'affecte jamais le confort",
        "en": "Baseboard heater size never affects comfort",
        "correct": false
       },
       {
        "fr": "Pour respecter une préférence esthétique sans lien technique",
        "en": "To follow an aesthetic preference with no technical basis",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Le confort thermique dans une pièce chauffée par plinthes dépend uniquement de la température extérieure, jamais de la qualité de l'installation.",
      "en": "Thermal comfort in a room heated by baseboard heaters depends only on the outdoor temperature, never on installation quality.",
      "isTrue": false
     }
    ]
   }
  ]
 },
 {
  "id": "plomb17",
  "order": 17,
  "title_fr": "Installation de systèmes alimentés au gaz",
  "title_en": "Gas-Fired System Installation",
  "icon": "🔥",
  "tiers": [
   {
    "level": 1,
    "questions": [
     {
      "fr": "Quel type de gaz est couramment utilisé pour le chauffage résidentiel au Québec?",
      "en": "What type of gas is commonly used for residential heating in Quebec?",
      "choices": [
       {
        "fr": "Le gaz naturel ou le propane",
        "en": "Natural gas or propane",
        "correct": true
       },
       {
        "fr": "L'oxygène pur",
        "en": "Pure oxygen",
        "correct": false
       },
       {
        "fr": "L'hydrogène pur",
        "en": "Pure hydrogen",
        "correct": false
       },
       {
        "fr": "Le propane liquide",
        "en": "Liquid propane",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi vérifier l'absence de fuite après avoir installé une conduite de gaz?",
      "en": "Why check for the absence of leaks after installing a gas line?",
      "choices": [
       {
        "fr": "En raison du risque d'explosion ou d'incendie lié à une fuite de gaz",
        "en": "Due to the explosion or fire risk associated with a gas leak",
        "correct": true
       },
       {
        "fr": "C'est une exigence propre à certains fabricants seulement",
        "en": "It's a requirement specific to certain manufacturers only",
        "correct": false
       },
       {
        "fr": "Pour respecter une préférence esthétique du client",
        "en": "To meet a client's aesthetic preference",
        "correct": false
       },
       {
        "fr": "Le risque ne concerne que les fuites de grande ampleur, jamais les petites fuites",
        "en": "The risk only concerns large leaks, never small ones",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Une solution savonneuse peut être utilisée pour détecter une fuite de gaz à un raccord.",
      "en": "A soap solution can be used to detect a gas leak at a fitting.",
      "isTrue": true
     }
    ]
   },
   {
    "level": 2,
    "questions": [
     {
      "fr": "Pourquoi une certification particulière est-elle souvent requise pour travailler sur des systèmes au gaz?",
      "en": "Why is particular certification often required to work on gas systems?",
      "choices": [
       {
        "fr": "En raison des risques élevés liés à une installation ou réparation incorrecte",
        "en": "Due to the high risks associated with incorrect installation or repair",
        "correct": true
       },
       {
        "fr": "Cela dépend uniquement des préférences esthétiques du client",
        "en": "It only depends on the client's aesthetic preferences",
        "correct": false
       },
       {
        "fr": "Une certification est requise uniquement pour les chantiers industriels, jamais résidentiels",
        "en": "Certification is only required on industrial sites, never residential ones",
        "correct": false
       },
       {
        "fr": "Pour compliquer inutilement le métier",
        "en": "To needlessly complicate the trade",
        "correct": false
       }
      ]
     },
     {
      "fr": "Que doit-on faire immédiatement si une odeur de gaz est détectée sur un chantier?",
      "en": "What should be done immediately if a gas odour is detected on a job site?",
      "choices": [
       {
        "fr": "Couper l'alimentation en gaz, évacuer la zone et suivre les procédures d'urgence",
        "en": "Shutting off the gas supply, evacuating the area and following emergency procedures",
        "correct": true
       },
       {
        "fr": "Continuer le travail normalement",
        "en": "Continuing the work normally",
        "correct": false
       },
       {
        "fr": "Ignorer l'odeur",
        "en": "Ignoring the odour",
        "correct": false
       },
       {
        "fr": "Allumer une flamme pour vérifier la source",
        "en": "Lighting a flame to check the source",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Les systèmes alimentés au gaz doivent respecter des codes de sécurité stricts en raison des risques associés.",
      "en": "Gas-fired systems must comply with strict safety codes due to the associated risks.",
      "isTrue": true
     }
    ]
   },
   {
    "level": 3,
    "questions": [
     {
      "fr": "Un test de pression sur une nouvelle conduite de gaz révèle une légère chute de pression. Quelle est la bonne pratique?",
      "en": "A pressure test on a new gas line reveals a slight pressure drop. What is the correct practice?",
      "choices": [
       {
        "fr": "Identifier et corriger la fuite avant de mettre le système en service",
        "en": "Identifying and fixing the leak before putting the system into service",
        "correct": true
       },
       {
        "fr": "Ignorer la chute de pression si elle semble minime",
        "en": "Ignoring the pressure drop if it seems minor",
        "correct": false
       },
       {
        "fr": "Mettre le système en service quand même",
        "en": "Putting the system into service anyway",
        "correct": false
       },
       {
        "fr": "Deviner la cause sans investigation",
        "en": "Guessing at the cause with no investigation",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi l'installation de systèmes au gaz comporte-t-elle une responsabilité professionnelle particulièrement élevée?",
      "en": "Why does installing gas systems carry a particularly high professional responsibility?",
      "choices": [
       {
        "fr": "Une erreur peut avoir des conséquences graves pour la sécurité des occupants du bâtiment",
        "en": "An error can have serious consequences for the safety of building occupants",
        "correct": true
       },
       {
        "fr": "La responsabilité revient uniquement au fabricant de l'équipement",
        "en": "Responsibility falls solely on the equipment manufacturer",
        "correct": false
       },
       {
        "fr": "Le risque ne concerne que les très vieilles installations au gaz",
        "en": "The risk only concerns very old gas installations",
        "correct": false
       },
       {
        "fr": "Pour suivre une habitude sans fondement technique",
        "en": "To follow a habit with no technical basis",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Le respect des codes de sécurité pour les systèmes alimentés au gaz est optionnel lorsque l'installateur a beaucoup d'expérience.",
      "en": "Complying with safety codes for gas-fired systems is optional when the installer is very experienced.",
      "isTrue": false
     }
    ]
   }
  ]
 },
 {
  "id": "plomb18",
  "order": 18,
  "title_fr": "Installation et réparation de systèmes de chauffage par rayonnement",
  "title_en": "Radiant Heating System Installation and Repair",
  "icon": "☀️",
  "tiers": [
   {
    "level": 1,
    "questions": [
     {
      "fr": "Qu'est-ce qu'un système de chauffage par rayonnement?",
      "en": "What is a radiant heating system?",
      "choices": [
       {
        "fr": "Un système qui chauffe les surfaces (souvent le plancher) qui rayonnent ensuite la chaleur dans la pièce",
        "en": "A system that heats surfaces (often the floor), which then radiate heat into the room",
        "correct": true
       },
       {
        "fr": "Un système qui chauffe uniquement l'air ambiant par soufflage",
        "en": "A system that only heats the ambient air by blowing",
        "correct": false
       },
       {
        "fr": "Un système de climatisation",
        "en": "An air conditioning system",
        "correct": false
       },
       {
        "fr": "Un système sans lien avec le chauffage",
        "en": "A system unrelated to heating",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi le chauffage radiant au plancher est-il apprécié pour son confort?",
      "en": "Why is radiant floor heating appreciated for its comfort?",
      "choices": [
       {
        "fr": "Il offre une chaleur uniforme sans les courants d'air associés au chauffage soufflé",
        "en": "It provides uniform heat without the drafts associated with forced-air heating",
        "correct": true
       },
       {
        "fr": "Cela n'a aucun avantage particulier",
        "en": "It has no particular advantage",
        "correct": false
       },
       {
        "fr": "Il est toujours moins confortable que les autres systèmes",
        "en": "It is always less comfortable than other systems",
        "correct": false
       },
       {
        "fr": "Le confort n'a aucun lien avec le type de chauffage",
        "en": "Comfort has no connection to the type of heating",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Un système de chauffage radiant au plancher utilise souvent des tuyaux installés sous la surface du plancher.",
      "en": "A radiant floor heating system often uses pipes installed beneath the floor surface.",
      "isTrue": true
     }
    ]
   },
   {
    "level": 2,
    "questions": [
     {
      "fr": "Pourquoi tester l'étanchéité d'un circuit de chauffage radiant avant de couler le plancher final?",
      "en": "Why test a radiant heating circuit's watertightness before pouring the final floor?",
      "choices": [
       {
        "fr": "Pour détecter toute fuite avant qu'elle ne devienne difficile et coûteuse à réparer",
        "en": "To detect any leak before it becomes difficult and costly to repair",
        "correct": true
       },
       {
        "fr": "C'est surtout utile pour accélérer la facturation",
        "en": "It's mainly useful for speeding up billing",
        "correct": false
       },
       {
        "fr": "Uniquement pour suivre une habitude de l'entreprise",
        "en": "Only to follow a company habit",
        "correct": false
       },
       {
        "fr": "Le test n'est nécessaire que pour les systèmes commerciaux, jamais résidentiels",
        "en": "Testing is only necessary for commercial systems, never residential ones",
        "correct": false
       }
      ]
     },
     {
      "fr": "Que doit-on vérifier après avoir réparé un circuit de chauffage radiant?",
      "en": "What should be checked after repairing a radiant heating circuit?",
      "choices": [
       {
        "fr": "La pression du circuit et l'absence de nouvelles fuites",
        "en": "The circuit's pressure and the absence of new leaks",
        "correct": true
       },
       {
        "fr": "Uniquement la marque du fabricant",
        "en": "Only the manufacturer's brand",
        "correct": false
       },
       {
        "fr": "Uniquement le type de revêtement final choisi",
        "en": "Only the type of final floor covering chosen",
        "correct": false
       },
       {
        "fr": "Uniquement le nombre d'employés présents sur le chantier",
        "en": "Only the number of employees on site",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Un système de chauffage radiant peut être alimenté par différentes sources d'énergie (électricité, eau chaude).",
      "en": "A radiant heating system can be powered by different energy sources (electricity, hot water).",
      "isTrue": true
     }
    ]
   },
   {
    "level": 3,
    "questions": [
     {
      "fr": "Un système de chauffage radiant installé sous un plancher fini présente une fuite difficile à localiser. Quelle est une bonne pratique?",
      "en": "A radiant heating system installed under a finished floor has a leak that's hard to locate. What is a good practice?",
      "choices": [
       {
        "fr": "Utiliser des outils spécialisés (caméra thermique, détection de pression) pour localiser précisément la fuite",
        "en": "Using specialized tools (thermal camera, pressure detection) to precisely locate the leak",
        "correct": true
       },
       {
        "fr": "Démolir tout le plancher sans localisation précise",
        "en": "Demolishing the entire floor with no precise location",
        "correct": false
       },
       {
        "fr": "Ignorer la fuite si elle semble mineure",
        "en": "Ignoring the leak if it seems minor",
        "correct": false
       },
       {
        "fr": "Deviner l'emplacement sans vérification",
        "en": "Guessing at the location with no verification",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi l'installation de systèmes de chauffage par rayonnement exige-t-elle une planification particulièrement rigoureuse?",
      "en": "Why does installing radiant heating systems require particularly rigorous planning?",
      "choices": [
       {
        "fr": "Une fois le plancher fini installé, les réparations deviennent complexes et coûteuses",
        "en": "Once the finished floor is installed, repairs become complex and costly",
        "correct": true
       },
       {
        "fr": "Cela ne concerne que les très gros chantiers commerciaux",
        "en": "It only concerns very large commercial job sites",
        "correct": false
       },
       {
        "fr": "Les réparations sont toujours faciles peu importe l'installation",
        "en": "Repairs are always easy regardless of the installation",
        "correct": false
       },
       {
        "fr": "Pour respecter une exigence purement esthétique",
        "en": "To meet a purely aesthetic requirement",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Une fois le plancher fini installé sur un système radiant, les réparations éventuelles sont toujours simples et peu coûteuses, peu importe la qualité de l'installation initiale.",
      "en": "Once the finished floor is installed over a radiant system, any repairs are always simple and inexpensive, regardless of the initial installation quality.",
      "isTrue": false
     }
    ]
   }
  ]
 },
 {
  "id": "plomb19",
  "order": 19,
  "title_fr": "Installation et réparation de systèmes à vapeur à basse pression",
  "title_en": "Low-Pressure Steam System Installation and Repair",
  "icon": "🌫️",
  "tiers": [
   {
    "level": 1,
    "questions": [
     {
      "fr": "Qu'est-ce qu'un système de chauffage à vapeur à basse pression?",
      "en": "What is a low-pressure steam heating system?",
      "choices": [
       {
        "fr": "Un système qui utilise de la vapeur d'eau à basse pression pour transporter la chaleur",
        "en": "A system that uses low-pressure steam to carry heat",
        "correct": true
       },
       {
        "fr": "Un système de climatisation",
        "en": "An air conditioning system",
        "correct": false
       },
       {
        "fr": "Un système de ventilation uniquement",
        "en": "A ventilation system only",
        "correct": false
       },
       {
        "fr": "Un système sans lien avec le chauffage",
        "en": "A system unrelated to heating",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi la sécurité est-elle particulièrement importante avec les systèmes à vapeur?",
      "en": "Why is safety particularly important with steam systems?",
      "choices": [
       {
        "fr": "La vapeur à haute température peut causer des brûlures graves",
        "en": "High-temperature steam can cause serious burns",
        "correct": true
       },
       {
        "fr": "C'est surtout une question de rapidité d'exécution, pas de sécurité",
        "en": "It's mainly a matter of speed, not safety",
        "correct": false
       },
       {
        "fr": "Le risque ne concerne que les chaudières industrielles, jamais résidentielles",
        "en": "The risk only concerns industrial boilers, never residential ones",
        "correct": false
       },
       {
        "fr": "Uniquement pour suivre une préférence personnelle",
        "en": "Only to follow a personal preference",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Un système à vapeur utilise généralement une chaudière pour produire la vapeur nécessaire au chauffage.",
      "en": "A steam system generally uses a boiler to produce the steam needed for heating.",
      "isTrue": true
     }
    ]
   },
   {
    "level": 2,
    "questions": [
     {
      "fr": "Pourquoi vérifier le fonctionnement des soupapes de sécurité sur un système à vapeur?",
      "en": "Why check the operation of safety valves on a steam system?",
      "choices": [
       {
        "fr": "Pour prévenir une surpression dangereuse dans le système",
        "en": "To prevent dangerous overpressure in the system",
        "correct": true
       },
       {
        "fr": "Cela sert uniquement à respecter une habitude de l'entreprise",
        "en": "It's only meant to follow a company habit",
        "correct": false
       },
       {
        "fr": "Uniquement pour prolonger la durée de la visite d'entretien",
        "en": "Only to lengthen the maintenance visit",
        "correct": false
       },
       {
        "fr": "Les soupapes de sécurité ne sont utiles que sur les très vieux systèmes",
        "en": "Safety valves are only useful on very old systems",
        "correct": false
       }
      ]
     },
     {
      "fr": "Que faire si un radiateur à vapeur ne chauffe pas uniformément?",
      "en": "What should you do if a steam radiator doesn't heat evenly?",
      "choices": [
       {
        "fr": "Vérifier la purge d'air et l'inclinaison du radiateur",
        "en": "Checking the air vent and the radiator's tilt",
        "correct": true
       },
       {
        "fr": "Remplacer le radiateur sans diagnostic",
        "en": "Replacing the radiator with no diagnosis",
        "correct": false
       },
       {
        "fr": "Ignorer le problème",
        "en": "Ignoring the problem",
        "correct": false
       },
       {
        "fr": "Augmenter la pression de la chaudière sans vérification",
        "en": "Increasing the boiler pressure with no verification",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Les systèmes à vapeur à basse pression nécessitent un entretien régulier de la chaudière et des composants associés.",
      "en": "Low-pressure steam systems require regular maintenance of the boiler and associated components.",
      "isTrue": true
     }
    ]
   },
   {
    "level": 3,
    "questions": [
     {
      "fr": "Un système à vapeur ancien présente des signes de corrosion sur certains composants. Quelle est la bonne pratique?",
      "en": "An old steam system shows signs of corrosion on certain components. What is the correct practice?",
      "choices": [
       {
        "fr": "Évaluer sérieusement l'ampleur du problème et remplacer les composants compromis avant qu'ils ne deviennent dangereux",
        "en": "Seriously assessing the extent of the problem and replacing compromised components before they become dangerous",
        "correct": true
       },
       {
        "fr": "Ignorer la corrosion si le système fonctionne encore",
        "en": "Ignoring the corrosion if the system still works",
        "correct": false
       },
       {
        "fr": "Continuer à utiliser le système sans vérification",
        "en": "Continuing to use the system with no check",
        "correct": false
       },
       {
        "fr": "Peindre par-dessus la corrosion sans réparation",
        "en": "Painting over the corrosion with no repair",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi les systèmes à vapeur exigent-ils une expertise particulière par rapport aux systèmes à eau chaude?",
      "en": "Why do steam systems require particular expertise compared to hot-water systems?",
      "choices": [
       {
        "fr": "La gestion de la pression et de la sécurité y est plus complexe et critique",
        "en": "Managing pressure and safety is more complex and critical",
        "correct": true
       },
       {
        "fr": "Cela ne concerne que les installations les plus anciennes",
        "en": "It only concerns the oldest installations",
        "correct": false
       },
       {
        "fr": "Les systèmes à vapeur sont toujours plus simples",
        "en": "Steam systems are always simpler",
        "correct": false
       },
       {
        "fr": "Pour compliquer inutilement le travail",
        "en": "To needlessly complicate the work",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Les systèmes à vapeur à basse pression ont complètement disparu des bâtiments au Québec et ne sont plus jamais rencontrés dans ce métier.",
      "en": "Low-pressure steam systems have completely disappeared from buildings in Quebec and are never encountered anymore in this trade.",
      "isTrue": false
     }
    ]
   }
  ]
 },
 {
  "id": "plomb20",
  "order": 20,
  "title_fr": "Organismes de l'industrie de la construction",
  "title_en": "Construction Industry Organizations",
  "icon": "🏛️",
  "tiers": [
   {
    "level": 1,
    "questions": [
     {
      "fr": "Quel organisme régit les normes et la formation en construction au Québec?",
      "en": "What organization governs standards and training in construction in Quebec?",
      "choices": [
       {
        "fr": "La Commission de la construction du Québec (CCQ)",
        "en": "The Commission de la construction du Québec (CCQ)",
        "correct": true
       },
       {
        "fr": "Aucun organisme ne régit la construction",
        "en": "No organization governs construction",
        "correct": false
       },
       {
        "fr": "Uniquement le ministère de la Santé",
        "en": "Only the Ministry of Health",
        "correct": false
       },
       {
        "fr": "Uniquement les municipalités",
        "en": "Only municipalities",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi connaître les organismes de l'industrie de la construction est-il utile pour un futur travailleur?",
      "en": "Why is knowing the construction industry's organizations useful for a future worker?",
      "choices": [
       {
        "fr": "Pour comprendre ses droits, obligations et le cadre réglementaire du métier",
        "en": "To understand your rights, obligations and the trade's regulatory framework",
        "correct": true
       },
       {
        "fr": "Cela sert uniquement à respecter une habitude sans lien avec la sécurité",
        "en": "It only serves to follow a habit unrelated to safety",
        "correct": false
       },
       {
        "fr": "Uniquement pour respecter une formalité administrative",
        "en": "Only to comply with an administrative formality",
        "correct": false
       },
       {
        "fr": "Ces organismes n'ont aucun lien avec le métier",
        "en": "These organizations have no connection to the trade",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "La CCQ encadre notamment les conditions de travail et la qualification de la main-d'œuvre en construction.",
      "en": "The CCQ oversees, among other things, working conditions and workforce qualification in construction.",
      "isTrue": true
     }
    ]
   },
   {
    "level": 2,
    "questions": [
     {
      "fr": "Pourquoi certains organismes de l'industrie exigent-ils une carte de compétence pour travailler sur un chantier?",
      "en": "Why do some industry organizations require a competency card to work on a job site?",
      "choices": [
       {
        "fr": "Pour s'assurer que les travailleurs possèdent la formation et les qualifications requises",
        "en": "To ensure workers have the required training and qualifications",
        "correct": true
       },
       {
        "fr": "C'est une exigence propre à certains fabricants seulement",
        "en": "It's a requirement specific to certain manufacturers only",
        "correct": false
       },
       {
        "fr": "Pour compliquer inutilement l'accès aux chantiers",
        "en": "To needlessly complicate access to job sites",
        "correct": false
       },
       {
        "fr": "Une qualification n'est exigée que pour les très grands chantiers",
        "en": "Qualification is only required on very large job sites",
        "correct": false
       }
      ]
     },
     {
      "fr": "Quel rôle jouent les associations professionnelles dans le domaine de la plomberie et du chauffage?",
      "en": "What role do professional associations play in plumbing and heating?",
      "choices": [
       {
        "fr": "Elles offrent du soutien, de la formation continue et représentent les intérêts du métier",
        "en": "They offer support, continuing education and represent the trade's interests",
        "correct": true
       },
       {
        "fr": "Elles n'ont aucun rôle particulier",
        "en": "They have no particular role",
        "correct": false
       },
       {
        "fr": "Elles empêchent toujours les travailleurs de progresser",
        "en": "They always prevent workers from progressing",
        "correct": false
       },
       {
        "fr": "Elles remplacent complètement la formation initiale",
        "en": "They completely replace initial training",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Comprendre le rôle des différents organismes aide à mieux naviguer sa carrière dans l'industrie de la construction.",
      "en": "Understanding the role of different organizations helps better navigate a career in the construction industry.",
      "isTrue": true
     }
    ]
   },
   {
    "level": 3,
    "questions": [
     {
      "fr": "Un nouveau travailleur ne comprend pas pourquoi il doit obtenir certaines cartes de compétence avant de commencer sur un chantier. Quelle est la bonne explication?",
      "en": "A new worker doesn't understand why they need certain competency cards before starting on a job site. What is the correct explanation?",
      "choices": [
       {
        "fr": "Ces cartes garantissent que le travailleur répond aux exigences de sécurité et de qualification de l'industrie",
        "en": "These cards guarantee the worker meets the industry's safety and qualification requirements",
        "correct": true
       },
       {
        "fr": "Les cartes n'ont aucune utilité réelle",
        "en": "The cards have no real use",
        "correct": false
       },
       {
        "fr": "C'est uniquement une formalité administrative sans importance",
        "en": "It's only an unimportant administrative formality",
        "correct": false
       },
       {
        "fr": "Les cartes ralentissent inutilement l'entrée sur le marché du travail",
        "en": "The cards needlessly slow down entry into the job market",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi une bonne connaissance des organismes de l'industrie facilite-t-elle l'intégration professionnelle?",
      "en": "Why does good knowledge of industry organizations facilitate professional integration?",
      "choices": [
       {
        "fr": "Elle permet de mieux comprendre les démarches administratives et les ressources disponibles",
        "en": "It helps better understand administrative procedures and available resources",
        "correct": true
       },
       {
        "fr": "Cela n'est utile que pour les chantiers commerciaux, jamais résidentiels",
        "en": "It's only useful on commercial sites, never residential ones",
        "correct": false
       },
       {
        "fr": "Ces organismes n'ont aucun lien avec l'intégration professionnelle",
        "en": "These organizations have no connection to professional integration",
        "correct": false
       },
       {
        "fr": "Pour compliquer inutilement les démarches",
        "en": "To needlessly complicate the procedures",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Le cadre réglementaire de la construction n'a aucune influence sur le début de carrière d'un nouveau travailleur; seule l'expérience compte.",
      "en": "The construction regulatory framework has no influence on a new worker's career start; only experience matters.",
      "isTrue": false
     }
    ]
   }
  ]
 },
 {
  "id": "plomb21",
  "order": 21,
  "title_fr": "Recherche d'emploi",
  "title_en": "Job Search",
  "icon": "📄",
  "tiers": [
   {
    "level": 1,
    "questions": [
     {
      "fr": "Quel document présente généralement le parcours et les compétences d'un candidat?",
      "en": "Which document generally presents a candidate's background and skills?",
      "choices": [
       {
        "fr": "Un curriculum vitae (CV)",
        "en": "A résumé (CV)",
        "correct": true
       },
       {
        "fr": "Une carte postale",
        "en": "A postcard",
        "correct": false
       },
       {
        "fr": "Un reçu de caisse",
        "en": "A sales receipt",
        "correct": false
       },
       {
        "fr": "Une facture",
        "en": "An invoice",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi mentionner ses cartes de compétence (CCQ) sur son CV en plomberie et chauffage?",
      "en": "Why mention your competency cards (CCQ) on your résumé in plumbing and heating?",
      "choices": [
       {
        "fr": "Pour démontrer sa qualification aux employeurs potentiels",
        "en": "To demonstrate your qualifications to potential employers",
        "correct": true
       },
       {
        "fr": "Cela dépend uniquement des préférences esthétiques du client",
        "en": "It only depends on the client's aesthetic preferences",
        "correct": false
       },
       {
        "fr": "Uniquement pour respecter une formalité sans réelle utilité",
        "en": "Only to comply with a formality with no real use",
        "correct": false
       },
       {
        "fr": "Les certifications n'ont d'importance que pour obtenir un premier emploi",
        "en": "Certifications only matter for getting a first job",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Se préparer avant une entrevue d'embauche augmente les chances de succès.",
      "en": "Preparing before a job interview increases the chances of success.",
      "isTrue": true
     }
    ]
   },
   {
    "level": 2,
    "questions": [
     {
      "fr": "Lors d'une entrevue, pourquoi est-il utile de préparer des exemples concrets de projets réalisés en stage?",
      "en": "During an interview, why is it useful to prepare concrete examples of projects completed during an internship?",
      "choices": [
       {
        "fr": "Pour démontrer clairement ses compétences pratiques à l'employeur",
        "en": "To clearly demonstrate your practical skills to the employer",
        "correct": true
       },
       {
        "fr": "C'est surtout utile pour accélérer la facturation",
        "en": "It's mainly useful for speeding up billing",
        "correct": false
       },
       {
        "fr": "Pour allonger inutilement l'entrevue",
        "en": "To needlessly lengthen the interview",
        "correct": false
       },
       {
        "fr": "Pour impressionner sans preuve",
        "en": "To impress without proof",
        "correct": false
       }
      ]
     },
     {
      "fr": "Quels outils peuvent aider à trouver des offres d'emploi en plomberie et chauffage?",
      "en": "Which tools can help find plumbing and heating job postings?",
      "choices": [
       {
        "fr": "Les sites d'emploi, le réseau professionnel et les entrepreneurs locaux",
        "en": "Job sites, professional networking and local contractors",
        "correct": true
       },
       {
        "fr": "Aucun outil n'est utile",
        "en": "No tool is useful",
        "correct": false
       },
       {
        "fr": "Uniquement les journaux imprimés",
        "en": "Only printed newspapers",
        "correct": false
       },
       {
        "fr": "Uniquement le bouche-à-oreille sans autre démarche",
        "en": "Only word of mouth with no other approach",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Un suivi après une entrevue est généralement perçu négativement par les employeurs et nuit aux chances d'obtenir le poste.",
      "en": "A follow-up after an interview is generally seen negatively by employers and hurts the candidate's chances of getting the job.",
      "isTrue": false
     }
    ]
   },
   {
    "level": 3,
    "questions": [
     {
      "fr": "Un employeur pose une question difficile sur une lacune du CV pendant l'entrevue. Quelle est la bonne attitude?",
      "en": "An employer asks a difficult question about a gap in the résumé during the interview. What is the right attitude?",
      "choices": [
       {
        "fr": "Répondre honnêtement et de façon posée, en mettant l'accent sur les apprentissages tirés",
        "en": "Answering honestly and calmly, emphasizing lessons learned",
        "correct": true
       },
       {
        "fr": "Éviter complètement la question",
        "en": "Completely avoiding the question",
        "correct": false
       },
       {
        "fr": "Mentir pour paraître parfait",
        "en": "Lying to appear perfect",
        "correct": false
       },
       {
        "fr": "Se fâcher contre l'employeur",
        "en": "Getting upset with the employer",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi est-il utile de rechercher de l'information sur un entrepreneur avant une entrevue?",
      "en": "Why is it useful to research a contractor before an interview?",
      "choices": [
       {
        "fr": "Pour montrer un intérêt sincère et poser des questions pertinentes",
        "en": "To show genuine interest and ask relevant questions",
        "correct": true
       },
       {
        "fr": "Cela sert uniquement à respecter une habitude sans lien avec la sécurité",
        "en": "It only serves to follow a habit unrelated to safety",
        "correct": false
       },
       {
        "fr": "Pour perdre du temps",
        "en": "To waste time",
        "correct": false
       },
       {
        "fr": "Pour compliquer sa préparation",
        "en": "To complicate your preparation",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Une bonne recherche d'emploi combine préparation, réseautage et suivi rigoureux des candidatures.",
      "en": "A good job search combines preparation, networking and rigorous follow-up on applications.",
      "isTrue": true
     }
    ]
   }
  ]
 }
];

const UI_TEXT = {
  fr: {
    appName: "PlomberieQuest",
    tagline: "Deviens chef d'équipe plomberie — DEP 5333",
    start: "Commencer l'aventure",
    yourName: "Ton prénom",
    chooseAvatar: "Choisis ton avatar",
    map: "Mon parcours",
    badges: "Badges",
    trophies: "Trophées",
    leaderboard: "Palmarès",
    profile: "Profil",
    level: "Niveau",
    xp: "XP",
    locked: "Verrouillé",
    completeToUnlock: "Termine la quête précédente pour déverrouiller",
    startQuest: "Démarrer la quête",
    retryQuest: "Reprendre la quête",
    question: "Question",
    of: "sur",
    submit: "Valider",
    next: "Suivant",
    finish: "Terminer",
    correct: "Bonne réponse!",
    incorrect: "Ce n'est pas ça...",
    questResult: "Résultat de la quête",
    score: "Score",
    passed: "Quête réussie! Badge débloqué 🎉",
    failed: "Pas encore réussi — réessaie pour débloquer le badge (seuil: 70%)",
    backToMap: "Retour à la carte",
    newBadge: "Nouveau badge!",
    newTrophy: "Nouveau trophée!",
    hours: "heures",
    switchLang: "EN",
    resetProgress: "Réinitialiser tout",
    confirmReset: "Tout réinitialiser? Ton avatar, tes badges, trophées et toute ta progression seront effacés. Cette action est irréversible.",
    installApp: "Installer l'application",
    rank: "Rang",
    you: "Toi",
    leaderboardNote: "Classement local (démo) — un vrai palmarès de classe nécessite un serveur partagé.",
    completedQuests: "quêtes complétées",
    chooseVehicle: "Choisis ta machine",
    myVehicle: "Ta machine",
    vehicleGrows: "Évolue avec ton expérience",
    maxSize: "Taille maximale atteinte!",
    trueLabel: "Vrai",
    falseLabel: "Faux",
    tfPrompt: "Vrai ou faux?",
    masteredLabel: "compétences maîtrisées",
    tierLabel: "Palier",
    matchPrompt: "Touche un terme, puis sa définition qui correspond.",
    scenarioLabel: "Mise en situation",
    masteryUnlocked: "Compétence maîtrisée!",
    accessCodeTitle: "Code d'accès",
    accessCodePrompt: "Entre le code d'accès fourni par ton enseignant pour continuer.",
    accessCodeTrialOver: "Ton essai gratuit de 7 jours est terminé. Entre le code d'accès fourni par ton centre de formation pour continuer.",
    accessCodePlaceholder: "Code d'accès",
    accessCodeSubmit: "Valider",
    accessCodeChecking: "Vérification...",
    accessCodeInvalid: "Code invalide ou inactif. Vérifie auprès de ton enseignant.",
    accessCodeOffline: "Connexion Internet requise pour valider ton code la première fois. Réessaie une fois connecté.",
    accessCodeNotConfigured: "L'application n'est pas encore configurée. Contacte ton enseignant.",
    welcomeHeading: "Comment ça marche",
    welcomeIntro: "Avant de commencer, voici un survol rapide de l'application.",
    welcomeSteps: [
      { icon: "🗺️", title: "Mon parcours", text: "Chaque compétence du programme est une quête sur la carte. Termine-les dans l'ordre pour avancer." },
      { icon: "📝", title: "Questions", text: "Réponds à des questions à choix multiples et vrai/faux liées à chaque compétence." },
      { icon: "🎖️", title: "Badges", text: "Réussis une quête à 70% ou plus pour débloquer son badge." },
      { icon: "🏆", title: "Trophées", text: "Décroche des trophées spéciaux pour tes exploits et ta progression." },
      { icon: "📊", title: "Palmarès", text: "Compare ton avancement avec celui du reste de la classe." },
      { icon: "👷", title: "Ton avatar", text: "Choisis ton avatar — il évolue à mesure que tu gagnes de l'expérience." }
    ]
  },
  en: {
    appName: "PlomberieQuest",
    tagline: "Become a plumbing team lead — DVS 5333",
    start: "Start the adventure",
    yourName: "Your first name",
    chooseAvatar: "Choose your avatar",
    map: "My path",
    badges: "Badges",
    trophies: "Trophies",
    leaderboard: "Leaderboard",
    profile: "Profile",
    level: "Level",
    xp: "XP",
    locked: "Locked",
    completeToUnlock: "Complete the previous quest to unlock",
    startQuest: "Start quest",
    retryQuest: "Retry quest",
    question: "Question",
    of: "of",
    submit: "Submit",
    next: "Next",
    finish: "Finish",
    correct: "Correct!",
    incorrect: "Not quite...",
    questResult: "Quest Result",
    score: "Score",
    passed: "Quest passed! Badge unlocked 🎉",
    failed: "Not passed yet — try again to unlock the badge (threshold: 70%)",
    backToMap: "Back to map",
    newBadge: "New badge!",
    newTrophy: "New trophy!",
    hours: "hours",
    switchLang: "FR",
    resetProgress: "Reset everything",
    confirmReset: "Reset everything? Your avatar, badges, trophies and all progress will be erased. This cannot be undone.",
    installApp: "Install the app",
    rank: "Rank",
    you: "You",
    leaderboardNote: "Local (demo) ranking — a real class leaderboard needs a shared server.",
    completedQuests: "quests completed",
    chooseVehicle: "Choose your machine",
    myVehicle: "Your machine",
    vehicleGrows: "Evolves with your experience",
    maxSize: "Maximum size reached!",
    trueLabel: "True",
    falseLabel: "False",
    tfPrompt: "True or false?",
    masteredLabel: "competencies mastered",
    tierLabel: "Tier",
    matchPrompt: "Tap a term, then its matching definition.",
    scenarioLabel: "Scenario",
    masteryUnlocked: "Competency mastered!",
    accessCodeTitle: "Access code",
    accessCodePrompt: "Enter the access code given by your teacher to continue.",
    accessCodeTrialOver: "Your free 7-day trial has ended. Enter the access code provided by your training center to continue.",
    accessCodePlaceholder: "Access code",
    accessCodeSubmit: "Submit",
    accessCodeChecking: "Checking...",
    accessCodeInvalid: "Invalid or inactive code. Check with your teacher.",
    accessCodeOffline: "Internet connection required to validate your code the first time. Try again once connected.",
    accessCodeNotConfigured: "The app isn't configured yet. Contact your teacher.",
    welcomeHeading: "How it works",
    welcomeIntro: "Before you start, here's a quick overview of the app.",
    welcomeSteps: [
      { icon: "🗺️", title: "My path", text: "Each program competency is a quest on the map. Complete them in order to move forward." },
      { icon: "📝", title: "Questions", text: "Answer multiple-choice and true/false questions tied to each competency." },
      { icon: "🎖️", title: "Badges", text: "Pass a quest with 70% or more to unlock its badge." },
      { icon: "🏆", title: "Trophies", text: "Earn special trophies for your achievements and progress." },
      { icon: "📊", title: "Leaderboard", text: "Compare your progress with the rest of the class." },
      { icon: "👷", title: "Your avatar", text: "Choose your avatar — it evolves as you earn experience." }
    ]
  }
};

/* ---- Paliers de niveau (basés sur XP total) ---- */
const LEVELS = [
  { min: 0,    name_fr: "Novice",       name_en: "Novice",     avatarStage: 0 },
  { min: 200,  name_fr: "Apprenti(e)",  name_en: "Apprentice", avatarStage: 2 },
  { min: 500,  name_fr: "Compétent(e)", name_en: "Competent",  avatarStage: 4 },
  { min: 1000, name_fr: "Chevronné(e)", name_en: "Seasoned",   avatarStage: 6 },
  { min: 2000, name_fr: "Expert(e)",    name_en: "Expert",     avatarStage: 9 },
  { min: 3500, name_fr: "Maître",       name_en: "Master",     avatarStage: 11 }
];

/* ---- Personnages d'avatar (ouvriers de chantier / camionneurs) ----
   Chaque personnage est dessiné en SVG dans app.js (fonction AVATAR_SVG).
   "accent" = couleur par défaut du casque/gilet, modifiable via la
   sélection de couleur. */
const AVATAR_CHARACTERS = [
 {
  "id": "dragon",
  "name_fr": "Dragon",
  "name_en": "Dragon",
  "title_fr": "Le Sage",
  "title_en": "The Sage",
  "stages": [
   "🥚",
   "🥚",
   "🦎",
   "🦎",
   "🐲",
   "🐲",
   "🐉",
   "🐉",
   "🐉",
   "🐉",
   "🐉",
   "🐉"
  ]
 },
 {
  "id": "licorne",
  "name_fr": "Licorne",
  "name_en": "Unicorn",
  "title_fr": "La Guérisseuse",
  "title_en": "The Healer",
  "stages": [
   "🥚",
   "🥚",
   "🐴",
   "🐴",
   "🦄",
   "🦄",
   "🦄",
   "🦄",
   "🦄",
   "🦄",
   "🦄",
   "🦄"
  ]
 },
 {
  "id": "phenix",
  "name_fr": "Phénix",
  "name_en": "Phoenix",
  "title_fr": "Le Résilient",
  "title_en": "The Resilient One",
  "stages": [
   "🥚",
   "🥚",
   "🐣",
   "🐣",
   "🐦",
   "🐦",
   "🦅",
   "🦅",
   "🦅",
   "🦅",
   "🦅",
   "🦅"
  ]
 },
 {
  "id": "griffon",
  "name_fr": "Griffon",
  "name_en": "Griffin",
  "title_fr": "Le Courageux",
  "title_en": "The Brave One",
  "stages": [
   "🥚",
   "🥚",
   "🐱",
   "🐱",
   "🦁",
   "🦁",
   "🦁",
   "🦁",
   "🦁",
   "🦁",
   "🦁",
   "🦁"
  ]
 }
];

const AVATAR_COLORS = [
  { id: "jaune",  hex: "#f7b500", name_fr: "Jaune sécurité", name_en: "Safety Yellow" },
  { id: "orange", hex: "#ff7a1a", name_fr: "Orange chantier", name_en: "Site Orange" },
  { id: "vert",   hex: "#3bb54a", name_fr: "Vert forêt", name_en: "Forest Green" },
  { id: "bleu",   hex: "#2a7de1", name_fr: "Bleu acier", name_en: "Steel Blue" },
  { id: "rouge",  hex: "#e13c3c", name_fr: "Rouge feu", name_en: "Fire Red" }
];

/* ---- Machines de l'élève (grossissent avec le XP) ----
   Le dessin SVG de chaque machine est dans app.js (fonction vehicleSVG). */
const VEHICLE_TYPES = [
  { id: "camion", name_fr: "Camion à benne", name_en: "Dump Truck" },
  { id: "pelle", name_fr: "Pelle mécanique", name_en: "Excavator" },
  { id: "bouteur", name_fr: "Bouteur", name_en: "Bulldozer" },
  { id: "chargeuse", name_fr: "Chargeuse", name_en: "Loader" }
];

/* La hauteur affichée (en pixels) interpole entre minHeight et maxHeight
   selon le XP actuel de l'élève (voir vehicleHeight() dans app.js). La
   largeur est calculée automatiquement pour respecter les proportions
   propres à chaque machine (voir VEHICLE_VIEWBOX dans app.js). */
const VEHICLE_GROWTH = { minHeight: 78, maxHeight: 178, maxXP: 3500 };

/* ---- Commandes de cabine (questions basées sur une image) ----
   Chaque machine a 4 commandes numérotées, dessinées par cabinSVG()
   dans app.js aux coordonnées cx/cy (viewBox 0 0 360 220). Ces mêmes
   coordonnées servent à la fois à dessiner l'illustration et à
   positionner les zones cliquables des questions de type "hotspot" —
   l'image et les questions restent donc toujours alignées.
   Configuration générique à titre pédagogique — la disposition réelle
   varie selon le fabricant et le modèle (à valider par l'enseignant). */
const CABIN_CONTROLS = {
  pelle: [
    { num: 1, cx: 100, cy: 168, kind: "joystick",
      label_fr: "Joystick gauche", label_en: "Left joystick",
      desc_fr: "Contrôle la rotation de la tourelle et le godet",
      desc_en: "Controls turret rotation and the bucket" },
    { num: 2, cx: 210, cy: 168, kind: "joystick",
      label_fr: "Joystick droit", label_en: "Right joystick",
      desc_fr: "Contrôle la flèche et le bras (balancier)",
      desc_en: "Controls the boom and the stick (arm)" },
    { num: 3, cx: 160, cy: 205, kind: "pedal",
      label_fr: "Pédales de translation", label_en: "Travel pedals",
      desc_fr: "Font avancer ou reculer les chenilles",
      desc_en: "Move the tracks forward or backward" },
    { num: 4, cx: 320, cy: 150, kind: "button",
      label_fr: "Klaxon", label_en: "Horn button",
      desc_fr: "Avertit les personnes autour de la machine avant un mouvement",
      desc_en: "Warns people around the machine before a movement" }
  ],
  bouteur: [
    { num: 1, cx: 110, cy: 172, kind: "lever",
      label_fr: "Levier de la lame", label_en: "Blade control lever",
      desc_fr: "Lève, abaisse et incline la lame",
      desc_en: "Raises, lowers and tilts the blade" },
    { num: 2, cx: 210, cy: 172, kind: "lever",
      label_fr: "Manettes de direction (chenilles)", label_en: "Steering clutch levers",
      desc_fr: "Contrôlent la direction en ralentissant une chenille à la fois",
      desc_en: "Control steering by slowing one track at a time" },
    { num: 3, cx: 160, cy: 205, kind: "pedal",
      label_fr: "Pédale de frein", label_en: "Brake pedal",
      desc_fr: "Ralentit ou immobilise la machine",
      desc_en: "Slows or stops the machine" },
    { num: 4, cx: 320, cy: 150, kind: "button",
      label_fr: "Klaxon", label_en: "Horn button",
      desc_fr: "Avertit les personnes autour de la machine avant un mouvement",
      desc_en: "Warns people around the machine before a movement" }
  ],
  chargeuse: [
    { num: 1, cx: 210, cy: 168, kind: "lever",
      label_fr: "Levier de commande du godet", label_en: "Bucket control lever",
      desc_fr: "Lève, abaisse et bascule le godet",
      desc_en: "Raises, lowers and tilts the bucket" },
    { num: 2, cx: 110, cy: 172, kind: "wheel",
      label_fr: "Volant de direction", label_en: "Steering wheel",
      desc_fr: "Contrôle la direction des roues",
      desc_en: "Controls the direction of the wheels" },
    { num: 3, cx: 160, cy: 205, kind: "pedal",
      label_fr: "Pédale d'accélérateur", label_en: "Accelerator pedal",
      desc_fr: "Contrôle le régime moteur et la vitesse",
      desc_en: "Controls engine speed and travel speed" },
    { num: 4, cx: 320, cy: 150, kind: "button",
      label_fr: "Klaxon", label_en: "Horn button",
      desc_fr: "Avertit les personnes autour de la machine avant un mouvement",
      desc_en: "Warns people around the machine before a movement" }
  ],
  niveleuse: [
    { num: 1, cx: 190, cy: 172, kind: "lever",
      label_fr: "Leviers de la lame", label_en: "Blade control levers",
      desc_fr: "Ajustent l'angle, la hauteur et l'inclinaison de la lame",
      desc_en: "Adjust the blade's angle, height and tilt" },
    { num: 2, cx: 100, cy: 172, kind: "wheel",
      label_fr: "Volant de direction", label_en: "Steering wheel",
      desc_fr: "Contrôle la direction des roues avant",
      desc_en: "Controls the direction of the front wheels" },
    { num: 3, cx: 255, cy: 172, kind: "switch",
      label_fr: "Commande d'articulation du châssis", label_en: "Frame articulation control",
      desc_fr: "Articule le châssis pour resserrer le rayon de braquage",
      desc_en: "Articulates the frame to tighten the turning radius" },
    { num: 4, cx: 320, cy: 150, kind: "button",
      label_fr: "Klaxon", label_en: "Horn button",
      desc_fr: "Avertit les personnes autour de la machine avant un mouvement",
      desc_en: "Warns people around the machine before a movement" }
  ]
};

/* ---- Trophées (méta-réussites) ---- */
const TROPHIES = [
  { id: "t_first", name_fr: "Premier pas", name_en: "First Step", icon: "🥉",
    desc_fr: "Réussir ton premier palier de compétence", desc_en: "Pass your first competency tier",
    check: (state) => Object.keys(state.completed).length >= 1 },
  { id: "t_half", name_fr: "Mi-parcours", name_en: "Halfway There", icon: "🥈",
    desc_fr: "Maîtriser 10 compétences (palier Avancé)", desc_en: "Master 10 competencies (Advanced tier)",
    check: (state) => (state.badges || []).length >= 10 },
  { id: "t_all", name_fr: "Diplômé virtuel", name_en: "Virtual Graduate", icon: "🏆",
    desc_fr: "Maîtriser les 20 compétences du programme", desc_en: "Master all 20 competencies of the program",
    check: (state) => (state.badges || []).length >= 20 },
  { id: "t_perfect", name_fr: "Sans faute", name_en: "Flawless", icon: "💯",
    desc_fr: "Obtenir 100% à un palier", desc_en: "Score 100% on a tier",
    check: (state) => Object.values(state.completed).some(s => s.score === 100) },
  { id: "t_safety", name_fr: "Zone sécurité", name_en: "Safety Zone", icon: "🦺",
    desc_fr: "Réussir le palier Débutant du module Santé et sécurité", desc_en: "Pass the Beginner tier of the Health & Safety module",
    check: (state) => state.completed["c02_1"] && state.completed["c02_1"].score >= 70 },
  { id: "t_streak", name_fr: "Assidu", name_en: "Dedicated", icon: "🔥",
    desc_fr: "Se connecter 3 jours différents", desc_en: "Log in on 3 different days",
    check: (state) => (state.loginDays || []).length >= 3 },
  { id: "t_podium", name_fr: "Sur le podium", name_en: "On the Podium", icon: "🏅",
    desc_fr: "Atteindre le top 3 du palmarès", desc_en: "Reach the top 3 of the leaderboard",
    check: (state) => (LEADERBOARD_SEED.filter(p => p.xp > state.xp).length) < 3 },
  { id: "t_matcher", name_fr: "Bon association", name_en: "Great Match", icon: "🧩",
    desc_fr: "Réussir 15 questions d'association de termes", desc_en: "Complete 15 term-matching questions",
    check: (state) => (state.matchesCompleted || 0) >= 15 }
];

/* ---- Palmarès (données d'exemple — classe fictive) ----
   À remplacer par de vraies données élèves lorsqu'un backend
   partagé sera branché (voir README). */
const LEADERBOARD_SEED = [
  { name: "Mia-Rose T.", xp: 3120, avatarChar: "operatrice_bouteur", avatarColor: "vert" },
  { name: "Xavier L.", xp: 2450, avatarChar: "contremaitre", avatarColor: "bleu" },
  { name: "Sam D.", xp: 1780, avatarChar: "camionneur", avatarColor: "orange" },
  { name: "Alicia P.", xp: 1290, avatarChar: "camionneuse", avatarColor: "rouge" },
  { name: "Kevin R.", xp: 860, avatarChar: "contremaitre", avatarColor: "jaune" },
  { name: "Noémie B.", xp: 430, avatarChar: "mecanicienne", avatarColor: "bleu" },
  { name: "Tommy G.", xp: 120, avatarChar: "camionneur", avatarColor: "vert" }
];
